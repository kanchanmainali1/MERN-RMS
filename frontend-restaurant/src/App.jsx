import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

import ProtectedRoute from './components/ProtectedRoutes.jsx';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import Inventory from './pages/admin/Inventory.jsx';
import UserManagement from './pages/admin/UserManagement.jsx';
import Reports from './pages/admin/Reports.jsx'; 

// Waiter Pages
import WaiterDashboard from './pages/waiter/WaiterDashboard.jsx';
import PlaceOrder from './pages/waiter/PlaceOrder.jsx';
import TableReservation from './pages/waiter/TableReservation.jsx';

// Cashier Pages
import CashierDashboard from './pages/cashier/CashierDashboard.jsx';
import Billing from './pages/cashier/Billing.jsx';

// Chef Pages
import ChefDashboard from './pages/chef/ChefDashboard.jsx';
import KOTManager from './pages/chef/KOTManger.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/inventory" element={<Inventory />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/reports" element={<Reports />} />
          </Route>

          {/* Waiter Routes */}
          <Route element={<ProtectedRoute allowedRoles={['waiter']} />}>
            <Route path="/waiter/dashboard" element={<WaiterDashboard />} />
            <Route path="/waiter/place-order" element={<PlaceOrder />} />
            <Route path="/waiter/table-reservation" element={<TableReservation />} />
          </Route>

          {/* Cashier Routes */}
          <Route element={<ProtectedRoute allowedRoles={['cashier']} />}>
            <Route path="/cashier/dashboard" element={<CashierDashboard />} />
            <Route path="/cashier/billing" element={<Billing />} />
          </Route>

          {/* Chef Routes */}
          <Route element={<ProtectedRoute allowedRoles={['chef']} />}>
            <Route path="/chef/dashboard" element={<ChefDashboard />} />
            <Route path="/chef/kot-manager" element={<KOTManager />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
