import mongoose from 'mongoose';

const inventoryItemSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true }, // measured in units (e.g., grams or pieces)
  unit: { type: String, required: true } // e.g., 'kg', 'liter', 'pcs'
});

export default mongoose.model('InventoryItem', inventoryItemSchema);
// This code defines a Mongoose schema for an InventoryItem model in a restaurant management system.
// The schema includes fields for the name of the item, its quantity, and the unit of measurement.
// The `name` field is required and must be unique, ensuring no two inventory items can have the same name.
// The `quantity` field is required and represents the amount of the item in stock, while       
// the `unit` field specifies the unit of measurement (e.g., kilograms, liters, pieces).
// The schema is then exported as a Mongoose model named 'InventoryItem', which can be used to interact with the inventory items in the database.