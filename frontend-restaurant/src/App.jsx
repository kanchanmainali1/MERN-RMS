import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';

import AdminDashboard from './pages/admin/Inventory.jsx';
import WaiterDashboard from './pages/waiter/TableReservation.jsx';
import CashierDashboard from './pages/cashier/Billing.jsx';
import ChefDashboard from './pages/chef/KOTMangaer.jsx';

import ProtectedRoute from './components/ProtectedRoutes.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['waiter']} />}>
            <Route path="/waiter/dashboard" element={<WaiterDashboard />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['cashier']} />}>
            <Route path="/cashier/dashboard" element={<CashierDashboard />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['chef']} />}>
            <Route path="/chef/dashboard" element={<ChefDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
