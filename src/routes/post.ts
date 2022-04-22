import { Router } from 'express';
import { getAll } from '../controllers/post.js';

const router = Router();

router.get('/posts', getAll);

export default router;
