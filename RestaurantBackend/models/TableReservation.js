import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  tableNo: { type: Number, required: true },
  date: { type: String, required: true }, // 'YYYY-MM-DD'
  time: { type: String, required: true }, // 'HH:MM'
  guests: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

reservationSchema.index({ tableNo: 1, date: 1, time: 1 }, { unique: true });

export default mongoose.model('TableReservation', reservationSchema);
// This code defines a Mongoose schema for a TableReservation model in a restaurant management system.
// The schema includes fields for customer name, contact number, table number, date, time,
// number of guests, and the creation date of the reservation.
// The `tableNo`, `date`, and `time` fields are indexed together to ensure
// that each table can only have one reservation at a specific date and time, enforcing uniqueness.
// The schema is then exported as a Mongoose model named 'TableReservation', which can be
// used to interact with table reservations in the database.
// The `createdAt` field automatically sets the date and time when the reservation is created.