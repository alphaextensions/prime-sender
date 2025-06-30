import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdFileDownload, MdClose, MdMenu, MdLanguage } from "react-icons/md";
import '../../styles/Navbar/navbar.css'
import DownloadBtn from '../common/DownloadBtn'
import ReactGA from "react-ga4";
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../i18n';

function NavLinks({ onClick }) {
  const location = useLocation();
  const { t } = useTranslation();
  // const url = location.pathname;
  // const currPageId= window.location.href.split('#')[1];

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `${location.pathname}`,
      title: `${location.pathname.substring(1) === '' ? t('navbar.home') : location.pathname.substring(1)} Page`
    });
  }, [location, t]);

  return (
    <ul>
      {
        location.pathname === '/' ? '' : 
        <li>
          <NavLink to='/' onClick={onClick} className='large-text'>
            {t('navbar.home')}
          </NavLink>
        </li>
      }
      <li>
        <NavLink to='/how-to-use' onClick={onClick} className='large-text'>
          {t('navbar.howToUse')}
        </NavLink>
      </li>
      <li>
        <NavLink to='/main-features' onClick={onClick} className='large-text' >
          {t('navbar.features')}
        </NavLink>
      </li>
      <li>
        <NavLink to='/pricing' end onClick={onClick} className='large-text'>
          {t('navbar.pricing')}
        </NavLink>
      </li>
      <li>
        <NavLink to='/blogs' onClick={onClick} className='large-text'>
          {t('navbar.blogs')}
        </NavLink>
      </li>
      <li>
        <NavLink to='/login' onClick={onClick} className='large-text'>
          {t('navbar.login')}
        </NavLink>
      </li>
    </ul>
  );
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [browserLang, setBrowserLang] = useState('en');
  const dropdownRef = useRef(null);

  // Get browser language on component mount
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setBrowserLang(userLang.startsWith('pt') ? 'pt' : 'en');
  }, []);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);
  
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setDropdownOpen(false);
  };

  const handleScroll = () => {
    const navbarHeight = document.querySelector('.prime-sender-navbar')?.offsetHeight;
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

  // function scrollToSection(sectionId) {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     const navbarHeight = 80;
  //     const offset = element.offsetTop - navbarHeight;
  //     window.scrollTo({ top: offset, behavior: 'smooth' });
  //   }
  // }

  // function handleFeatureClick(btnId) {
  //   if (window.location.pathname === '/') {
  //     scrollToSection(btnId === 'main-features-btn' ? 'main-features' : 'how-to-use');
  //   } else {
  //     navigate('/');
  //     setTimeout(() => {
  //       scrollToSection('main-features');
  //     }, 1000);
  //   }
  // }

  function openPage(e) {
    setShowMenu(false);
    document.body.style.overflow = 'auto';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // if (btnId === 'main-features-btn' || btnId === 'how-to-use-btn') {
    //   handleFeatureClick(btnId);
    // } else {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }
  }

  function openMenu() {
    setShowMenu(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <nav className={`prime-sender-navbar ${isFixed && 'navbar-fixed '} ${showMenu && 'active'}`} style={{ background: !isFixed && showMenu ? '#f2fffe' : '' }}>
      <div className='prime-sender-container'>
        <NavLink to='/' className='brand' onClick={openPage}>
          <div className='nav_img_container'>
            <img src="/images/logo-img.png" alt="logo" />
            <img src="/images/logo-text.png" alt="Prime Sender" />
          </div>
        </NavLink>

        <div className='nav-links' >
          <div className={`nav-elements  ${showMenu && 'active'}`}>
            <NavLinks onClick={openPage} />
          </div>

          <div className='nav-download-btn'>
            {/* Language selector dropdown - Only show if browser language is not English */}
            {browserLang !== 'en' && (
              <div 
                className="language-selector" 
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="language-btn">
                  <MdLanguage className="language-icon" />
                  <span>{i18n.language === 'pt' ? 'PT' : 'EN'}</span>
                </div>
                {dropdownOpen && (
                  <div className="language-dropdown">
                    <div 
                      className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
                      onClick={() => handleLanguageChange('en')}
                    >
                      English
                    </div>
                    <div 
                      className={`language-option ${i18n.language === 'pt' ? 'active' : ''}`}
                      onClick={() => handleLanguageChange('pt')}
                    >
                      Português
                    </div>
                  </div>
                )}
              </div>
            )}
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