import { LOGGED_USER_KEY } from '@/services/UserService';
import { Navigate, Outlet } from 'react-router';

export default function PrivateRoutes() {
  const isLogged = localStorage.getItem(LOGGED_USER_KEY);
  return (
    isLogged ? <Outlet /> : <Navigate to='/' />
  )
}