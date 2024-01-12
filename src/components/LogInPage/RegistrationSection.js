import React from 'react';
import './RegistrationSection.css';
import { Link } from 'react-router-dom';

function RegistrationSection() {
  return (
    <div className='registrationSection'>
      <div className='registration-container'>
        <h1>Register</h1>
        <form className='registration-form'>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button className='btn--primary' type="submit">Register</button>
        </form>
        <Link to="/login" className='login-link'>
          <button className='btn--outlined'>Already have an account? Log in here</button>
        </Link>
        <p className='success-message'>Registration successful! You can now log in.</p>
      </div>
    </div>
  );
}

export default RegistrationSection;
