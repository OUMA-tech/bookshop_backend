// src/routes/book.routes.ts
import express from 'express';
import { createBook, updateBook, deleteBook } from '../controllers/bookController';
// import { protect, isAdmin } from '../middlewares/authMiddleware'; 

// for test
const isTestEnv = process.env.TEST_ENV === 'true';

const dummy = (_req: any, _res: any, next: any) => {
  console.log('🔓 Dummy middleware called (TEST_ENV)');
  next();
};

const protect = isTestEnv ? dummy : require('../middlewares/authMiddleware').protect;
const isAdmin = isTestEnv ? dummy : require('../middlewares/authMiddleware').isAdmin;

const router = express.Router();

router.post('/books', createBook);
router.put('/books/:id', protect, isAdmin, updateBook);
router.delete('/books/:id', protect, isAdmin, deleteBook);


export default router;