import React from 'react'
import '../../styles/Common/contactUsSubmitConfirm.css'
import {useNavigate} from 'react-router'
import ReactGA from 'react-ga4'

const ContactUsSubmitConfirm = ({setFormSubmitted , isLoading, submitError, setSubmitError, setIsLoading, fetchCountryCode}) => {
  const handleButtonClickGA = (button)=>{
    ReactGA.event({
      category: "Button Click",
      action: `${button} button click`,
      label: `${button}_btn_click`,
    });
  }

  const navigate = useNavigate()
  return (
    <>
     {!isLoading ? 
      (
        <div className="success-container">
          <h1 className='large-heading'>Thank You!</h1>
          <div className="success-icon">
            <img src="/gifs/heart.gif" alt="Thank you icon" />
          </div>
          <h3 className='sub-heading'>Your message has been sent successfully</h3>
          <p className='text'>We will try to contact you soon</p>
          <div className="buttons">
          <button onClick={()=>{setFormSubmitted(false),handleButtonClickGA('Go Back'),fetchCountryCode()}} className='back-to-home-button button-round'>Go Back</button>
          <button onClick={()=>{navigate('/'),handleButtonClickGA('Back to Home')}} className='back-to-home-button button-round'>Back To Home</button>
          </div>
        </div>
      ) :
      
      submitError ? (
        <div className="success-container">
          <h1 className='large-heading'>Something went wrong...</h1>
          <div className="success-icon">
            <img src="/gifs/processing.gif" alt="Processing icon" />
          </div>
          <h3 className='sub-heading'>Please try again</h3>
          <div className="buttons">
          <button onClick={()=>{setFormSubmitted(false),setSubmitError(false),setIsLoading(false),handleButtonClickGA('After Error Go Back')}} className='back-to-home-button button-round'>Go Back</button>
          </div>
        </div>
        ) :
        (
          <div className="success-container">
            <h1 className='large-heading'>Processing...</h1>
            <div className="success-icon">
              <img src="/gifs/processing.gif" alt="Processing icon" />
            </div>
          </div>
        )
    }
    </>
  )
}

export default ContactUsSubmitConfirm
