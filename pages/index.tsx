import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { selectPosition } from '../app/store/reducer';
import Link from 'next/link';
import Navbar from '../components/navbar';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col p-16">
      <Navbar />
    </div>
  );
};

export default Home;
