import axios from 'axios';
import { Category } from '../types/types';
import { API_ROUTE, CATEGORIES } from '../constants/constants';

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
