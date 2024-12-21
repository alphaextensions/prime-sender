import React, { useEffect, useState } from 'react';
import '../../styles/HomePage/homepage.css';
import DownloadBtn from '../common/DownloadBtn';
import { Link } from 'react-router-dom';
import Companies from '../sections/Companies';
import MainFeatures from '../sections/MainFeatures';
import Testimonial from '../sections/Testimonial';
import UniqueFeatures from '../sections/UniqueFeatures';
import FAQs from '../sections/FAQs';
import CompleteSolutions from '../sections/CompleteSolutions';
import HelmetHeader from "../common/HelmetHeader";
import ReactGA from "react-ga4";
import { promoText } from '../Data/seo-data';
import HowToUse from './HowToUse';
import { useNavigate } from "react-router-dom";
import { primeSenderController } from "../context";


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
  
  const [controller] = primeSenderController();
  const navigate = useNavigate();

  const buyNowButtonClickHandle = () => {
    ReactGA.event({
      category: "Button Click",
      action: "buy now button click",
      label: "buy_now_btn_clicked",
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


  useEffect(() => {
    if (controller?.credentials?.cred !== undefined && controller?.credentials?.cred !== "") {
      navigate("/dashboard/home")
    }
    else{
      navigate("/");
    }
  }, [controller, navigate]);

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
              <Link to="/pricing" onClick={() => { buyNowButtonClickHandle() }} className="howtousebtn button-round large-text btn">
                Buy Now
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
      <Testimonial />
      <HowToUse />
      <CompleteSolutions />
      <MainFeatures isSlider='true' />
      <UniqueFeatures />
      {/* <EverythingInOne /> */}
    </>
  );
};

export default Home;
