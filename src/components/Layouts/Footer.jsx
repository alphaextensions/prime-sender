import "../../styles/Footer/footer.css";
import { Link , useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  function scrollToTop() {
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
            <h4 className='heading'>{t('footer.company')}</h4>
            <ul className='large-text'>
              <li><Link to='/' onClick={scrollToTop}> {t('footer.links.home')} </Link></li>
              <li><Link to='/how-to-use' onClick={scrollToTop}> {t('footer.links.howToUse')} </Link></li>
              <li><Link to='/blogs' onClick={scrollToTop}> {t('footer.links.blogs')} </Link></li>
              <li><Link to='/faqs' onClick={scrollToTop}> {t('footer.links.faqs')} </Link></li>
            </ul>
          </div>
          <div className="footer_links">
            <h4 className='heading'>{t('footer.product')}</h4>
            <ul className='large-text'>
              <li><Link to='/pricing' onClick={scrollToTop}>{t('footer.links.pricing')}</Link></li>
              <li><Link to='/feature-request' onClick={scrollToTop}> {t('footer.links.requestFeature')} </Link></li>
              <li><Link to='/#testimonial' onClick={handleSectionClick}>{t('footer.links.reviews')}</Link></li>
            </ul>
          </div>
          <div className="footer_links">
            <h4 className='heading'>{t('footer.legal')}</h4>
            <ul className='large-text'>
              <li><Link to='/terms-of-service' onClick={scrollToTop}> {t('footer.links.termsOfService')} </Link></li>
              <li><Link to='/refund-policy' onClick={scrollToTop}> {t('footer.links.refundPolicy')} </Link></li>
              <li><Link to='/privacy-policy' onClick={scrollToTop}> {t('footer.links.privacyPolicy')} </Link></li>
            </ul>
          </div>
          <div className="footer_links">
            <h4 className='heading'>{t('footer.contactUs')}</h4>
            <ul className='large-text'>
              <li><Link to='/contact-us' onClick={scrollToTop}>{t('footer.links.contact')}</Link></li>
              <li><a href="mailto:primesenderextension@gmail.com">{t('footer.links.emailUs')}</a></li>
              <li><a href="https://web.whatsapp.com/send?phone=917058067789&text=Hi%2C%20I%20would%20like%20to%20request%20chat%20support%20for%20Prime%20Sender" target='_blank' rel="noreferrer" className="whatsapp_contact" ><img src="/images/whatsapp.png" alt="" /><span>+91-7058067789</span></a></li>
            </ul>
          </div>
        </div>
        
        <hr className='divider' />
        <p className="footer_copyright text">{t('footer.copyright').replace('{year}', new Date().getFullYear())}</p>
      </div>
    </div>
  );
};

export default Footer;
