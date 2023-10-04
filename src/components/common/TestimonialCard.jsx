import React from 'react'

const TestimonialCard = ({heading,review,imgSrc,customerName}) => {
  return (
    <>
      <h2 className="heading"><span className="quotation_mark">❛❛ </span>{heading}</h2>
      <p className="customer_review text" >{review}</p>
      <div className="customer_info">
        <div className="customer_img">
          <img src={imgSrc} alt="user" />
        </div>
        <div className="customer_name">
          <h4 className="sub-heading">{customerName}</h4>
        </div>
      </div> 
    </>
  )
}

export default TestimonialCard