import React from 'react';

async function getDataRepos(name) {
  const res = await fetch(`https://api.github.com/users/${name}/repos`);
  return res.json();
}

export default async function ListRepos({ slug }) {
  const dataRepos = await getDataRepos(slug);

  return (
    <div>
      <p>List Repository : </p>
      <div className='mt-5'>{JSON.stringify(dataRepos)}</div>
    </div>
  );
}
