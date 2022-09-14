import { useEffect, useRef } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import verifyToken from '../services/verifyToken';

const PrivateRoutes = () => {
  const token = window.localStorage.getItem('token')
  const isValid = useRef(true);


  useEffect(() => {
    const validate = async () => {
      try {
        await verifyToken();
      } catch (error) {
        isValid.current = false;
      }
    };
    validate();
  }, [])


  return (
      token && isValid.current ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes;
