import React, { useState } from 'react';
import './LoginSection.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; 

function LoginSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    if (!email.includes('@')) {
      setErrorMessage('Please enter correct email address.');
      return;
    }
    if (email === 'admin@admin' && password === 'admin') {
      setErrorMessage('');
      setSuccessMessage('Login successful. Redirecting to home page...');
      try {
        setTimeout(() => {
          navigate('/');
        }, 1000);
        await login('admin');
      } catch (error) {
        console.error('Error during login:', error);
      }
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
          <button className='btn-2' type="submit">
            Log In
          </button>
        </form>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        {successMessage && <p className='success-message'>{successMessage}</p>}
        <Link to="/register" className='register-link'>
          <button className='btn-2'>Don't have an account? Register here</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginSection;
