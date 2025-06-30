import { useEffect, useState } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', quantity: '', unit: '' });

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/inventory');
    setItems(res.data);
  };

  const addItem = async () => {
    await axios.post('http://localhost:5000/api/inventory', form);
    fetchItems();
    setForm({ name: '', quantity: '', unit: '' });
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/inventory/${id}`);
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Inventory Management</h2>
      <div className="flex gap-2 mb-4">
        <input className="border p-2 rounded" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="border p-2 rounded w-24" placeholder="Qty" type="number" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
        <input className="border p-2 rounded w-24" placeholder="Unit" value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value })} />
        <button onClick={addItem} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </div>

      <table className="w-full table-auto text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Quantity</th>
            <th className="p-2 text-left">Unit</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item._id} className="border-b">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">{item.unit}</td>
              <td className="p-2">
                <button onClick={() => deleteItem(item._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
