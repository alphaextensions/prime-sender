import React, {useEffect, useState} from 'react'
import '../../styles/ContactPage/contactus.css'
import HelmetHeader from '../Common/HelmetHeader'
import SectionTitle from '../Common/SectionTitle'
import ContactUsSubmitConfirm from '../common/ContactUsSubmitConfirm'
import ReactGA from 'react-ga4'
import { promoText } from '../Data/seo-data'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactUs = () => {
  const [formSubmitted,setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    country_code: localStorage.getItem('user_country_code') || '+91',
    country_name: localStorage.getItem('user_country_name') || 'India',
    phone:'',
    message:''
  });
  const [isLoading,setIsLoading] = useState(false);
  const [submitError,setSubmitError] =  useState(false);
  const { name, email, phone, message, country_code, country_name} = formData;
  const [isPhoneValid,setIsPhoneValid] = useState(true);
  const [phoneError,setPhoneError] = useState('');

  const fetchCountryCode = async () => {
      try {
        const res = await fetch('https://ipapi.co/json');
        const data = await res.json();
        const user_country_code = data.country_calling_code.split('-')[0].substring(1);
        const user_country_name = data.country_name;
        if(user_country_code){
          setFormData({ ...formData, country_code: '+' + user_country_code, country_name: user_country_name });
          localStorage.setItem('user_country_code',user_country_code);
          localStorage.setItem('user_country_name',user_country_name)
        }
      } catch (error) {
        console.log(error);
        setFormData({ ...formData, country_code: localStorage.getItem('user_country_code') || '+91' });
        localStorage.setItem('user_country_name','India')
      }
    }

  useEffect(()=>{
    fetchCountryCode();
  },[])

  async function translateMessage(text) {
    if (text === undefined || text === null || text.trim().length === 0)
      return "";
  
    const translateAPI = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURI(text)}`;
  
    try {
      const response = await fetch(translateAPI);
      const data = await response.json();
      let translatedText = data[0].map(row => row[0]).join(' ');
      return translatedText;
    } catch (err) {
      return "-";
    }
  }
  
  const handleInputChange = (e)=>{
      setFormData({ ...formData, [e.target.name]: e.target.value });
      if(e.target.name === 'phone' && e.target.value.length >= 10){
        setIsPhoneValid(true);
        setPhoneError('');
      }
  }

  const handleCountryCodeInput = (value) => {
    const country_name = document.querySelector('.selected-flag').title.split(':')[0];
    setFormData({ ...formData, country_code: value,country_name: country_name});
    localStorage.setItem('user_country_name',country_name);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    ReactGA.event({
      category: "Button Click",
      action: "Contact Form Submit button clicked",
      label: "contact_form_submit_btn_clicked",
    });
    if(document.getElementById('phone').value.length < 10){
      setIsPhoneValid(false);
      setPhoneError('Phone number must be at least 10 characters long');
      return;
    }
    try {
      setIsLoading(true);
      const TranslatedMessage = await translateMessage(message);
      const response = await fetch(import.meta.env.VITE_FORM_DATA_API,{
        method: "post",
        headers:{
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify([
          {
            "Name": name,
            "Email": email,
            "User Country": country_name,
            "Country Code": country_code,
            "Phone no": phone,
            "Message": message,
            "Translated Message" : TranslatedMessage,
            "Date/time": new Date().toLocaleString('en-in')
        }])
      });
      await response.json();
      setIsLoading(false);
      setFormSubmitted(true);
      setSubmitError(false);
      setFormData({name: '',email: '',country_code: '',phone: '',message: ''});
    } catch (error) {
      setIsLoading(true);
      setSubmitError(true);
    }
  }

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
        title={'Contact Us | Prime Sender - Best Web Sender Extension'}
        description={'Contact Us at Prime Sender'}
        keywords={'contact,prime sender contact page, prime sender support'}
      />      
      {
          formSubmitted && !isLoading ? 
          <ContactUsSubmitConfirm setFormSubmitted={setFormSubmitted} isLoading={false} fetchCountryCode={fetchCountryCode}/> 
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
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="phone">Contact No</label>
                    <div className='phone_container'>
                      <div className="left">
                        <PhoneInput
                          className="country_code"
                          id="country_code"
                          country={'us'}
                          value={formData.country_code}
                          onChange={handleCountryCodeInput}
                          inputProps={{required: true}}
                          placeholder=''
                        />
                      </div>
                      <div className="right">
                        <input 
                          type="number" 
                          name='phone' 
                          id='phone' 
                          value={formData.phone}
                          onChange={handleInputChange} 
                          autoComplete='off'/>
                      </div>
                    </div>
                  </div>
                  {
                    !isPhoneValid &&
                    <span className='phone-error extra-small-tex'>{phoneError}</span>
                  }
                  <div className="form-input">
                    <label htmlFor="message">Message</label> 
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
                {promoTextComponent}
                </div>
              )
          )
        }
    </>
  )
}

export default ContactUs
