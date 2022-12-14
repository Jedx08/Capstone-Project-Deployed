import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <nav className='navbar sticky-top d-flex justify-content-between'>
        <Link to='/' onClick={closeMobileMenu}>
            <img className='navbar-logo' src={require('../media/jusLogoImg.png')} alt='Rental Car'/>
          
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
          <li className='nav-item'>
            <a href='/#'
              className='nav-links'
            >
              HOME
            </a>
          </li>
          
          <li className='nav-item'>
            <a href='/Autolistings'
              className='nav-links'
            >
              AUTOLISTINGS
            </a>
          </li>
         
          <li className='nav-item'>
            <a href='/#indexaboutus'
              className='nav-links'
            >
              ABOUT&#160;US
            </a>
          </li>

          <li className='nav-item'>
            <a href='/#Customrev'
              className='nav-links'
            >
              TESTIMONIALS
            </a>
          </li>

          <li className='nav-item'>
            <a href='/News'
              className='nav-links'
            >
              NEWS
            </a>
          </li>

          <li className='nav-item'>
            <a href='/Contact'
              className='nav-links'
            >
             CONTACT&#160;US
            </a>
          </li>

        </ul>
       
      </nav>
    </>
  );
}

export default Navbar