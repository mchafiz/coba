'use client';

import React, { useState } from 'react';

function Calculator() {
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [hasil, setHasil] = useState(0);

  return (
    <div className='flex flex-col w-full justify-center items-center h-full'>
      <form>
        <div className='inline-flex gap-3'>
          <input
            placeholder='angka1'
            className='border-2 border-gray-400 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            onChange={(e) => {
              setAngka1(Number(e.target.value));
            }}
          />
          <input
            placeholder='angka2'
            className='border-2 border-gray-400 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            onChange={(e) => {
              setAngka2(Number(e.target.value));
            }}
          />
          <button
            className='rounded-md p-3 bg-cyan-400 text-white font-semibold'
            onClick={(e) => {
              e.preventDefault();
              setHasil(angka1 + angka2);
            }}>
            Hitung
          </button>
        </div>

        <p>Hasil : {hasil}</p>
      </form>
    </div>
  );
}

export default Calculator;
