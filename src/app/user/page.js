'use client';
import React, { useState } from 'react';
import UserResult from './userResult';

export default function User() {
  const [query, setQuery] = useState(null);
  const onSearch = (e) => {
    console.log(e);
    e.preventDefault();

    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };
  return (
    <div className='flex flex-col w-full justify-center items-start mt-4 ml-4'>
      <form
        onSubmit={(e) => {
          onSearch(e);
        }}>
        <div className='inline-flex gap-3'>
          <input placeholder='User Name' className='border-2 border-gray-400 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' />

          <button className='rounded-md p-3 bg-cyan-400 text-white font-semibold' type='submit'>
            Find
          </button>
        </div>
      </form>

      {query && <UserResult query={query} />}
    </div>
  );
}
