import axios from 'axios';
import { Category } from '../types/types';
import { API_ROUTE, GENRES } from '../constants/constants';

export const getGenres = async () => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<Category[]>(
      `${API_ROUTE}${GENRES}`,
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
