import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
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
        
         
          // const response = await axios.get(`http://localhost:5000/api/newResident`, 
          const response = await axios.get(`https://beiyo-admin.in/api/newResident/${userId}`, 
             {
            headers: { Authorization: `Bearer ${token}` }
          });

          setUser(response.data);  
          
          // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
      const response = await axios.post('https://beiyo-admin.in/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    redirect('/login');
    delete axios.defaults.headers.common['Authorization'];
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
