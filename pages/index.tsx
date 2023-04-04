import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { selectPosition } from '../app/store/reducer';

const Home: NextPage = () => {
  return <div>Hello welcome to VIP template</div>;
};

export default Home;
