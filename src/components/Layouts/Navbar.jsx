import React, { useState ,useEffect} from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { MdFileDownload,MdClose,MdMenu } from "react-icons/md";
import '../../styles/Navbar/navbar.css'
import DownloadBtn from '../Common/DownloadBtn'
import ReactGA from "react-ga4";

function NavLinks({ onClick }) {  
  const location = useLocation();
  
  useEffect(()=>{
    ReactGA.send({ 
      hitType: "pageview", 
      page: `${location.pathname}`, 
      title: `${location.pathname.substring(1)==='' ? 'Home' : location.pathname.substring(1)} Page` 
    });
  }, [location]);

  return (
    <ul>
      <li>
        <NavLink to='/' onClick={onClick} className='large-text'>
          Home
        </NavLink>
      </li>
      <li>
        <Link to='/#main-features' onClick={onClick} className='large-text' id='main-features-btn'>
          Features
        </Link>
      </li>
      <li>
        <NavLink to='/pricing' onClick={onClick} className='large-text'>
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to='/blogs' onClick={onClick} className='large-text'>
          Blogs
        </NavLink>
      </li>
    </ul>
  );
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

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

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const offset = element.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
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

  function openPage(e) {
    let btnId = e.target.id;

    setShowMenu(false);
    document.body.style.overflow = 'auto';

    if(btnId === 'main-features-btn') {
      handleFeatureClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function openMenu() {
    setShowMenu(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <nav className={`prime-sender-navbar ${isFixed && 'navbar-fixed '} ${showMenu && 'active'}`} style={{background: !isFixed && showMenu ? '#f2fffe' : ''}}>
      <div className='prime-sender-container'>
        <NavLink to='/' className='brand' onClick={openPage}>
          <div className='nav_img_container'>
            <img src="/images/logo-img.png" alt="logo"/>
            <img src="/images/logo-text.png" alt="logo"/>
          </div>
        </NavLink>

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