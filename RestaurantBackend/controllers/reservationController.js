import TableReservation from '../models/TableReservation.js';

export const createReservation = async (req, res) => {
  try {
    const { customerName, contactNumber, tableNo, date, time, guests } = req.body;

    // Check for duplicate reservation
    const existing = await TableReservation.findOne({ tableNo, date, time });
    if (existing) {
      return res.status(400).json({ message: "Table already reserved for this slot." });
    }

    const reservation = new TableReservation({
      customerName,
      contactNumber,
      tableNo,
      date,
      time,
      guests
    });

    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReservations = async (req, res) => {
  try {
    const reservations = await TableReservation.find().sort({ date: 1, time: 1 });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    await TableReservation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reservation cancelled' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
