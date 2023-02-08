import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import AuthController from './app/controllers/AuthController';
import UserController from './app/controllers/UserController'
import CategoryController from './app/controllers/CategoryController';

const router = Router();


// User's routes
router.post('/users', UserController.store);
router.get('/users', authMiddleware, UserController.index);


// Auth's route
router.post('/auth', AuthController.authenticate);

// Categories and exercises routes
router.post('/category', CategoryController.store)
router.post('/category/:exerciseId', (req, res) => {
    res.send('Ok')
})

export default router;