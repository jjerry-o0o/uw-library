import { useQuery } from '@tanstack/react-query';

import { axiosApi } from '@/api/axiosInstans';

export const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axiosApi.get(`/categories`);
      return res.data;
    },
  });
