import React from 'react'
import "../../styles/HomePage/uniqueFeatures.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const UniqueFeatureCard = ( { imgSrc, subTitle, title, featureText, order }) => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <>
      <div className={order===1?'unique_card':'unique_card unique_card_reverse'}>
        <div className="unique_card_image"  data-aos="fade-left" >
          <img src={imgSrc} alt="" />
        </div>
        <div className="unique_card_text"  data-aos="fade-right" >
          <p className="sub_title">{subTitle}</p>
          <h1>{title}</h1>
          <p className="feature_content">{featureText}</p>
        </div>
      </div>
    </>
  )
}

export default UniqueFeatureCard
