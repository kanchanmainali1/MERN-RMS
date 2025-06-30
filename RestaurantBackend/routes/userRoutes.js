import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';

const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
// This code defines the user routes for a restaurant management system.
// It imports the Express router and user controller functions for registering and logging in users.