import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { selectPosition } from '../app/store/reducer';
import Link from 'next/link';
// import Navbar from '../components/navbar';
import Categories from '../app/components/Categories';
import Navbar from '../app/components/navbar';

const Home: NextPage = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      genre: 'Romance',
      url: 'romance',
      color: 'bg-sky-600',
    },
    {
      id: 2,
      genre: 'Comedy',
      url: 'comedy',
      color: 'bg-blue-600',
    },
    {
      id: 3,
      genre: 'Mystrey',
      url: 'mystrey',
      color: 'bg-purple-600',
    },
    {
      id: 4,
      genre: 'Thriller',
      url: 'thriller',
      color: 'bg-red-600',
    },
    {
      id: 5,
      genre: 'Mystrey',
      url: 'mystrey',
      color: 'bg-orange-600',
    },
    {
      id: 6,
      genre: 'SciFi',
      url: 'scifi',
      color: 'bg-yellow-600',
    },
    {
      id: 7,
      genre: 'Kids',
      url: 'kids',
      color: 'bg-green-600',
    },
    {
      id: 8,
      genre: 'Adventure',
      url: 'adventure',
      color: 'bg-gray-600',
    },
    {
      id: 9,
      genre: 'Comics',
      url: 'comics',
      color: 'bg-amber-600',
    },
    {
      id: 10,
      genre: 'Fantasy',
      url: 'fantasy',
      color: 'bg-lime-600',
    },
    {
      id: 11,
      genre: 'Classics',
      url: 'classic',
      color: 'bg-sky-600',
    },
    {
      id: 12,
      genre: 'Fantasy',
      url: 'fantasy',
      color: 'bg-indigo-600',
    },
  ]);

  // useEffect(() => {
  //   let u = [];
  //   for (let index = 0; index < 12; index++) {
  //     u.push('s');
  //   }
  //   setCategories(u);
  // }, []);

  return (
    <div className="flex flex-col p-16">
      <Navbar />
      {/* <Navbar /> */}
      <div
        id="categories"
        className="grid grid-cols-6 gap-6 mt-6 justify-between p-8 mx-auto"
      >
        {categories.map((value, index) => {
          return (
            <Categories
              key={index}
              genre={value.genre}
              id={value.id}
              url={value.url}
              color={value.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
