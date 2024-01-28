import React, { useState } from 'react';
import './RegistrationSection.css';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('white')
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (email === ''  || password === '') {
      setColor('red')
      setMessage('Please enter both email and password.');
      return;
    }
    setColor('white')
    setMessage('Registration successful! You can now log in.');
    try {
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='registrationSection'>
      <div className='registration-container'>
        <h1>Register</h1>
        <form className='registration-form' onSubmit={handleRegistration}>
          <label>
            Email:
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button className='btn-2' type='submit'>
            Register
          </button>
        </form>
        {message && <p className='success-message' style= {{'color':color}}>{message}</p>}
        <Link to="/login" className='login-link'>
          <button className='btn-2'>Already have an account? Log in here</button>
        </Link>
      </div>
    </div>
  );
}

export default RegistrationSection;
