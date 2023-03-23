import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className='bg-gray-800 text-white'>
      <nav className='flex items-center justify-between p-4'>
        <div>
          <Link href='/'>
            <p className='font-bold text-xl'>My Website</p>
          </Link>
        </div>
        <div className='inline-flex'>
          <Link href='/user'>
            <p className='mr-4'>User</p>
          </Link>
          <Link href='/calculator'>
            <p className='mr-4'>Calculator</p>
          </Link>

          <Link href='/tool'>
            <p className='mr-4'>Tool</p>
          </Link>
          <Link href='/profile'>
            <p>Profile</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
