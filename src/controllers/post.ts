import { RequestFallback } from '../types/request';

export const getAll: RequestFallback = (req, res) => {
  res.json([
    'Post A',
    'Post B',
    'Post C'
  ]);
}