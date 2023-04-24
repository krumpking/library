import axios from 'axios';
import { Genre } from '../types/types';
import { API_ROUTE, GENRES } from '../constants/constants';
import Genres from '../components/Genres';

export const getGenres = async () => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<Genre[]>(`${API_ROUTE}${GENRES}`, {
      headers: {
        Accept: 'application/json',
      },
    });
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
