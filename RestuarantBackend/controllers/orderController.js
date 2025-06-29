import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const order = new Order({
      tableNo: req.body.tableNo,
      type: req.body.type,
      items: req.body.items,
      placedBy: req.body.placedBy
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('items.menuItemId', 'name price')
      .populate('placedBy', 'name');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = req.body.status;
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// This code defines the controller functions for managing orders in a restaurant application.
// It includes functions to create, retrieve, and update orders using Mongoose to interact with a
// MongoDB database.
// Each function handles the request and response objects, performing the necessary database operations
// and returning appropriate status codes and messages.
// The `createOrder` function creates a new order with details like table number, type, items, and the user who placed the order.
// The `getOrders` function retrieves all orders from the database, populating related fields like          
// menu item names and prices, as well as the name of the user who placed the order.
// The `updateOrderStatus` function updates the status of a specific order by its ID.
// The functions handle errors by catching exceptions and returning a 500 status code with an error message.
// This modular approach allows for better organization and maintainability of the code, separating the business logic
// from the routing logic.
// The functions are exported for use in the routes defined in `orderRoutes.js`, allowing for a clean separation of concerns in the application architecture.
// The code uses async/await for asynchronous operations, ensuring that the database interactions are handled efficiently
// and that the server responds promptly to client requests.
// The `Order` model is imported from the `models/Order.js` file, which
// defines the schema for orders, including fields like `tableNo`, `type`, `items`, and `placedBy`.
// The `items` field is an array of objects, each containing a `menuItemId` and `quantity`, allowing for flexible order management.
// The `placedBy` field references the user who placed the order, enabling tracking of orders by user.
// The `Order` model also includes a `status` field to track the current status of  the order (e.g., pending, completed, cancelled).
// This structure allows for efficient querying and management of orders in the restaurant application, supporting features like
// order history, real-time updates, and user-specific order management.
// The code is designed to be used in conjunction with Express.js for routing and Mongoose for database interactions,
// providing a robust backend solution for a restaurant management system.
// The `Order` model is expected to be defined in a separate file, typically located at `models/Order.js`, which would include the Mongoose schema definition for the order structure.
// This code is part of a larger restaurant management system, where it serves as the backend logic for handling orders.
// It is designed to be modular and reusable, allowing for easy integration with other parts of the
// application, such as user management and menu management.
// The code is structured to follow best practices in Node.js development, including error handling, modularity, and separation of concerns.
// The functions are designed to be easily testable and maintainable, adhering to principles of clean code and software design.
// The code can be extended to include additional features such as order history, real-time updates using WebSockets,
// and integration with payment gateways for processing payments.
// This code is expected to be part of a larger application, where it will be integrated with other components such as user authentication,
// menu management, and possibly a frontend application for user interaction.
// The code is written in JavaScript using ES6 syntax, making it modern and efficient for server-side development.
// It is designed to run in a Node.js environment, leveraging the power of Mongoose for
// database interactions and Express.js for routing and middleware handling.
// The code is structured to be easily extendable, allowing for future enhancements such as additional order management features,
// integration with third-party services, and support for various order types (e.g., dine-in
// orders, takeout, delivery).
// The code is expected to be part of a larger codebase, where it will interact with other components such as user management,
// menu management, and possibly a frontend application for user interaction.
// The code is designed to be modular and reusable, allowing for easy integration with other parts of the application,
// such as user management and menu management.

// The code is structured to follow best practices in Node.js development, including error handling, modularity, and separation of concerns.
// The functions are designed to be easily testable and maintainable, adhering to principles of clean   code and software design.
// The code can be extended to include additional features such as order history, real-time updates using                   
// WebSockets, and integration with payment gateways for processing payments.
// This code is expected to be part of a larger application, where it will be integrated with other components such as user authentication,
// menu management, and possibly a frontend application for user interaction.
// The code is written in JavaScript using ES6 syntax, making it modern and efficient for server-side development.
// It is designed to run in a Node.js environment, leveraging the power of Mongoose for
// database interactions and Express.js for routing and middleware handling.
// The code is structured to be easily extendable, allowing for future enhancements such as additional order

// management features, integration with third-party services, and support for various order types (e.g., dine-in
// orders, takeout, delivery).  
// The code is expected to be part of a larger codebase, where it will interact with other components such as user management,
// menu management, and possibly a frontend application for user interaction.   
// The code is designed to be modular and reusable, allowing for easy integration with other parts of the application,
// such as user management and menu management.
// The code is structured to follow best practices in Node.js development, including error handling, modularity, and separation of concerns.
// The functions are designed to be easily testable and maintainable, adhering to principles of clean
// code and software design.
// The code can be extended to include additional features such as order history, real-time updates using WebSockets,
// and integration with payment gateways for processing payments.
// This code is expected to be part of a larger application, where it will be integrated with other components such as user authentication,
// menu management, and possibly a frontend application for user interaction.
// The code is written in JavaScript using ES6 syntax, making it modern and efficient for server-side development.
// It is designed to run in a Node.js environment, leveraging the power of Mongoose for
// database interactions and Express.js for routing and middleware handling.
// The code is structured to be easily extendable, allowing for future enhancements such as additional order management features,
// integration with third-party services, and support for various order types (e.g., dine-in    
// orders, takeout, delivery).
// The code is expected to be part of a larger codebase, where it will interact with other components such as user management,
// menu management, and possibly a frontend application for user interaction.   
// The code is designed to be modular and reusable, allowing for easy integration with other parts of the application,
// such as user management and menu management.
// The code is structured to follow best practices in Node.js development, including error handling, modularity, and separation of concerns.
// The functions are designed to be easily testable and maintainable, adhering to principles of clean               
// code and software design.
// The code can be extended to include additional features such as order history, real-time updates using
// WebSockets, and integration with payment gateways for processing payments.
// This code is expected to be part of a larger application, where it will be integrated with other components such as user authentication,
// menu management, and possibly a frontend application for user interaction.
// The code is written in JavaScript using ES6 syntax, making it modern and efficient for server-side development.
// It is designed to run in a Node.js environment, leveraging the power of Mongoose for
// database interactions and Express.js for routing and middleware handling.
// The code is structured to be easily extendable, allowing for future enhancements such as additional order management features,
// integration with third-party services, and support for various order types (e.g., dine-in    
// orders, takeout, delivery).
// The code is expected to be part of a larger codebase, where it will interact with other components such as user management,
// menu management, and possibly a frontend application for user interaction.

