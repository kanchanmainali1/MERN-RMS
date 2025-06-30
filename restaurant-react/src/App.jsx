import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../restaurant-react/src/pages/Login.jsx';
import Dashboard from '../../restaurant-react/src/pages/Dashboard.jsx';
import ProtectedRoute from '../../restaurant-react/src/components/ProtectedRoutes.jsx';
import AuthProvider from '../../restaurant-react/src/context/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
// This is the main entry point of the React application.
// It sets up the routing for the application using React Router.