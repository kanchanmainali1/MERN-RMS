import { useNavigate } from 'react-router-dom';

const WaiterDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Waiter Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-green-100 p-4 rounded shadow hover:shadow-lg cursor-pointer" onClick={() => navigate('/waiter/order')}>
          <h2 className="text-xl font-semibold">Place Order</h2>
          <p className="text-gray-600">Send orders to the kitchen or bar.</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded shadow hover:shadow-lg cursor-pointer" onClick={() => navigate('/waiter/reservation')}>
          <h2 className="text-xl font-semibold">Table Reservation</h2>
          <p className="text-gray-600">Book tables for customers.</p>
        </div>
      </div>
    </div>
  );
};

export default WaiterDashboard;