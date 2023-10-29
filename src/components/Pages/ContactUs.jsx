import React, {useState} from 'react'
import '../../styles/ContactPage/contactus.css'
import HelmetHeader from '../Common/HelmetHeader'
import SectionTitle from '../Common/SectionTitle'
import ContactUsSubmitConfirm from '../common/ContactUsSubmitConfirm'

const ContactUs = () => {
  const [formSubmitted,setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    message:''
  });
  const [isLoading,setIsLoading] = useState(false);
  const [submitError,setSubmitError] =  useState(false);
  const { name, email, phone, message} = formData;

  const handleInputChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(import.meta.env.VITE_FORM_DATA_API,{
        method: "post",
        headers:{
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify([
          {
            "Name": name,
            "Email": email,
            "Phone no": phone,
            "Message": message,
            "Date/time": new Date().toLocaleString()
        }])
      });
      await response.json();
      setIsLoading(false);
      setFormSubmitted(true);
      setSubmitError(false);
      setFormData({name: '',email: '',phone: '',message: ''});
    } catch (error) {
      setIsLoading(true);
      setSubmitError(true);
    }
  }

  return (
    <>
      <HelmetHeader
        title={'Contact Us | Prime Sender'}
        description={'Contact Us at Prime Sender'}
      />      
      {
          formSubmitted && !isLoading ? 
          <ContactUsSubmitConfirm setFormSubmitted={setFormSubmitted} isLoading={false}/> 
          :
          (
            isLoading ?
            <ContactUsSubmitConfirm 
              setFormSubmitted={setFormSubmitted} 
              isLoading={true} 
              submitError={submitError} 
              setSubmitError={setSubmitError} 
              setIsLoading={setIsLoading}/> 
              :
              (
                <div>
                  <div className="main-section contactus_section">
                  <SectionTitle gif="/gifs/contact-us.gif" title="Contact Us" />
                </div>
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                  <div className="form-input">
                    <label htmlFor="name">Name:</label>
                    <input 
                      type="text" 
                      name='name' 
                      id='name' 
                      value={formData.name}
                      onChange={handleInputChange} 
                      autoComplete='off' 
                      required/>
                  </div>
                  <div className="form-input">
                    <label htmlFor="email">Email:</label>
                    <input 
                      type="email" 
                      name='email' 
                      id='email' 
                      value={formData.email}
                      onChange={handleInputChange} 
                      autoComplete='off' 
                      required/>
                  </div>
                  <div className="form-input">
                    <label htmlFor="phone">Contact No:</label>
                    <input 
                      type="number" 
                      name='phone' 
                      id='phone' 
                      value={formData.phone}
                      onChange={handleInputChange} 
                      autoComplete='off'/>
                  </div>
                  <div className="form-input">
                    <label htmlFor="message">Message:</label> 
                    <textarea 
                      name='message' 
                      id="message" 
                      cols="30" 
                      rows="8" 
                      value={formData.message}
                      onChange={handleInputChange} 
                      autoComplete='off' 
                      required/>
                  </div>
                  <div className="form-btn">
                    <button type="submit" className='button-round'>Send Message</button>
                  </div>
                  </form>
                </div>
                </div>
              )
          )
        }
    </>
  )
}

export default ContactUs
