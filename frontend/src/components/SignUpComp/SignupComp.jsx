import React, { useState } from 'react';
import axios from 'axios';
import './SignupComp.css';
import { useNavigate } from 'react-router-dom';

const SignupComp = () => {
  const navigate=useNavigate
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');

  const handleSubmit = async (e) => {


    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      phone,
      password,
      role,
    };

    try {
      const response = await axios.post('http://localhost:4040/api/v1/rentify/users/addUser', userData);
      alert("Account Created Successfully")
      navigate('/login')

    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

  return (
    <div className='signup-login-container'>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
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
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
        <div className="form-group">
          <div className="radio-group">
            <label>
              <input
                type="checkbox"
                value="buyer"
                checked={role === 'buyer'}
                onChange={(e) => setRole(e.target.value)}
              />
              Buyer
            </label>
            <label>
              <input
                type="checkbox"
                value="seller"
                checked={role === 'seller'}
                onChange={(e) => setRole(e.target.value)}
              />
              Seller
            </label>
          </div>
          <div className="btn">
            <button type="submit" className="btn-primary">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupComp;
