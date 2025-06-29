import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true }, // e.g., Rent, Salary
  amount: { type: Number, required: true },
  category: { type: String }, // optional: utilities, maintenance
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Expense', expenseSchema);
// This code defines a Mongoose schema for an Expense model in a restaurant management system.
// The schema includes fields for the title of the expense (e.g., Rent, Salary),
// the amount of the expense, an optional category (e.g., utilities, maintenance), and the date of the expense.
// The `date` field defaults to the current date and time when a new expense is created