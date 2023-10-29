import React from 'react'
import '../../styles/Common/contactUsSubmitConfirm.css'
import {useNavigate} from 'react-router'

const ContactUsSubmitConfirm = ({setFormSubmitted , isLoading, submitError, setSubmitError, setIsLoading}) => {
  const navigate = useNavigate()
  return (
    <>
     {!isLoading ? 
      (
        <div className="success-container">
          <h1 className='large-heading'>Thank You!</h1>
          <div className="success-icon">
            <img src="/gifs/heart.gif" alt="" />
          </div>
          <h3 className='sub-heading'>Your message has been sent successfully</h3>
          <p className='text'>We will try to contact you soon</p>
          <div className="buttons">
          <button onClick={()=>setFormSubmitted(false)} className='back-to-home-button button-round'>Go Back</button>
          <button onClick={()=>navigate('/')} className='back-to-home-button button-round'>Back To Home</button>
          </div>
        </div>
      ) :
      
      submitError ? (
        <div className="success-container">
          <h1 className='large-heading'>Something went wrong...</h1>
          <div className="success-icon">
            <img src="/gifs/processing.gif" alt="" />
          </div>
          <h3 className='sub-heading'>Please try again</h3>
          <div className="buttons">
          <button onClick={()=>{setFormSubmitted(false),setSubmitError(false),setIsLoading(false)}} className='back-to-home-button button-round'>Go Back</button>
          </div>
        </div>
        ) :
        (
          <div className="success-container">
            <h1 className='large-heading'>Processing...</h1>
            <div className="success-icon">
              <img src="/gifs/processing.gif" alt="" />
            </div>
          </div>
        )
    }
    </>
  )
}

export default ContactUsSubmitConfirm
