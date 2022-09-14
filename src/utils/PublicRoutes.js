import { useEffect, useRef } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import verifyToken from '../services/verifyToken';

const PublicRoutes = () => {
  const token = window.localStorage.getItem('token')
  const isValid = useRef(false);


  useEffect(() => {
    const validate = async () => {
      try {
        await verifyToken();
        isValid.current = true;
      } catch (error) {
      }
    };
    validate();
  }, [])


  return (
      !(token && isValid.current) ? <Outlet/> : <Navigate to='/home'/>
    )
}

export default PublicRoutes;
