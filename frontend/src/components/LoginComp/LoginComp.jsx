import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:4040/api/v1/rentify/users/loginUser', loginData);
      console.log('Login successful:', response.data);
      alert("Login Successful");

      const userRole=response.data.user.role
      localStorage.setItem("role",response.data.user.role)
      localStorage.setItem("token",response.data.token)
      
      if (userRole === 'buyer') {
        navigate('/');
      } else if (userRole === 'seller') {
        navigate('/dashboard/seller');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <div className="signup-login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginComp;
