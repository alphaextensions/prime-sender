import React from 'react'
import '../../styles/Common/featureCard.css'

const FeatureCard = ({imgSrc,name,desc}) => {
  return (
    <>
      <div className="feature-card">
        <div className="feature-card-head">
          <div className="feature-img">
            <img src={imgSrc} alt={`${name} icon`}/>
          </div>
          <div className="feature-name sub-heading">
            {name}
          </div>
        </div>
        <div className="feature-desc text">
          {desc}
        </div>
      </div>
    </>
  )
}

export default FeatureCard
