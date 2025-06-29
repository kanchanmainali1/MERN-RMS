import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'waiter', 'cashier', 'chef'], default: 'waiter' },
});

export default mongoose.model('User', userSchema);
// This code defines a Mongoose schema for a User model in a restaurant management system.
// The schema includes fields for name, email, password, and role, with role having a default value of 'waiter' and being limited to specific roles (admin, waiter, cashier, chef).
// The email field is unique, ensuring no two users can have the same email address.