import React from 'react';
import PrivacyPolicyData from '../Data/privacy-policy-data.js';
import '../../styles/PrivacyPolicyPage/privacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <h4 className="heading">Privacy Policy</h4>

      <div className="policy-container">
        {PrivacyPolicyData.map((item, index) => (
          <div className="policy" key={index}>
            <p className="policy-title">{item.title}</p>
            <div className="policy-content">
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
  );
}

export default PrivacyPolicy;
