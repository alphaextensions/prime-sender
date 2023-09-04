import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect,useState} from "react";
import companyLogos from "../Data/company-logo";
import "../../styles/HomePage/companies.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Companies = () => {

  const [slidesPerView, setSlidePerView] = useState(3);

  useEffect(() => {
    AOS.init({duration: 1000});

    function slides() {
      if (window.screen.width >= 1200) {
        setSlidePerView(5);
      } else if (window.screen.width < 1200 && window.screen.width >= 1000) {
        setSlidePerView(4);
      }else if (window.screen.width < 1000 && window.screen.width >= 700) {
        setSlidePerView(3);
      }else if (window.screen.width < 700 && window.screen.width >= 0) {
        setSlidePerView(2);
      }
    }
    slides();
    window.addEventListener('resize', slides);
  }, []);

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: slidesPerView,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:1000,
    pauseOnFocus: false, 
    pauseOnHover: false
  };

  return (
    <div className="companies_container" >
      <div className="companies_container_content" data-aos="fade-left">
      <Slider {...settings}>
      {companyLogos.map((logo, index) => (
          <div key={index} className="company_logo">
            <img src={logo} alt={`Company Logo ${index + 1}`} />
          </div>
      ))}
      </Slider>
      </div>
      <hr className='divider' />
    </div>
  );
};

export default Companies;
