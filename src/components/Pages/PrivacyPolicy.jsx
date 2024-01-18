import React from 'react';
import PrivacyPolicyData from '../Data/privacy-policy-data.js';
import '../../styles/PrivacyPolicyPage/privacyPolicy.css';
import SectionTitle from "../Common/SectionTitle";
import HelmetHeader from "../Common/HelmetHeader";
import { promoText } from '../Data/seo-data.js';

function PrivacyPolicy() {
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
        title={'Privacy Policy | Prime Sender - Best Web Sender Extension'}
        description={'Privacy Policy for Prime Sender'}
        keywords={'prime sender privacy policy, privacy policy,privacy policy and terms&conditions'}
      />
      <div className="main-section privacy-policy">
        {promoTextComponent}
      <SectionTitle gif="/gifs/privacy-policy.gif" title="Privacy Policy" />    
      <div className="main-container policy-container">
        {PrivacyPolicyData.map((item, index) => (
          <div className="policy" key={index}>
            <p className="policy-title sub-heading">{item.title}</p>
            <div className="policy-content text">
              {Array.isArray(item.content) ? (
                item.content.map((subItem, subIndex) => <p key={subIndex}>{subItem}</p>)
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default PrivacyPolicy;
