import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useAuth } from '.././AuthContext';
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const { user, logout } = useAuth();

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);

    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TravelAgency
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='http://localhost:3000/#main' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='http://localhost:3000/#services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a href='http://localhost:3000/#packages' className='nav-links' onClick={closeMobileMenu}>
                Packages
              </a>
            </li>
          </ul>
          {button && !user && <Button buttonStyle='btn--outline' to='/login'>LogIn</Button>}
          <div className='welcome-message' onClick={toggleDropdown}>
            {button && user && <p>Welcome, {user.userName}</p>}
            {dropdownVisible && user && (
              <div className='dropdown'>
                {button && user && <Button buttonStyle='btn--outline' onClick={handleLogout}>Logout</Button>}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
