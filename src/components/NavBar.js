import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button }  from './Button';
import './NavBar.css';

function NavBar() {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const[button, setButton] = useState(true)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton)
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                TravelAgency
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <a href='#main' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#packages' className='nav-links' onClick={closeMobileMenu}>
                    Packages
                  </a>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SignUp</Button>}
              {button && <Button buttonStyle='btn--outline'>LogIn</Button>}
            </div>
        </nav>
    </>
  )
}

export default NavBar