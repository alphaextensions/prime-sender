import React, { useEffect, useState } from 'react';
import '../../styles/HomePage/homepage.css';
import DownloadBtn from '../Common/DownloadBtn';
import { Link } from 'react-router-dom';
import Companies from '../Sections/Companies';
import MainFeatures from '../Sections/MainFeatures';
import Testimonial from '../Sections/Testimonial';
import UniqueFeatures from '../Sections/UniqueFeatures';
import FAQs from '../Sections/FAQs';
import CompleteSolutions from '../Sections/CompleteSolutions';
import HelmetHeader from "../Common/HelmetHeader";
import ReactGA from "react-ga4";
import { promoText } from '../Data/seo-data';
import HowToUse from './HowToUse';
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

  // function scrollToSection(sectionId) {
  //   ReactGA.event({
  //     category: "Button Click",
  //     action: "how to use button click",
  //     label: "how_to_use_btn_clicked",
  //   });
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  // const checkForScroll = () => {
  //   let sectionToScroll = window.location.hash;
  //   if (sectionToScroll === '#how-to-use') {
  //     scrollToSection('how-to-use');
  //   }
  // }

  // useEffect(() => {
  //   if(redirectToHowToUse=="true"){
  //     scrollToSection('how-to-use');
  //   }
  //   checkForScroll();
  // }, []);

  const HowToUseButtonClickHandle = () => {
    ReactGA.event({
      category: "Button Click",
      action: "how to use button click",
      label: "how_to_use_btn_clicked",
    });
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
    <>
      <HelmetHeader
        title={'Prime Sender - Best Web Sender Extension'}
        description={'The highest rated premium web sender extension on google chrome store to send messages, attachment, delivery report and much more...'}
        keywords={'prime sender, prime sender home, home page'}
      />
      <div className="home-container">
        <div className="home-content">
          <div className="left-col">
            <h1 className="title large-heading">
              Best Chrome Extension for Messaging and Productivity
            </h1>
            <p className="sub_title sub-heading">Send personalized and unlimited broadcast messages using excel images with caption and more with our web sender extension</p>
            <div className="home-btns">
              <DownloadBtn />
              <Link to="/how-to-use" onClick={() => { HowToUseButtonClickHandle() }} className="howtousebtn button-round large-text btn">
                How To Use
              </Link>
            </div>
          </div>
          <div className="right-col">
            <img className='girl' src="/gifs/main-1.gif" alt="Main GIF" />
            <img className='objects' src="/svgs/main-2.svg" alt="Main icon" />
            <div className='free_forever_div'>
              <p className='free_green'>IT'S FREE. FOREVER.</p>
            </div>
          </div>
        </div>
        {promoTextComponent}
      </div>

      <Companies />
      <CompleteSolutions />
      <HowToUse />
      <MainFeatures isSlider='true' />
      <UniqueFeatures />
      {/* <EverythingInOne /> */}
      <Testimonial />
    </>
  );
};

export default Home;
