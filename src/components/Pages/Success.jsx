import { useState, useEffect } from 'react';
import '../../styles/SuccessPage/successPage.css'
import HelmetHeader from '../Common/HelmetHeader';
import featuresList from '../Data/pricing-page-features-list';
import { AiOutlineCheck } from "react-icons/ai";
import { RxColumnSpacing, RxCross2 } from "react-icons/rx";
import { promoText } from '../Data/seo-data';
import { useLocation, useParams } from 'react-router';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const getSessionDataApiUrl = "https://cc3qy5icrz3rp2cqkb275trxya0arqdo.lambda-url.ap-south-1.on.aws/?session_url="

const Success = ({ plan }) => {
  const location = useLocation();
  const [sessionId, setSessionId] = useState(null);
  const [sessionData, setSessionData] = useState(null);
  const [countryCode, setCountryCode] = useState('91');
  const [showNumberSection, setShowNumberSection] = useState(false);
  const [userNumber, setUserNumber] = useState("");

  const successTitle = {basic: "Basic Success", advance: "Advance Success"}
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => {
      return <span key={index} className='white_promo_text pro'>{text}</span>
    })
  }

  const promoTextComponent = <div className='promo_text_container'>
    {...promoTextComponentGenerator()}
  </div>

  useEffect(() => {
   const queryParams = new URLSearchParams(location.search);
    const session_id = queryParams.get('session_id');
    setSessionId(session_id);
    if(session_id==null){
      return;
    }
    try {
      console.log(getSessionDataApiUrl+session_id);
      fetch(getSessionDataApiUrl + session_id)
        .then(response => response.json())
        .then(data =>  setSessionData(data.customer_details.phone))
        .catch(error => console.log("error from session api call ", error));

    } catch (error) {
      console.log("error from session api call ", error);
    }
  }, [])

  return (
    <>
      <HelmetHeader
        title={successTitle[plan] + ' | Prime Sender - Best Web Sender Extension'}
        description={successTitle[plan] + ' for Prime Sender'}
      />
      <div className="main-section">
        {promoTextComponent}
      <div className="main-container success-page-container">
        <div className="success-texts-container">
          <p className="heading">Congrats! You have successfully purchased PS {plan[0].toUpperCase() + plan.substr(1)} Premium</p>
          <p className="text font_grey">Please reload WhatsApp Web after 10 minutes to activate Premium. You will receive a confirmation email soon.</p>
          <p className="sub-text font_grey">If Premium is not enabled, do not worry. Please click on 'Live Support' button on the top left of the extension.</p>
          </div>
          {/*  number section */}
          {sessionId != null && sessionData != null &&
            <div className='number_section_div'>
              <div className='number_section'>
                <p>Premium enabled on: <span>{sessionData}</span></p>
              </div>
              <div className='premium_transfer_div'>
                <p>Need it on another number?
                  {" "}
                  <span
                    className='transfer_text'
                    onClick={() => setShowNumberSection(!showNumberSection)}> Click here
                  </span>
                </p>
                {showNumberSection &&
                  <div className='premium_transfer_input_section'>
                    <PhoneInput
                      country={'in'}
                      value={countryCode}
                      onChange={code => setCountryCode(code)}
                    />
                    <input type="number" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} />
                    <a
                      href={`https://web.whatsapp.com/send?phone=917058067789&text=Hi%2C%20I%20would%20like%20to%20transfer%20the%20premium%20from%20%2B${sessionData.substring(1)}%20to%20%2B${countryCode + userNumber}`}
                      target='_blank'
                      className='request_plan_transfer_button'>Request</a>
                  </div>
                }
              </div>
            </div>}
          <div className='redirect_section'>
            <a
              href='https://web.whatsapp.com/'
              target='_blank'
              className='redirect_button'
            >Go to WhatsApp</a>
          </div>
          <div className="features-list">
            <p className="heading">Features</p>
          {featuresList.map((feature, index) => (
            <div className="feature" key={index}>
              <p className="text">{feature.name}</p>
              {feature[plan] ?
                <AiOutlineCheck className='check-icon large-text' /> :
                <RxCross2 className='cross-icon large-text' />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Success;