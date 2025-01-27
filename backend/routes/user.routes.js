import { Router } from 'express';
// import * as userController from '../controllers/user.controller';
import { createUserController } from '../controllers/user.controller.js';
import { body } from 'express-validator';

const router = Router();

router.post('/register', 
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({ min: 6, max: 50 }).withMessage('Password must be at least 6 characters long'),
    
    createUserController
);

export default router;