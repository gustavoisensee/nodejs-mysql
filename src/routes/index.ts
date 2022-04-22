import { Router } from 'express';
import userRoutes from './user.js';
import postRoutes from './post.js';
import genericRouter from './generic.js';

const router = Router();

router.use('/api/v1', [userRoutes, postRoutes]);
router.use([genericRouter]);

export default router;
