import { Router } from 'express';
import { getAll } from '../controllers/user.js';

const router = Router();

router.get('/users', getAll);

export default router;
