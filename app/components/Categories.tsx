import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

interface MyProps {
  genre: string;
  id: number;
  url: string;
  color: string;
}

const Categories: FC<MyProps> = ({ genre, id, url, color }) => {
  return (
    <div
      className={`font-semibold py-2 px-4 border rounded-lg text-center ${color} text-white`}
    >
      <Link key={id} href={`/categories/${url}`}>
        {genre}
      </Link>
    </div>
  );
};

export default Categories;
