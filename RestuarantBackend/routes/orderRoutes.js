import express from 'express';
import {
  createOrder,
  getOrders,
  updateOrderStatus
} from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrders);
router.put('/:id/status', updateOrderStatus);

export default router;
// This code defines the routes for managing orders in a restaurant application.
// It uses Express to create a router that handles HTTP requests for creating, retrieving, and updating orders.
// The `createOrder` function is called when a POST request is made to the root path ('/'), allowing new orders to be created.
// The `getOrders` function is called for GET requests to the root path, retrieving all orders from the database.
// The `updateOrderStatus` function is called for PUT requests to the path with an order    ID (/:id/status), allowing the status of a specific order to be updated.
// The router is then exported for use in the main application file, where it can be mounted to a specific path (e.g., '/api/orders').      