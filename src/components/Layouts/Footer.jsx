import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import "../../styles/Footer/footer.css";
import { Link , useNavigate} from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function  handleReviewClick() {
    if (window.location.pathname === '/') {
      scrollToSection('testimonial');
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection('testimonial')
      }, 1000);
    }
  }

  return (
    <div className="footer_main" data-aos="fade-up" >
      <div className="footer_container">
      <hr className='divider' />
        <div className="footer_row">
          <div className="footer_info">
            <div className="footer_logo">
              <img src="/images/logo-large.png" alt="" /> 
            </div>
            <h2>Prime Sender</h2>
          </div>
          <div className="footer_links">
            <h4>Company</h4>
            <ul>
              <li><a href='/blogs' > Blog </a></li>
              <li><a href='/help-us-improve' > Help Us Improve </a></li>
            </ul>
          </div>
          <div className="footer_links">
            <h4>Product</h4>
            <ul>
              <li><a href='/pricing' >Pricing</a></li>
              <li><a href='/request-feature' > Request a Feature </a></li>
              <li><Link to='/#testimonial' onClick={ handleReviewClick}>Reviews</Link></li>
            </ul>
          </div>
          <div className="footer_links">
            <h4>Legal</h4>
            <ul>
              <li><a href='/terms-of-service' > Terms of Use </a></li>
              <li><a href='/privacy-policy' > Privacy Policy </a></li>
            </ul>
          </div>
          <div className="footer_contact footer_links">
            <h4>Contact With Us</h4>
            <a href="mailto:primesenderextension@gmail.com">Email Us</a>
            <a href='https://wa.me/919160583572?text=Hi%2C%20I%20would%20like%20to%20request%20chat%20support%20for%20Prime%20Sender' target='_blank' >Chat on WhatsApp</a>
          </div>
        </div>
        
        <hr className='divider' />
        <p className="footer_copyright">&copy; {new Date().getFullYear() } Zero to Zee | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;