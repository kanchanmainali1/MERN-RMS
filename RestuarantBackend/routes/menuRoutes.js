import express from 'express';
import {
  createMenuItem,
  getMenuItems,
  updateMenuItem,
  deleteMenuItem
} from '../controllers/menuController.js';

const router = express.Router();

router.post('/', createMenuItem);
router.get('/', getMenuItems);
router.put('/:id', updateMenuItem);
router.delete('/:id', deleteMenuItem);

export default router;
// This code defines the routes for managing menu items in a restaurant application.
// It uses Express to create a router that handles HTTP requests for creating, retrieving, updating,