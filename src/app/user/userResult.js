import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

const fetcher = (query) => fetch(query).then((res) => res.json());

// async function getData({ name }) {
//   const res = await fetch(`https://api.github.com/users/${name}`);
//   return res.json();
// }

function UserResult({ query }) {
  const { data, isLoading, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher);

  return (
    <div className='mt-4'>
      <p>Hasil Pencarian :</p>
      {isLoading && <p>Sedang mengambil data...</p>}
      {data &&
        data.items.map((obj, index) => (
          <ul className='list-disc ml-7' key={index}>
            <li>
              <Link href={`/user/${obj.login}`} className='text-cyan-500 hover:text-cyan-800'>
                {obj.login}
              </Link>
            </li>
            <li>
              <Link href={obj.repos_url} className='text-cyan-500 hover:text-cyan-800'>
                Repository {obj.login}
              </Link>
            </li>
          </ul>
        ))}
      {error && <p>Error saat mengambil data.</p>}
    </div>
  );
}

export default UserResult;
