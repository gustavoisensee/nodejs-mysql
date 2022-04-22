import { RequestFallback } from '../types/request';

export const notFound: RequestFallback = (req, res) => {
  res.send('Route not found! <br />Try /api/v1/users for example!');
}