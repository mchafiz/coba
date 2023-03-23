import React from 'react';

function Layout({ children }) {
  return (
    <div className='inline-flex justify-start'>
      <div className='bg-cyan-400 h-screen w-48'>
        <p className='text-4xl text-red-600'>Sidebar</p>
      </div>
      {children}
    </div>
  );
}

export default Layout;
