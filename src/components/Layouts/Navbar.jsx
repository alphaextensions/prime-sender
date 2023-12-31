import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { MdFileDownload, MdClose, MdMenu } from "react-icons/md";
import '../../styles/Navbar/navbar.css'
import DownloadBtn from '../Common/DownloadBtn'
import ReactGA from "react-ga4";
import { promoText } from '../Data/seo-data';

function NavLinks({ onClick }) {
  const location = useLocation();
  const url = location.pathname;
  const currPageId= window.location.href.split('#')[1];

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `${location.pathname}`,
      title: `${location.pathname.substring(1) === '' ? 'Home' : location.pathname.substring(1)} Page`
    });
  }, [location]);

  return (
    <ul>
      {url == '/' ? <li>
        <Link to='/#how-to-use' onClick={onClick} className={`large-text ${currPageId == 'how-to-use' && 'active'}`} id='how-to-use-btn'>
          How To Use
        </Link>
      </li> : <li>
        <NavLink to='/' onClick={onClick} className='large-text'>
          Home
        </NavLink>
      </li>}
      <li>
        <Link to='/#main-features' onClick={onClick} className={`large-text ${currPageId == 'main-features' && 'active'}`} id='main-features-btn'>
          Features
        </Link>
      </li>
      <li>
        <NavLink to='/pricing' onClick={onClick} className='large-text'>
          Pricing
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

  function handleFeatureClick(btnId) {
    if (window.location.pathname === '/') {
      scrollToSection(btnId === 'main-features-btn' ? 'main-features' : 'how-to-use');
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

    if (btnId === 'main-features-btn' || btnId === 'how-to-use-btn') {
      handleFeatureClick(btnId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function openMenu() {
    setShowMenu(true);
    document.body.style.overflow = 'hidden';
  }

  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => {
      return <span key={index} className='white_promo_text pro'>{text}</span>
    })
  }

  const promoTextComponent = <div className='promo_text_container'>
    {...promoTextComponentGenerator()}
  </div>

  return (
    <nav className={`prime-sender-navbar ${isFixed && 'navbar-fixed '} ${showMenu && 'active'}`} style={{ background: !isFixed && showMenu ? '#f2fffe' : '' }}>
      {promoTextComponent}
      <div className='prime-sender-container'>
        <NavLink to='/' className='brand' onClick={openPage}>
          <div className='nav_img_container'>
            <img src="/images/logo-img.png" alt="logo" />
            <img src="/images/logo-text.png" alt="logo" />
          </div>
        </NavLink>

        <div className='nav-links' >
          <div className={`nav-elements  ${showMenu && 'active'}`}>
            <NavLinks onClick={openPage} />
          </div>

          <div className='nav-download-btn'>
            <DownloadBtn downloadIcon={<MdFileDownload className='download-icon' />} />
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