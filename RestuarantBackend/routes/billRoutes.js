import express from 'express';
import {
  generateBill,
  getBill,
  updatePaymentStatus
} from '../controllers/billController.js';

const router = express.Router();

router.post('/:orderId', generateBill);
router.get('/:orderId', getBill);
router.put('/:orderId/status', updatePaymentStatus);

export default router;
// This code defines the routes for managing bills in a restaurant application.
// It uses Express to create a router that handles HTTP requests for generating, retrieving, and updating bills.
// The `generateBill` function is called when a POST request is made to the path with an order ID (/:orderId), allowing a bill to be generated for a specific order.
// The `getBill` function is called for GET requests to the same path, retrieving the bill associated with that order ID.
// The `updatePaymentStatus` function is called for PUT requests to the path with an order ID (/:orderId/status), allowing the payment status of the bill to be updated.
// The router is then exported for use in the main application file, where it can be mounted to a specific path (e.g., '/api/bills').
// This modular approach allows for better organization and maintainability of the code, separating the business logic from the routing logic.
// The functions are imported from the `billController.js` file, which contains the actual logic for handling these operations.
// The router can be integrated into the main server file, allowing it to handle requests related to bills in the restaurant management system.
// This code is part of a larger restaurant management system, where bills are generated based on orders placed by customers.
// It allows restaurant staff to manage billing efficiently, ensuring that all transactions are recorded and payment statuses are updated accordingly.
// The use of async/await in the controller functions ensures that the operations are performed asynchronously,     
// improving the performance and responsiveness of the application.
// making it suitable for real-time applications like restaurant management systems.