'use client';

import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Dashboard',
  description: 'ini halaman dashboard',
};

export default function Dashboard() {
  const router = useRouter();
  const handleClickDetail = () => {
    router.push(`/tool/${Math.random()}`);
  };
  return (
    <div className='flex flex-col justify-center items-center w-full gap-7'>
      <h1 className='text-6xl'>Tool Page</h1>
      <button className='bg-emerald-500 rounded-md p-3 text-white hover:bg-emerald-800' type='button' onClick={handleClickDetail}>
        Go to detail tool
      </button>
    </div>
  );
}
