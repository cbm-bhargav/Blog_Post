'use client';

import React, { createContext, useContext, useState } from 'react';
import posts from '@/app/data/posts.json';

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
  author: {
    id: number;
    name: string;
    email: string;
    profilePicture: string;
  };
};

type PostContextType = {
  posts: Post[];
  filterPost: Post[];
  setFilterPost: (posts: Post[]) => void;
};

const PostContext = createContext<PostContextType>({
  posts: [],
  filterPost: [],
  setFilterPost: () => {},
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterPost, setFilterPost] = useState<Post[]>(posts);

  return (
    <PostContext.Provider value={{ posts, filterPost, setFilterPost}}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
