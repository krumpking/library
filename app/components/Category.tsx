import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '../types/types';

const Categories = () => {
  const [category, setCategories] = useState<Category[]>([
    {
      id: 1,
      title: 'Classic Collection',
      url: 'https://cdn.pixabay.com/photo/2018/01/15/19/45/sunset-3084651_960_720.jpg',
    },
    {
      id: 2,
      title: 'Fiction Books',
      url: 'https://cdn.pixabay.com/photo/2022/11/22/22/06/bird-7610726_960_720.jpg',
    },
    {
      id: 3,
      title: 'Children Books',
      url: 'https://cdn.pixabay.com/photo/2023/03/06/13/57/polar-bear-7833514_960_720.jpg',
    },
    {
      id: 4,
      title: 'Action Books',
      url: 'https://cdn.pixabay.com/photo/2017/02/07/10/00/valentines-day-2045468_960_720.png',
    },
  ]);

  // useEffect(() => {
  // getCategory()
  //   .then((value: any) => {
  //     console.log(value);
  //     if (value !== null) {
  //       setCategories(value);
  //     } else {
  //       // alert('There was an error please try again');
  //     }
  //   })
  //   .catch(console.error);
  // }, [category]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {category.map(({ id, url, title }, index: number) => {
        return (
          <div
            key={id}
            className="drop-shadow-2xl rounded-xl grid grid-cols-5 bg-slate-100"
          >
            <img
              src={url}
              alt={title}
              className="rounded-xl col-span-3 h-[150px] w-64"
            />
            <div>
              <h3 className="text-3xl">{title}</h3>
              <h3 className="font-light">Explore</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
