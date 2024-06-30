import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('https://beiyo-admin.vercel.app/api/user', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user:', error);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://beiyo-admin.vercel.app/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  // const logout = () => {
  //   localStorage.removeItem('token');
  //   setUser(null);
  //   navigate('/login');
  // };

  return (
    <AuthContext.Provider value={{ user, login, 
    // logout,
     loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
