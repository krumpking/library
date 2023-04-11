import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

interface MyProps {
  genre: string;
  id: number;
  url: string;
}

const Categories: FC<MyProps> = ({ genre, id, url }) => {
  const getColor = () => {
    const colors = [
      'bg-sky-600',
      'bg-green-300',
      'bg-red-400',
      'bg-violet-400',
      'bg-lime-300',
      'bg-gray-300',
      'bg-purple-600',
      'bg-pink-600',
      'bg-brown-400',
      'bg-blue-100',
      'bg-indigo-400',
      'bg-orange-400',
    ];
    return colors[id];
  };

  return (
    <div
      className={`${getColor()} font-semibold py-2 px-4 border rounded-lg text-center  text-white`}
    >
      <Link key={id} href={`/categories/${url}`}>
        {genre}
      </Link>
    </div>
  );
};

export default Categories;
