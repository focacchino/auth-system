import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.error('Please fill in all fields');
      return;
    }
  

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:2000/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data); 
      if(response.data) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  

  return (
    <div className='auth-container-wrapper'>
      <div className='auth-container'>
      <h1 className='auth-header'>Register</h1>
      <div>
        <label className='auth-message'>First Name:</label>
        <input
        className='input-box'
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='auth-message'>Last Name:</label>
        <input
        className='input-box'
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='auth-message'>Email:</label>
        <input
        className='input-box'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='auth-message'>Password:</label>
        <input
        className='input-box'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='auth-message'>Confirm Password:</label>
        <input
        className='input-box'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button className='submit-btn' onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
};

export default Register;
