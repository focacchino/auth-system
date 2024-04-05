import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <div className='auth-container-wrapper'>
      <div className='auth-container'>
      <h1 className='auth-header'>Welcome, {user}!</h1>
      <p>This is your 🏠 page.</p>
      <button className='submit-btn' onClick={logout}>logout</button>
      </div>
    </div>
  );
};

export default Home;
