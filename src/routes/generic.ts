import { Router } from 'express';
import { notFound } from '../controllers/generic.js';

const router = Router();

router.get('*', notFound);

export default router;
