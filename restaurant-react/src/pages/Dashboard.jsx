import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

import Inventory from './admin/Inventory.jsx';
import PlaceOrder from './waiter/PlaceOrder.jsx';
import TableReservation from './waiter/TableReservation.jsx';
import KOTManager from './chef/KOTMangaer.jsx';
import Billing from './cashier/Billing.jsx';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  if (!user) return null;

  const role = user.user.role;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Dashboard ({role})</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
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
// This code defines the main dashboard for the restaurant management system.
// It displays different components based on the user's role (admin, waiter, chef, cashier).