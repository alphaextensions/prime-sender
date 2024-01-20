import React,{useEffect,useState} from 'react'
import featuresData from '../Data/features-data'
import FeatureCard from '../Common/FeatureCard'
import SectionTitle from '../Common/SectionTitle'
import '../../styles/HomePage/mainfeatures.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainFeatures = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
     <section className="main-feature-section">
      <SectionTitle id="main-features" gif="/gifs/main-features.gif" title="Main Features" />
      <div className="main-features-content">
        <div className="features" data-aos="fade-up" >
          {featuresData.map((item, index) => (
            <FeatureCard key={index} imgSrc={item.logo} name={item.name} desc={item.desc} />
          ))}
        </div>
        </div>
      </section> 
  )
}

export default MainFeatures
