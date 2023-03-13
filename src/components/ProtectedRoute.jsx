import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import storage from '../utils/storage';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const session = storage.session.get('auth')

  useEffect(() => {
    if (!session) {
      navigate('/login');
    }
  }, [session]);


  return <div>{session ? <div>{ children }</div> : <Login />}</div>;
}
