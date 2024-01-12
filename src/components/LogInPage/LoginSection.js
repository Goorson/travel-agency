import React from 'react';
import './LoginSection.css';
import { Link } from 'react-router-dom';

function LoginSection() {
  return (
    <div className='loginSection'>
      <div className='login-container'>
        <h1>Log In</h1>
        <form className='login-form'>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button className='btn--outline' type="submit">
                <Link to={'/login'}>
                 Log In
                </Link>
            </button>
        </form>
        <Link to="/register" className='register-link'>
          <button className='btn--outlined'>Don't have an account? Register here</button>
        </Link>
        <p className='error-message'>Incorrect email or password. Please try again.</p>
      </div>
    </div>
  );
}

export default LoginSection;
