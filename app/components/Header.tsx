'use client'
import React,{ useEffect, useState } from 'react'
import { usePostContext } from '@/app/context/PostContext';

const Header = () => {
    const { posts, setFilterPost } = usePostContext();  
    const [searchText, setSearchText] = useState('')
 
    useEffect(() => {
        const filter = posts.filter((post) => (
            post.author.name.toLowerCase().includes(searchText.toLowerCase()) ||
            post.title.toLowerCase().includes(searchText.toLowerCase()) ||
            post.tags.join(" ").toLowerCase().includes(searchText.toLowerCase())
        ));
        setFilterPost(filter)
    },[searchText])
  return (
    <div className='w-full h-[60px] flex justify-center items-center'>
        <input 
            type="text"
            placeholder='Search....'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}  
            className='border-2 rounded-full w-1/3  text-2xl font-bold px-4 py-1 m-1'    
        />
    </div>
  )
}

export default Header