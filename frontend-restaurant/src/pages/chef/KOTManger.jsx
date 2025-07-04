import { useEffect, useState } from 'react';
import axios from 'axios';

const KOTManager = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get('http://localhost:5000/api/orders');
    const kotOrders = res.data.filter(order => order.type === 'KOT');
    setOrders(kotOrders);
  };

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/orders/${id}/status`, { status });
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">KOT Manager (Chef View)</h2>
      {orders.map(order => (
        <div key={order._id} className="border p-4 mb-4 rounded">
          <h4 className="font-semibold mb-2">Table #{order.tableNo} | Status: {order.status}</h4>
          <ul className="list-disc ml-6 mb-2">
            {order.items.map((item, idx) => (
              <li key={idx}>{item.menuItemId?.name || 'Unknown'} × {item.quantity}</li>
            ))}
          </ul>
          <div className="flex gap-2">
            {order.status === 'Pending' && (
              <button onClick={() => updateStatus(order._id, 'Preparing')} className="bg-yellow-500 text-white px-4 py-1 rounded">Mark Preparing</button>
            )}
            {order.status === 'Preparing' && (
              <button onClick={() => updateStatus(order._id, 'Served')} className="bg-green-600 text-white px-4 py-1 rounded">Mark Served</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KOTManager;
