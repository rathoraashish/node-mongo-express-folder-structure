import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/userController.js';
import { validateUser } from '../validations/userValidation.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.post('/', validateUser, createUser);

export default router;
