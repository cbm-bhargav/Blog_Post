"use client"
import React,  { use } from 'react';
import { usePostContext } from '@/app/context/PostContext';
import Image from 'next/image';
import { FaThumbsUp, FaThumbsDown, FaEye } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

export default function Post({ params } : { params : Promise<{ id : string }> }) {
  const { id } = use(params) 
  const searchParams = useSearchParams()
  const { posts } = usePostContext();
  const post = posts.find((p) => p.id === Number(id))

  if (!post) return <p className="text-center text-red-500">Post not found!</p>;

  return (
    <div className='flex h-[90vh] flex-col flex-wrap justify-center items-center my-auto '>
      <div className='w-1/3 border-2 rounded-2xl p-4 bg-white'>
        <div className='flex flex-row flex-wrap justify-around items-center mb-2 '>
          <Image src={post.author.profilePicture} alt='Author Profile Picture' width={100} height={100}
            className='w-[100px] h-[100px] object-cover rounded-full'></Image>
          <h1 className='text-2xl font-bold font-mono mb-2'>{post.author.name}</h1>
        </div>
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className='text-lg mb-2'>{post.body}</p>
        <p className='text-lg font-semibold mb-2 '>{post.tags.join(', ')}</p>
        <div className='flex flex-row flex-wrap justify-between items-end mt-auto'>
          <div className='flex flex-row flex-nowrap gap-x-3'>
            <p className="flex items-center text-lg font-semibold gap-1"><FaThumbsUp className='text-green-700 text-xl font-bold' /> {post.reactions.likes}</p>
            <p className="flex items-center text-lg font-semibold gap-1"><FaThumbsDown className='text-red-700 text-xl font-bold' /> {post.reactions.dislikes}</p>
          </div>
          <p className="flex items-center text-lg font-semibold gap-2"><FaEye className='text-blue-700 text-xl font-bold' /> {post.views}</p>
        </div>
      </div>
    </div>
  );
};