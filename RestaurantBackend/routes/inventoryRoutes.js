import express from 'express';
import {
  addInventoryItem,
  getInventoryItems,
  updateInventoryItem,
  deleteInventoryItem,
  reduceInventoryForOrder
} from '../controllers/inventoryController.js';

const router = express.Router();

router.post('/', addInventoryItem);
router.get('/', getInventoryItems);
router.put('/:id', updateInventoryItem);
router.delete('/:id', deleteInventoryItem);

// Used after billing/order
router.post('/consume/:orderId', reduceInventoryForOrder);

export default router;
// This code defines the routes for managing inventory items in a restaurant application.
// It uses Express to create a router that handles HTTP requests for adding, retrieving, updating,
// and deleting inventory items.
// The `addInventoryItem` function is called when a POST request is made to the root path ('/'), allowing new inventory items to be added.
// The `getInventoryItems` function is called for GET requests to the root path, retrieving all inventory items from the database.
// The `updateInventoryItem` function is called for PUT requests to the path with an item ID (/:id), allowing the details of a specific inventory item to be updated.
// The `deleteInventoryItem` function is called for DELETE requests to the path with an item
// ID (/:id), allowing a specific inventory item to be removed from the database.
// Additionally, the `reduceInventoryForOrder` function is called when a POST request is made
// to the path '/consume/:orderId', which reduces the inventory based on the items consumed in a specific order.
// The router is then exported for use in the main application file, where it can be mounted    
// to a specific path (e.g., '/api/inventory').
// This modular approach allows for better organization and maintainability of the code, separating the business logic
// from the routing logic.
// The functions are imported from the `inventoryController.js` file, which contains the actual logic
// for handling these operations.
// The router can be integrated into the main server file, allowing it to handle requests related to
// inventory management in the restaurant management system.