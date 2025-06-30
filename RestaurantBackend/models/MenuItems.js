import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  cost: Number
});

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: [ingredientSchema],
});

export default mongoose.model('MenuItem', menuItemSchema);
