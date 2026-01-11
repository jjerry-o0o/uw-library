import { useQuery } from '@tanstack/react-query';

import { fetchBestBooks } from '@/api/mainApi';

export const useBestBooks = () => {
  return useQuery({
    queryKey: ['bestBooks'],
    queryFn: fetchBestBooks,
  });
};
