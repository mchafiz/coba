'use client';

import React from 'react';

import { useSearchParams } from 'next/navigation';

export default function DetailDashboard({ params }) {
  const searchParams = useSearchParams();

  const path = searchParams.get('path');
  const { slug } = params;
  return (
    <div className='flex flex-col justify-center items-center w-full gap-3'>
      <p className='text-5xl font-bold'>Detail Tool</p>
      <div className='flex flex-col justify-center items-center w-full gap-0'>
        <p className='text-3xl font-normal'>Dynamic Path - {slug}</p>
        {path ? <p className='text-3xl font-normal'>Search Param - {path}</p> : null}
      </div>
    </div>
  );
}
