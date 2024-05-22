import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuNavbar, navClose } from '../../assets/icons';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  React.useEffect(() => {
    const body = document.body;
    if (isSidebarOpen) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }

    return () => {
      body.classList.remove('no-scroll');
    };
  }, [isSidebarOpen]);

  return (
    <header>
      <div className='container'>
        <div className='nav'>
          <div className='logo'>
            <a className='logo-text' href='/'>
              SenedSuned
            </a>
          </div>
          <div className='links'>
            <Link to='about'>Haqqımızda</Link>
            <Link to='all'>Ərizələr</Link>
          </div>
          <div className='mobile-menu-icon' onClick={toggleSidebar}>
            <img src={MenuNavbar} alt='' />
          </div>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='sidebar-content'>
          <div className='sidebar-content-header'>
            <a className='logo-text' href='/'>
              SenedSuned
            </a>
            <div onClick={toggleSidebar}>
              <img src={navClose} alt='' />
            </div>
          </div>
          <div className='sidebar-links'>
            <Link onClick={toggleSidebar} to='about'>
              Haqqımızda
            </Link>
            <Link onClick={toggleSidebar} to='all'>
              Ərizələr
            </Link>
            <Link onClick={toggleSidebar} to='faq'>
              FAQ
            </Link>
            <Link onClick={toggleSidebar} to='/cv'>
              CV
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </header>
  );
};

export default Navbar;
