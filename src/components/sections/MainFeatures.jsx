import React,{useEffect,useState} from 'react'
import featuresData from '../Data/features-data'
import FeatureCard from '../Common/FeatureCard'
import '../../styles/HomePage/mainfeatures.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollTrigger from 'react-scroll-trigger';

const MainFeatures = () => {
  const [slidesPerView, setSlidePerView] = useState(3);
  const [autoplaySlider, setAutoplaySlider] = useState(false);

  function slides() {
    if (window.screen.width >= 1200) {
      setSlidePerView(3);
    } else if (window.screen.width < 1200 && window.screen.width >= 800) {
      setSlidePerView(2);
    } else if (window.screen.width < 800) {
      setSlidePerView(1);
    }
  }

  useEffect(() => {
    AOS.init({duration: 1000});
    slides();
    window.addEventListener('resize', slides);
  }, []);

  return (
     <section className="main-feature-section" id='main-features'>
      <div className="main-features-content">
        <div className="title">
          <img src="/images/features-icon.png" alt="" />
          <div className="title-text"> Main Features </div>
        </div>
        <div className="features" data-aos="fade-up" >
        <ScrollTrigger 
          onEnter={() => {
            setAutoplaySlider(true);
          }}
          onExit={() => {
            setAutoplaySlider(false);
          }}>
            <Slider
              dots={true}
              arrows={true}
              infinite={true}
              slidesToShow={slidesPerView}
              slidesToScroll={1}
              autoplay={autoplaySlider}
              autoplaySpeed={3000}
              speed={1000}
              rows={2}
              key={autoplaySlider}>
              {featuresData.map((item, index) => (
                <FeatureCard key={index} imgSrc={item.logo} name={item.name} desc={item.desc} />
              ))}
            </Slider>
          </ScrollTrigger>
        </div>
        </div>
      </section> 
  )
}

export default MainFeatures
