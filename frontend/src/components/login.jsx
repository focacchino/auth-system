import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
    <div className='auth-container-wrapper'>
      <div className='auth-container'>
      <h1 className='auth-header'>Login</h1>
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
          type="password"
          className='input-box'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className='submit-btn' onClick={handleSubmit}>Login</button> 
      <p className='auth-message'>already a user?</p>
      <button className='submit-btn' onClick={redirecter}>Register</button> 
      <a id='forgot-message' href='/forget'>forgot password?</a>
      </div>
    </div>
  );
};

export default Login;
