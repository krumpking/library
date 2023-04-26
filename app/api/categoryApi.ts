import axios from 'axios';
import { Category } from '../types/types';
import { ADD_CATEGORY, API_ROUTE, CATEGORIES } from '../constants/constants';

export const getCategory = async () => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<Category[]>(
      `${API_ROUTE}${CATEGORIES}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return null;
    } else {
      console.log('unexpected error: ', error);
      return null;
    }
  }
};

export const addCategory = async (name: string) => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.post<any>(
      `${API_ROUTE}${ADD_CATEGORY}`,
      {
        name: name,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return null;
    } else {
      console.log('unexpected error: ', error);
      return null;
    }
  }
};
