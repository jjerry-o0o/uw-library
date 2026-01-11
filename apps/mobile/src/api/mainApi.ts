import { axiosApi } from '@/api/axiosInstans';

export const fetchBestBooks = async () => {
  const { data } = await axiosApi.get(`/bestBooks`);
  return data;
};
