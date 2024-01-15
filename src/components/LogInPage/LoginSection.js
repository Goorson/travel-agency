import React, { useState } from 'react';
import './LoginSection.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

function LoginSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    setErrorMessage('Incorrect email or password. Please try again.');
  };

  return (
    <div className='loginSection'>
      <div className='login-container'>
        <h1>Log In</h1>
        <form className='login-form' onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className='btn-2'>
            Log In
          </button>
        </form>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <Link to="/register" className='register-link'>
          <button className='btn-2'>Don't have an account? Register here</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginSection;
