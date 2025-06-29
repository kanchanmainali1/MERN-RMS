import InventoryItem from '../models/InventoryItem.js';
import Order from '../models/Order.js';

export const addInventoryItem = async (req, res) => {
  try {
    const item = new InventoryItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInventoryItems = async (req, res) => {
  try {
    const items = await InventoryItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateInventoryItem = async (req, res) => {
  try {
    const updated = await InventoryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteInventoryItem = async (req, res) => {
  try {
    await InventoryItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Reduce stock when order is placed
export const reduceInventoryForOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate('items.menuItemId');
    if (!order) return res.status(404).json({ message: 'Order not found' });

    for (const orderItem of order.items) {
      const menuItem = orderItem.menuItemId;
      const quantity = orderItem.quantity;

      // Loop ingredients
      for (const ingredient of menuItem.ingredients) {
        const inventory = await InventoryItem.findOne({ name: ingredient.name });
        if (inventory) {
          const totalUsed = ingredient.cost * quantity; // Optional: if 'cost' = quantity used
          inventory.quantity = Math.max(inventory.quantity - totalUsed, 0);
          await inventory.save();
        }
      }
    }

    res.status(200).json({ message: 'Inventory updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
