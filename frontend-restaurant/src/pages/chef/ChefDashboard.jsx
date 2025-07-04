import { useNavigate } from 'react-router-dom';

const ChefDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chef Dashboard</h1>
      <div className="bg-red-100 p-4 rounded shadow hover:shadow-lg cursor-pointer" onClick={() => navigate('/chef/kot')}>
        <h2 className="text-xl font-semibold">KOT Manager</h2>
        <p className="text-gray-600">View and prepare orders.</p>
      </div>
    </div>
  );
};

export default ChefDashboard;