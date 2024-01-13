import "../../styles/Footer/footer.css";
import { Link , useNavigate} from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const offset = element.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }

  function handleSectionClick(e) {
    let href = e.target.href;
    let sectionId = href.split('#')[1];
    if (window.location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 1000);
    }
  }

  function scrollToTop(e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="footer_main" >
      <div className="footer_container">
      <hr className='divider' />
        <div className="footer_row">
          <div className="footer_logo">
            <img src="/images/logo-img.png" alt="logo"/>
            <img src="/images/logo-text.png" alt="Prime Sender"/>
          </div>
          <div className="footer_links">
            <h4 className='heading'>Company</h4>
            <ul className='large-text'>
              <li><Link to='/' onClick={scrollToTop}> Home </Link></li>
              <li><Link to='/how-to-use' onClick={scrollToTop}> How to Use </Link></li>
              <li><Link to='/blogs' onClick={scrollToTop}> Blogs </Link></li>
              <li><Link to='/faqs' onClick={scrollToTop}> FAQs </Link></li>
            </ul>
          </div>
          <div className="footer_links">
            <h4 className='heading'>Product</h4>
            <ul className='large-text'>
              <li><Link to='/pricing' onClick={scrollToTop}>Pricing</Link></li>
              <li><Link to='/feature-request' onClick={scrollToTop}> Request a Feature </Link></li>
              <li><Link to='/#testimonial' onClick={handleSectionClick}>Reviews</Link></li>
            </ul>
          </div>
          <div className="footer_links">
            <h4 className='heading'>Legal</h4>
            <ul className='large-text'>
              <li><Link to='/terms-of-service' onClick={scrollToTop}> Terms of Service </Link></li>
              <li><Link to='/privacy-policy' onClick={scrollToTop}> Privacy Policy </Link></li>
            </ul>
          </div>
          <div className="footer_links">
            <h4 className='heading'>Contact With Us</h4>
            <ul className='large-text'>
              <li><Link to='/contactus' onClick={scrollToTop}>Contact Us</Link></li>
              <li><a href="mailto:primesenderextension@gmail.com">Email Us</a></li>
              <li><a href='https://wa.me/919160583572?text=Hi%2C%20I%20would%20like%20to%20request%20chat%20support%20for%20Prime%20Sender' target='_blank' >Chat on WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        <hr className='divider' />
        <p className="footer_copyright text">&copy; {new Date().getFullYear() } Zero to Zee | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;