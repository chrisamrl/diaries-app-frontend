import { useEffect, useState, useRef } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import LoadingPage from '../pages/LoadingPage';
import verifyToken from '../services/verifyToken';

const PublicRoutes = () => {
  const [finished, setFinished] = useState(false);
  const isAuthenticated = useRef(false);

  useEffect(() => {
    const validate = async () => {
      try {
        await verifyToken();
        isAuthenticated.current = true;
      } catch (error) {
      }
      setFinished(true);
    };
    validate();
  }, [])

  return (
      !finished ? 
      <LoadingPage /> 
      : !(isAuthenticated.current) ?
      <Outlet/>
      : <Navigate to='/home'/>
    )
}

export default PublicRoutes;
