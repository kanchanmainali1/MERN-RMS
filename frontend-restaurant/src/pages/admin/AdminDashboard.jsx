import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-blue-100 p-4 rounded shadow hover:shadow-lg cursor-pointer" onClick={() => navigate('/admin/inventory')}>
          <h2 className="text-xl font-semibold">Inventory Management</h2>
          <p className="text-gray-600">Manage ingredients and stock.</p>
        </div>
        <div className="bg-purple-100 p-4 rounded shadow hover:shadow-lg cursor-pointer" onClick={() => navigate('/admin/users')}>
          <h2 className="text-xl font-semibold">User Management</h2>
          <p className="text-gray-600">Manage staff and assign roles.</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow hover:shadow-lg cursor-pointer" onClick={() => navigate('/admin/reports')}>
          <h2 className="text-xl font-semibold">Reports</h2>
          <p className="text-gray-600">View financial and activity reports.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;