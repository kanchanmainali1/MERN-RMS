import MenuItems from "../models/MenuItems.js";


export const createMenuItem = async (req, res) => {
  try {
    const newItem = new MenuItems(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMenuItem = async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Menu item deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// This code defines the controller functions for managing menu items in a restaurant application.
// It includes functions to create, retrieve, update, and delete menu items using Mongoose to interact with a MongoDB database.
// Each function handles the request and response objects, performing the necessary database operations and returning appropriate status codes and messages.
// The functions handle errors by catching exceptions and returning a 500 status code with an error message.
// The `createMenuItem` function creates a new menu item, `getMenuItems` retrieves all menu items, `updateMenuItem` updates an existing item by its ID, and `deleteMenuItem` deletes an item by its ID.
// This modular approach allows for better organization and maintainability of the code, separating the business logic from the routing logic.
// The functions are exported for use in the routes defined in `menuRoutes.js`, allowing for a clean separation of concerns in the application architecture.
// The code uses async/await for asynchronous operations, ensuring that the database interactions are handled efficiently and that the server responds promptly to client requests.
// The `MenuItem` model is imported from the `models/MenuItem.js` file, which defines the schema for menu items, including fields like `name`, `category`, `price`, and `ingredients`.          