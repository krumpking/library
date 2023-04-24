import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { selectPosition } from '../app/store/reducer';
import Link from 'next/link';
// import Navbar from '../components/navbar';

import Navbar from '../app/components/navbar';

import { getGenres } from '../app/api/GenreApi';
import Genres from '../app/components/Genres';
import { Genre } from '../app/types/types';
import Category from '../app/components/Category';
import AddGenre from '../app/components/AddGenre';

const Home: NextPage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    getGenres()
      .then((value: any) => {
        if (value !== null) {
          setGenres(value);
        } else {
          // alert('There was an error please try again');
        }
      })
      .catch(console.error);
  }, [genres]);

  return (
    <div className="flex flex-col p-16">
      <Navbar />
      <div
        id="categories"
        className="grid grid-cols-6 gap-6 mt-6 justify-between p-8 mx-auto"
      >
        {genres.map((value: Genre, index: number) => {
          return (
            <Genres
              key={index}
              genre={value.genre}
              id={value.id}
              url={value.url}
            />
          );
        })}
      </div>
      <Category />
    </div>
  );
};

export default Home;
