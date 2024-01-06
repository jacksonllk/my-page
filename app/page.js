// /app/page.js
import React from 'react';
import Blog from '@/components/Blog';

export default function Page() {
  return (
    <div>
      <h1 className='text-center font-bold text-3xl mb-3'>Latest Updates</h1>
      <Blog />
    </div>
  );
}
