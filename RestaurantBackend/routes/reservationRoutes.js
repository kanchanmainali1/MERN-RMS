import express from 'express';
import {
  createReservation,
  getReservations,
  deleteReservation
} from '../controllers/reservationController.js';

const router = express.Router();

router.post('/', createReservation);
router.get('/', getReservations);
router.delete('/:id', deleteReservation);

export default router;
// This code defines the routes for managing table reservations in a restaurant application.
// It uses Express to create a router that handles HTTP requests for creating, retrieving, and deleting reservations.
// The `createReservation` function is called when a POST request is made to the root path ('/'), allowing new reservations to be created.
// The `getReservations` function is called for GET requests to the root path, retrieving all reservations from the database.
// The `deleteReservation` function is called for DELETE requests to the path with a reservation ID (/:id), allowing a specific reservation to be removed from the database.
// The router is then exported for use in the main application file, where it can be mounted to a specific path (e.g., '/api/reservations').
// This modular approach allows for better organization and maintainability of the code, separating the business logic
// from the routing logic.
// The functions are imported from the `reservationController.js` file, which contains the actual logic
// for handling these operations.
// The router can be integrated into the main server file, allowing it to handle requests related to
// table reservations in the restaurant management system.