"use client"
import React from 'react';
import { usePostContext } from '@/app/context/PostContext';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';

export default function Blog() {
  const { filterPost } = usePostContext();

  return (
    <div className='flex flex-row flex-wrap gap-4 justify-center' >
      {filterPost.map((post) =>
        <div key={post.id} className='flex flex-col border-2 p-4 rounded-xl flex-nowrap w-1/4 justify-center my-auto '>
          <h1 className='text-2xl font-bold mb-4'>{post.author.name}</h1>
          <h2 className="text-xl font-bold mb-4">{post.title}</h2>
          <p className='text-xl mb-4'>{post.tags.join(', ')}</p>
          <div className='flex flex-row flex-nowrap justify-between'>
            <Link href={`/${post.id}`}>
              <button className='border mx-auto px-4 py-1 rounded-xl text-lg hover:bg-sky-300 text-black cursor-pointer'>Read Me..</button>
            </Link>
            <p className="flex items-center gap-2"><FaEye className='text-blue-700 text-lg' /> {post.views}</p>
            </div>
        </div>
      )}
    </div>
  );
};