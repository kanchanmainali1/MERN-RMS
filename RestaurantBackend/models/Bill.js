import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  billItems: [
    {
      name: String,
      quantity: Number,
      price: Number,
      total: Number
    }
  ],
  grandTotal: Number,
  paymentStatus: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Bill', billSchema);
// This code defines a Mongoose schema for a Bill model in a restaurant management system.
// The schema includes fields for the order ID, bill items (with name, quantity, price, and total), grand total, payment status, and creation date.
// The `orderId` field references the Order model, establishing a relationship between bills and orders.
// The `billItems` field is an array of objects, each representing an item on the bill.
// The `paymentStatus` field indicates whether the bill has been paid or not, with a default value of 'Unpaid'.
// The `createdAt` field automatically sets the date and time when the bill is created. 