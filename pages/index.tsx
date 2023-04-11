import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { selectPosition } from '../app/store/reducer';
import Link from 'next/link';
// import Navbar from '../components/navbar';
import Categories from '../app/components/Categories';
import Navbar from '../app/components/navbar';
import { Category } from '../app/types/types';
import { getGenres } from '../app/api/categoryApi';

const Home: NextPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getGenres()
      .then((value: any) => {
        console.log(value);
        if (value !== null) {
          setCategories(value);
        } else {
          // alert('There was an error please try again');
        }
      })
      .catch(console.error);
  }, [categories]);

  return (
    <div className="flex flex-col p-16">
      <Navbar />
      {/* <Navbar /> */}
      <div
        id="categories"
        className="grid grid-cols-6 gap-6 mt-6 justify-between p-8 mx-auto"
      >
        {categories.map((value: Category, index: number) => {
          return (
            <Categories
              key={index}
              genre={value.genre}
              id={value.id}
              url={value.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
