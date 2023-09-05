import React, {useEffect , useState} from 'react';
import '../../styles/HomePage/homepage.css';
import DownloadBtn from '../Common/DownloadBtn';
import { Link } from 'react-router-dom';
import HowToUse from '../Sections/HowToUse';
import Companies from '../Sections/Companies';
import MainFeatures from '../Sections/MainFeatures';
import Testimonial from '../Sections/Testimonial';
import UniqueFeatures from '../Sections/UniqueFeatures';
import FAQs from '../Sections/FAQs';
import CompleteSolutions from '../Sections/CompleteSolutions';
import EverythingInOne from '../Sections/EverythingInOne';

const Home = () => {

  // const [showChatSupportTooltip, setShowChatSupportTooltip] = useState(false);

  // const showTooltip = ()=>{
  //   const lastTooltipDate = localStorage.getItem('lastTooltipDate');
  //   const clickedChatSupport = localStorage.getItem('clickedChatSupport');
  //   const currentDate = new Date().toLocaleDateString();
    
  //   if (!clickedChatSupport && (!lastTooltipDate || lastTooltipDate !== currentDate)) {
  //     setShowChatSupportTooltip(true);
  //     localStorage.setItem('lastTooltipDate', currentDate);
  //     setTimeout(() => {
  //       setShowChatSupportTooltip(false);
  //     }, 5000);
  //   }
  // }

  // const handleScroll = () => {
  //   if(window.scrollY> 1000){
  //     showTooltip()
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleChatClick = () => {
  //   localStorage.setItem('clickedChatSupport', true)
  // };

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1 className="title">
            Best messaging and productivity tool for businesses and organisations
          </h1>
          <p className="sub_title">chipest compared to global competitors</p>
          <div className="download">
            <DownloadBtn homeBtn={true} />
            <Link to="/#how-to-use" onClick={()=>{scrollToSection('how-to-use')}} className="howtousebtn button-round home-btn">
              How To Use
            </Link>
          </div>
          <p className="offer"> <span className='purple'>Lifetime Offer :</span> Basic Features FREE FOREVER!</p>
          <img src="/images/home-img-1.gif" alt="" />
        </div>
      </div>
  
      <Companies />
      <CompleteSolutions />
      <HowToUse />
      <MainFeatures />
      <UniqueFeatures />
      {/* <EverythingInOne /> */}
      <Testimonial />
      <FAQs />
    </>
  );
};

export default Home;
