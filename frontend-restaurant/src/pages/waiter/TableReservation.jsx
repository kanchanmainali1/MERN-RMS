import { useState } from 'react';
import axios from 'axios';

const TableReservation = () => {
  const [form, setForm] = useState({
    customerName: '',
    contactNumber: '',
    tableNo: '',
    date: '',
    time: '',
    guests: ''
  });

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/reservations', form);
      alert('Table reserved!');
      setForm({ customerName: '', contactNumber: '', tableNo: '', date: '', time: '', guests: '' });
    } catch (err) {
      alert('Reservation failed');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Table Reservation</h2>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {Object.keys(form).map(field => (
          <input
            key={field}
            className="border p-2 rounded"
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
      </div>
      <button onClick={handleSubmit} className="bg-indigo-600 text-white px-6 py-2 rounded">Reserve</button>
    </div>
  );
};

export default TableReservation;
