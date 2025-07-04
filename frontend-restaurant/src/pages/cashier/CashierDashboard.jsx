import { useNavigate } from 'react-router-dom';

const CashierDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cashier Dashboard</h1>
      <div className="bg-yellow-100 p-4 rounded shadow hover:shadow-lg cursor-pointer" onClick={() => navigate('/cashier/billing')}>
        <h2 className="text-xl font-semibold">Billing</h2>
        <p className="text-gray-600">Generate and manage bills.</p>
      </div>
    </div>
  );
};

export default CashierDashboard;