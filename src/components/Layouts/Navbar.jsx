import React, { useState ,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdFileDownload,MdClose,MdMenu } from "react-icons/md";
import '../../styles/Navbar/navbar.css'
import DownloadBtn from '../Common/DownloadBtn'

function NavLinks({ onClick }) {
  const navigate = useNavigate();

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleFeatureClick() {
    if (window.location.pathname === '/') {
      scrollToSection('main-features');
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection('main-features');
      }, 1000);
    }
  }

  return (
    <ul>
      <li>
        <Link to='/' onClick={onClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to='/#main-features' onClick={handleFeatureClick} >
          Features
        </Link>
      </li>
      <li>
        <a href='/pricing' onClick={onClick}>
          <b>Pricing</b>
        </a>
      </li>
      <li>
        <Link to='/blogs' onClick={onClick}>
          Blogs
        </Link>
      </li>
    </ul>
  );
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const navbarHeight = document.querySelector('.prime-sender-navbar').offsetHeight;
    const scroll = window.scrollY;
    setIsFixed(scroll > navbarHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function closeMenu() {
    setShowMenu(false);
    document.body.style.overflow = 'auto';
  }

  function openPage() {
    setShowMenu(false);
    document.body.style.overflow = 'auto';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function openMenu() {
    setShowMenu(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <nav className={isFixed ? 'navbar-fixed prime-sender-navbar' : 'prime-sender-navbar'} style={{background: !isFixed && showMenu ? '#f2fffe' : ''}}>
      <div className='prime-sender-container'>
        <Link to='/' className='brand' onClick={openPage}>
          <img src='images/logo-large.png' alt='logo' />
          <p> Prime Sender </p>
        </Link>

        <div className='nav-links' >
          <div className={`nav-elements  ${showMenu && 'active'}`}>
            <NavLinks onClick={openPage} />
          </div>

          <div className='nav-download-btn'>
            <DownloadBtn downloadIcon={<MdFileDownload className='download-icon' />}/>
            {showMenu ? (
              <MdClose className='menu-icon' onClick={closeMenu} />
            ) : (
              <MdMenu className='menu-icon' onClick={openMenu} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar