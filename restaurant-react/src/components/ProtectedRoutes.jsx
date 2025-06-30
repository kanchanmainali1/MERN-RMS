import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
// This component checks if the user is authenticated.
// If authenticated, it renders the children components; otherwise, it redirects to the login page.