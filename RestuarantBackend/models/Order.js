import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  quantity: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
  tableNo: { type: Number, required: true },
  type: { type: String, enum: ['KOT', 'BOT'], required: true }, // KOT = Kitchen, BOT = Bar
  status: { type: String, enum: ['Pending', 'Preparing', 'Served'], default: 'Pending' },
  items: [orderItemSchema],
  placedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
