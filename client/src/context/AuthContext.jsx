import React, { createContext, useState, useEffect } from 'react';
// import api from 'api';
import { redirect, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import api from '@/api/apiKey';
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
          const decodedToken = jwtDecode(token); // Decode the token
          const userId = decodedToken.userId; // Extract the user ID from the token
        
         
          // const response = await api.get(`http://localhost:5000/api/newResident`, 
          const response = await api.get(`https://beiyo-admin.in/api/newResident/${userId}`, 
             {
            headers: { Authorization: `Bearer ${token}` }
          });

          setUser(response.data);  
          
          // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } catch (error) {
          console.error('Error fetching user:', error);
          // localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('https://beiyo-admin.in/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    redirect('/login');
    delete api.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, login, 
    logout, loading
     }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
