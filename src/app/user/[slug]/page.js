import React from 'react';

async function getData(name) {
  const res = await fetch(`https://api.github.com/users/${name}`);
  return res.json();
}

async function getDataRepos(name) {
  const res = await fetch(`https://api.github.com/users/${name}/repos`);
  return res.json();
}

export default async function DetailCari({ params }) {
  const { slug } = params;
  const data = getData(slug);
  const dataRepos = getDataRepos(slug);

  const [user, repos] = await Promise.all([data, dataRepos]);

  return (
    <div className='m-5'>
      <p>Detail User : {slug}</p>

      <div className='mt-5'>{JSON.stringify(user)}</div>

      <p>List Repository : </p>
      <div className='mt-5'>{JSON.stringify(repos)}</div>
    </div>
  );
}
