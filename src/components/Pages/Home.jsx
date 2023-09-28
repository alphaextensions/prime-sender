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
import HelmetHeader from "../Common/HelmetHeader";
import ReactGA from "react-ga4";
// import EverythingInOne from '../Sections/EverythingInOne';

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
    ReactGA.event({
      category: "Button Click",
      action: "how to use button click",
      label: "how_to_use_btn_clicked",
    });
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <HelmetHeader 
        title={'Prime Sender - Best Web Extension for Sending Messages'}
        description={'The highest rated premium web sender extension on google chrome store to send messages, attachment, delivery report and much more...'} 
      />
      <div className="home-container">
        <div className="home-content">
          <div className="left-col">
            <h1 className="title large-heading">
              Best Message and Productivity Tool for your Organisation
            </h1>
            <p className="sub_title sub-heading">cheapest compared to global competitors</p>
            <div className="home-btns">
              <DownloadBtn />
              <Link to="/#how-to-use" onClick={()=>{scrollToSection('how-to-use')}} className="howtousebtn button-round large-text btn">
                How To Use
              </Link>
            </div>
            <p className="offer text"> <span className='purple'>Lifetime Offer :</span> Basic Features FREE FOREVER!</p>
          </div>
          <div className="right-col">
            <img className='girl' src="/images/main-1.gif" alt="" />
            <img className='objects' src="/images/main-2.svg" alt="" />
          </div>
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
