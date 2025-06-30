import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

import Inventory from './admin/Inventory.jsx';
import PlaceOrder from './waiter/PlaceOrder.jsx';
import TableReservation from './waiter/TableReservation.jsx';
import KOTManager from './chef/KOTMangaer.jsx';
import Billing from './cashier/Billing.jsx';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  // Log user structure for debugging
  console.log("Authenticated user:", user);

  // Handle missing or invalid user
  if (!user || !user.user || !user.user.role) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <h2 className="text-xl text-red-500">Invalid or missing user data</h2>
      </div>
    );
  }

  const role = user.user.role;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Dashboard ({role})</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {role === 'admin' && <Inventory />}
      {role === 'waiter' && (
        <>
          <PlaceOrder />
          <TableReservation />
        </>
      )}
      {role === 'chef' && <KOTManager />}
      {role === 'cashier' && <Billing />}
    </div>
  );
};

export default Dashboard;
