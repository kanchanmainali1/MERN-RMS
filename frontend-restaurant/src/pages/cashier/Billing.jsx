import { useEffect, useState } from 'react';
import axios from 'axios';

const Billing = () => {
  const [orders, setOrders] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);

  const fetchOrders = async () => {
    const res = await axios.get('http://localhost:5000/api/orders');
    const servedOrders = res.data.filter(order => order.status === 'Served');
    setOrders(servedOrders);
  };

  const generateBill = async (orderId) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/bills/${orderId}`);
      setSelectedBill(res.data);
      fetchOrders();
    } catch (err) {
      alert('Bill already exists or failed to generate.');
    }
  };

  const getBill = async (orderId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/bills/${orderId}`);
      setSelectedBill(res.data);
    } catch (err) {
      alert('No bill found');
    }
  };

  const markAsPaid = async () => {
    await axios.put(`http://localhost:5000/api/bills/${selectedBill.orderId}/status`, { status: 'Paid' });
    alert('Payment completed');
    setSelectedBill(null);
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Billing & Payment</h2>

      <div className="grid grid-cols-2 gap-4">
        {orders.map(order => (
          <div key={order._id} className="border p-3 rounded">
            <h4>Table #{order.tableNo}</h4>
            <button onClick={() => generateBill(order._id)} className="bg-blue-600 text-white px-3 py-1 mt-2 rounded mr-2">Generate</button>
            <button onClick={() => getBill(order._id)} className="bg-gray-700 text-white px-3 py-1 mt-2 rounded">View</button>
          </div>
        ))}
      </div>

      {selectedBill && (
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Bill Summary</h3>
          <ul className="mb-2">
            {selectedBill.billItems.map((item, idx) => (
              <li key={idx}>{item.name} × {item.quantity} = Rs. {item.total}</li>
            ))}
          </ul>
          <p><strong>Total:</strong> Rs. {selectedBill.grandTotal}</p>
          <p><strong>Status:</strong> {selectedBill.paymentStatus}</p>
          {selectedBill.paymentStatus === 'Unpaid' && (
            <button onClick={markAsPaid} className="bg-green-600 text-white px-4 py-1 mt-2 rounded">Mark as Paid</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Billing;
