import { RequestFallback } from '../types/request';

export const getAll: RequestFallback = (req, res) => {
  res.json([
    'User A',
    'User B',
    'User C'
  ]);
}