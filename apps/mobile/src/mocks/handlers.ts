import { http, HttpResponse } from 'msw';

import BookData from '@/mocks/data/book.json';
import CategoryData from '@/mocks/data/category.json';

export const handlers = [
  http.get('/api/categories', () => {
    return HttpResponse.json(CategoryData);
  }),

  http.get('/api/bestBooks', () => {
    return HttpResponse.json(BookData);
  }),
];
