import { useState , useEffect } from "react";
import "../../styles/PricingPage/pricing.css";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import pricingFeatures from "../Data/pricing-page-features-list"
import Slider from "../Common/Slider";
import SectionTitle from "../Common/SectionTitle";

const Pricing = () => {
  document.title = 'Pricing | Prime Sender';
  
  const [planPeriod, setPlanPeriod] = useState("annually");
  const [currentCountry, setCurrentCountry] = useState("india");
  const [popupPlanPeriod, setPopupPlanPeriod] = useState('annually');
  const [popupLastPlan,setPopupLastPlan] = useState(null);
  const [popupCountry,setPopupCountry] = useState(null);
  const [popupPlan,setPopupPlan] = useState(null);

  const getParams = () => {
    const urlParams = typeof window !== 'undefined' ? window.location.search : '';
    const params = new URLSearchParams(urlParams);
    if(params.size > 0){
      const lastPlan = params.get('lastPlan');
      const country = params.get('country');
      const currentPlan = params.get('currentPlan')

      setPopupCountry(country)
      setPopupLastPlan(lastPlan)
      setPopupPlan(currentPlan)
    
      if (lastPlan || country || currentPlan) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };
  
  useEffect(() => {
    getParams();
  }, []);

  const whatsappRedirectUrl= "https://web.whatsapp.com/send?phone=919160583572&text=Hi%2C%20I%20would%20like%20to%20purchase%20premium%20for%20multiple%20users."

  const trial_features = ['Export Group Contacts', "Translate Conversation", "Quick Replies", "Customizable Time Gap", "Random Time Gap", 'Chat Support', "Batching", "Caption", "Save Message Template", "Detailed Delivery report"];
  const premium_features = ["Schedule (Advance)", 'Business Chat Link (Advance)', 'Meet/Zoom Support (Advance)', "Multiple Attachments (Advance)"];

  const pricing = {
    india: {
      monthly: {
        free: "₹0",
        basic: "₹699",
        basicSlash: "₹999",
        advance: "₹849",
        advanceSlash: "₹1199",
        basicOffer: "₹489",
        advanceOffer: "₹594"
      },
      annually: {
        free: "₹0",
        basic: "₹6999",
        basicSlash: "₹9999",
        advance: "₹8499",
        advanceSlash: "₹11999",
      },
    },
    indonesia: {
      monthly: {
        free: "IDR 0",
        basic: "IDR 79000",
        basicSlash: "IDR 109000",
        advance: "IDR 99000",
        advanceSlash: "IDR 139000",
        basicOffer: "IDR 55300",
        advanceOffer: "IDR 69300"
      },
      annually: {
        free: "IDR 0",
        basic: "IDR 790000",
        basicSlash: "IDR 1090000",
        advance: "IDR 990000",
        advanceSlash: "IDR 1390000",
      },
    },
    international: {
      monthly: {
        free: "$0",
        basic: "$12.99",
        basicSlash: "$16.99",
        advance: "$15.99",
        advanceSlash: "$20.99",
        basicOffer: "$9.09",
        advanceOffer: "$11.19"
      },
      annually: {
        free: "$0",
        basic: "$129.99",
        basicSlash: "$169.99",
        advance: "$159.99",
        advanceSlash: "$209.99",
      },
    },
  };

  const pricing_links = {
    india: {
      monthly: {
          basic: 'https://buy.stripe.com/00g7sMawi30A3JucN2',
          advance: 'https://buy.stripe.com/fZe7sMawi30Acg0bIZ'
      },
      annually: {
          basic: 'https://razorpay.com/payment-button/pl_HyuSnC8BpjlWV7/view',
          advance: 'https://razorpay.com/payment-button/pl_HyuXVKKhpfe28k/view'
      }
    },
    international: {
      monthly: {
          basic: 'https://buy.stripe.com/4gwbJ25bYgRqa7S9AO',
          advance: 'https://buy.stripe.com/fZeeVe1ZM30Aeo88wL'
      },
      annually: {
          basic: 'https://buy.stripe.com/7sI4gAcEqeJi3JudQW',
          advance: 'https://buy.stripe.com/6oEcN6cEqat2gwg6or'
      }
    },
    indonesia: {
      monthly: {
          basic: 'https://buy.stripe.com/dR6dRa33Q7gQeo8eV2',
          advance: 'https://buy.stripe.com/28ocN6gUGcBa7ZKdQX'
      },
      annually: {
          basic: 'https://buy.stripe.com/fZe28s8oaat2a7S8wJ',
          advance: 'https://buy.stripe.com/00g7sM7k6gRq3JufZ9'
      }
    }
  };

  // links for the button to buy
  function getButtonLink(country, duration, type) {
    return pricing_links[country][duration][type]
  }

  function showButton(isPopup,planType) {
    const button_link = !isPopup ? 
        planType === 'basic' ? getButtonLink(currentCountry,planPeriod,'basic') : getButtonLink(currentCountry,planPeriod,'advance') :
        popupPlan === 'basic' ? getButtonLink(popupCountry,popupPlanPeriod,'basic') : getButtonLink(popupCountry,popupPlanPeriod,'advance');
    const button_text = !isPopup ? 
        planPeriod === 'monthly' ? 'Subscribe' : planType==='basic' ? 'Buy Basic' : 'Buy Advance' : 
        popupPlanPeriod ==='annually' ? 'Buy' : 'Subscribe'
    return (
      <a
        href={button_link}
        target="_blank"
        className="buy_button">
        {button_text}
      </a>
    );
  }

  function togglePlanPeriod() {
    planPeriod === "annually" ? setPlanPeriod("monthly") : setPlanPeriod("annually")
  }

  function togglePopupPlanPeriod() {
    popupPlanPeriod==='monthly' ? setPopupPlanPeriod('annually') : setPopupPlanPeriod('monthly');
  }

  let currentPrice;
  if (currentCountry == "india") {
    if (planPeriod === "monthly") {
      currentPrice = pricing.india.monthly;
    } else if (planPeriod === "annually") {
      currentPrice = pricing.india.annually;
    }
  } else if (currentCountry == "indonesia") {
    if (planPeriod === "monthly") {
      currentPrice = pricing.indonesia.monthly;
    } else if (planPeriod === "annually") {
      currentPrice = pricing.indonesia.annually;
    }
  } else if (currentCountry == "international") {
    if (planPeriod === "monthly") {
      currentPrice = pricing.international.monthly;
    } else if (planPeriod === "annually") {
      currentPrice = pricing.international.annually;
    }
  }

  function generatePricingPopup() {
    let capitalPlanName = popupPlan.charAt(0).toUpperCase() + popupPlan.slice(1)
    return (
      <>
        <div className="pricing-popup-overlay"></div>
        <div className="pricing-popup" style={popupLastPlan === 'planExpired'  ? { background: '#EDF9F3' } : null}>
          <div className="pricing-popup-header">
            <img src='/images/logo-large.png' alt="Prime-Sender" />
            <h1>Prime Sender <b>{capitalPlanName} Plan</b></h1>
          </div>
          <hr />
          <div className='pricing-recommendation-msg'>
            <img src="/images/stars.png" alt="starts" />
            <div className="recommendation-msg-content">Recommended - Value for Money</div>
          </div>
          <div className="pricing-popup-slider">
            {
              popupPlan==='basic' ? 
              <Slider onTextValue="Monthly Plan" offTextValue="Annual Plan" onTextHeader="Basic" offTextHeader="Basic" setValue={togglePopupPlanPeriod}/> :
              <Slider onTextValue="Monthly Plan" offTextValue="Annual Plan" onTextHeader="Advance" offTextHeader="Advance" setValue={togglePopupPlanPeriod}/>
            }
          </div>
          <div className="pricing-popup-content">
            <div className="monthly-price">
              <span className={popupLastPlan==='freeTrial' ? 'pricing-popup-slash-price' : ''}>
                  {
                    popupCountry !== 'india' ? <span>
                    { popupPlan==='basic' ? pricing[popupCountry].monthly.basic : pricing[popupCountry].monthly.advance }
                    </span> : <span>
                    <span className="rupee"> { popupPlan==='basic' ? pricing[popupCountry].monthly.basic.substring(0,1) : pricing[popupCountry].monthly.advance.substring(0,1)}</span>
                    <span>{ popupPlan==='basic' ? pricing[popupCountry].monthly.basic.substring(1) : pricing[popupCountry].monthly.advance.substring(1) }</span>
                    </span>
                  }
                  /month</span>
                   <br />
                  { popupLastPlan==='freeTrial' && (
                      <span className="pricing-popup-offer-price">
                      {
                        popupCountry !== 'india' ? <span>
                        { popupPlan==='basic' ? pricing[popupCountry].monthly.basicOffer : pricing[popupCountry].monthly.advanceOffer }
                      </span> :
                      <span>
                      <span className='rupee'>{ popupPlan==='basic' ? pricing[popupCountry].monthly.basicOffer.substring(0,1) : pricing[popupCountry].monthly.advanceOffer.substring(0,1) }</span>
                      <span>{ popupPlan==='basic' ? pricing[popupCountry].monthly.basicOffer.substring(1) : pricing[popupCountry].monthly.advanceOffer.substring(1) }</span>
                    </span>
                      }
                      */month
                      </span>
                  )}
            </div>
              {
                popupCountry === 'indonesia' ?
                <div className="annual-price-indonesia" >
                  <span>
                    {popupPlan === 'basic' ? pricing[popupCountry].annually.basic : pricing[popupCountry].annually.advance}({
                      (popupPlan === 'basic' ? pricing[popupCountry].annually.basic.substring(0, 4) : pricing[popupCountry].annually.advance.substring(0, 4)) +
                      Math.floor((popupPlan === 'basic' ? pricing[popupCountry].annually.basic.substring(4) : pricing[popupCountry].annually.advance.substring(4)) / 12)
                    }/month)</span> 
                </div> :
                <div className="annual-price" >
                  <span> 
                    <span className={popupCountry==='india' ? 'rupee': ''}>
                      {popupPlan === 'basic' ? pricing[popupCountry].annually.basic.substring(0,1) : pricing[popupCountry].annually.advance.substring(0,1)}
                    </span>
                    <span>
                      {popupPlan === 'basic' ? pricing[popupCountry].annually.basic.substring(1) : pricing[popupCountry].annually.advance.substring(1)}
                    </span>
                    (
                      <span className={popupCountry==='india' ? 'rupee': ''}>
                      {(popupPlan === 'basic' ? pricing[popupCountry].annually.basic.substring(0, 1) : pricing[popupCountry].annually.advance.substring(0, 1))}
                      </span>{
                      Math.floor((popupPlan === 'basic' ? pricing[popupCountry].annually.basic.substring(1) : pricing[popupCountry].annually.advance.substring(1)) / 12)
                    }
                    /month)</span>
              </div>
              }
          </div>
          <div className="pricing-popup-btn">
            <button>{showButton(true,popupPlan)}</button>
          </div>
          <div className="pricing-popup-bottom">
            <div className="pricing-popup-features">
              {
                premium_features.map((item,index)=>{
                  return <div className="feature-item text-bold" key={index}><img src='/images/check.png' className="check_icon" alt="✔"></img>{item}</div>
                })
              }
              {
                trial_features.map((item,index)=>{
                  return <div className="feature-item" key={index}><img src='/images/check.png' className="check_icon" alt="✔"></img>{item}</div>
                })
              }
            </div>

            <div className="pricing-popup-footer">
              <div className="pricing-popup-footer-icon"><span>i</span></div>
              <div className="pricing-popup-footer-content">
                <span className='footer-instruction'>{popupPlanPeriod === 'monthly' && popupLastPlan==='freeTrial' ? "*Discount applicable for the first month" : ""}</span>
                {
                  popupPlanPeriod === 'monthly' ?
                  <span>
                    By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month. By purchasing the premium plan, you agree to our <u><a href="https://prime-sender.com/terms-of-service/" target='_blank'>Terms of Service</a> </u> and <u><a href="https://prime-sender.com/privacy-policy/" target='_blank'>Privacy Policy</a> </u>.
                  </span>:
                  <span>
                    By purchasing the premium plan, you agree to our <u><a href="https://prime-sender.com/terms-of-service/" target='_blank'>Terms of Service</a> </u> and <u><a href="https://prime-sender.com/privacy-policy/" target='_blank'>Privacy Policy</a> </u>.
                  </span>
                }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="pricing_container">
      {popupLastPlan && generatePricingPopup()}
      <div className="pricing_main">
        <div className="pricing_top_section">
          <SectionTitle gif="/gifs/pricing-title.gif" title="Simple, Affordable Pricing" />
          <div className="pricing_switches">
            <div className="pricing-slider">
              <Slider onTextHeader="Monthly" offTextHeader="12 Months" setValue={togglePlanPeriod} />
            </div>
            <div className="pricing_country">
              <div className="pricing_country_switch">
                <div className={`country_switch ${currentCountry === "india" && "active_country_class" }`} onClick={() => setCurrentCountry("india")} >
                  <p className="country_current_switch heading">
                    <img src="/images/india.png" alt="" />
                    India
                  </p>
                </div>
                <div className={`country_switch ${currentCountry === "indonesia" && "active_country_class" }`} onClick={() => setCurrentCountry("indonesia")} >
                  <p className="country_current_switch heading">
                    <img src="/images/indonesia.svg" alt="" />
                    Indonesia</p>
                </div>
                <div className={`country_switch ${currentCountry === "international" && "active_country_class" }`} onClick={() => setCurrentCountry("international")}> 
                  <p className="country_current_switch heading">🌎 International</p>
                </div>
              </div>
            </div>
          </div>
          {
            planPeriod === 'monthly' && <div className="pricing_discount_text">
            Early bird offer for new user - <span style={{fontWeight:"bold", marginLeft:"4px"}}>Extra 30% OFF</span>. Use code <img src="/images/coupon.png" alt="" />
            </div>
          }
        </div>
        <div className="pricing_cards_container">
          {/* free card */}
          <div className="pricing_card">
            <div className="pricing_card_type">
              <p>Free</p>
            </div>
            <div className="pricing_card_price">
              <div className="free_pricing_div">
                <span className={currentCountry === 'india' ? 'rupee heading' : ' heading'}>
                  {currentCountry === 'indonesia' ? currentPrice.basic.toString().substring(0,4) : currentPrice.basic.toString().substring(0,1)}</span>
                <span className="heading">0</span>
                <br />
                <p className={currentCountry === 'india' ? 'rupee' : ''} style={{ display: "inline", visibility: "hidden" }}>{currentCountry === "india" ? "₹" : currentCountry === 'indonesia' ? "IDR " : "$"}</p>
                <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap", visibility: "hidden" }}>{planPeriod === 'monthly' ? currentPrice.basicSlash : (currentPrice.basicSlash / 12).toFixed(2)}</p>
              </div>
            </div>
            {planPeriod === 'annually' &&
              <div className="pricing_card_heading">
                <p>Free Forever</p>
                <p style={{ visibility: "hidden" }}>{` a`}</p>
              </div>
            }
            <div className="pricing_card_button">
              <button>
                <a
                  href='https://chromewebstore.google.com/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia?hl=en'
                  target="_blank"
                  className="buy_button">
                    Try Now
                </a>
              </button>
            </div>

            <div className="pricing_card_features">
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text">Attachment</p>
              </div>
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text">
                  {" "}
                  Translate Conversations
                </p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text"> Caption</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text"> Save Campaing Details</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text"> Detailed Delivery Report</p>
              </div>
            </div>
          </div>
          {/* basic card */}
          <div className="pricing_card premium_card">
            <div className="pricing_card_type">
              <p>Basic</p>
            </div>
            <div className="pricing_card_price">
              <div className="pricing_cut_price">
                <span className={currentCountry === 'india' ? 'rupee heading' : ' heading'}>
                  {currentCountry === 'indonesia' ? currentPrice.basic.substring(0,4) : currentPrice.basic.substring(0,1)}
                </span>
                {
                  currentCountry === 'indonesia' ?
                  <span className="heading">{planPeriod === 'monthly' ? currentPrice.basic.substring(4) : (currentPrice.basic.substring(4) / 12).toFixed(2)}</span> :
                  <span className="heading">{planPeriod === 'monthly' ? currentPrice.basic.substring(1) : (currentPrice.basic.substring(1) / 12).toFixed(2)}</span>
                }
                <p style={{ display: "inline", whiteSpace: "nowrap" }}> / month</p>
                <br />
                <p className={currentCountry === 'india' ? 'rupee' : ''} style={{ display: "inline" }}>
                {currentCountry === 'indonesia' ? currentPrice.basic.substring(0,4) : currentPrice.basic.substring(0,1)}
                </p>
                <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                {
                  currentCountry === 'indonesia' ?
                  planPeriod === 'monthly' ? currentPrice.basicSlash.substring(4) : (currentPrice.basicSlash.substring(4) / 12).toFixed(2):
                  planPeriod === 'monthly' ? currentPrice.basicSlash.substring(1) : (currentPrice.basicSlash.substring(1) / 12).toFixed(2)
                }
                </p>
              </div>
            </div>
            {planPeriod === 'annually' &&
              <div className="pricing_card_heading">
                <span>Billed&nbsp;
                  <span className={currentCountry === 'india' ? 'rupee' : ''}>
                    {currentCountry === 'indonesia' ? currentPrice.basic.substring(0,4) : currentPrice.basic.substring(0,1)}
                  </span>
                  {currentCountry === 'indonesia' ? currentPrice.basic.substring(4) : currentPrice.basic.substring(1)} for 12 months' service per account
                </span>
              </div>
            }
            <div className="pricing_card_button">
              <button>
                {showButton(false, 'basic')}
              </button>
            </div>

            <div className="pricing_card_features">
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text" style={{fontWeight:"bold"}}>All Free Features</p>
              </div>
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text">
                  {" "}
                  Call Support
                </p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text"> No minimum time gap</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text"> Batching</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text"> Quick Replies</p>
              </div>
            </div>
          </div>
          {/* advance card */}
          <div className="pricing_card premium_card">
            <img className="recommended_tag" src="/images/recommended_tag.png" alt="" />
            <div className="pricing_card_type">
              <p>Advance</p>
            </div>
            <div className="pricing_card_price">
              <div className="pricing_cut_price">
                <span className={currentCountry === 'india' ? 'rupee heading' : ' heading'}>
                  {currentCountry === 'indonesia' ? currentPrice.advance.substring(0,4) : currentPrice.advance.substring(0,1)}
                </span>
                {
                  currentCountry === 'indonesia' ?
                  <span className="heading">{planPeriod === 'monthly' ? currentPrice.advance.substring(4) : (currentPrice.advance.substring(4) / 12).toFixed(2)}</span> :
                  <span className="heading">{planPeriod === 'monthly' ? currentPrice.advance.substring(1) : (currentPrice.advance.substring(1) / 12).toFixed(2)}</span>
                }
                <p style={{ display: "inline", whiteSpace: "nowrap" }}> / month</p>
                <br />
                <p className={currentCountry === 'india' ? 'rupee' : ''} style={{ display: "inline" }}>
                  {currentCountry === 'indonesia' ? currentPrice.advance.substring(0,4) : currentPrice.advance.substring(0,1)}
                </p>
                <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                {
                  currentCountry === 'indonesia' ?
                  planPeriod === 'monthly' ? currentPrice.advanceSlash.substring(4) : (currentPrice.advanceSlash.substring(4) / 12).toFixed(2):
                  planPeriod === 'monthly' ? currentPrice.advanceSlash.substring(1) : (currentPrice.advanceSlash.substring(1) / 12).toFixed(2)
                }  
                </p>
              </div>
            </div>
            {planPeriod === 'annually' &&
              <div className="pricing_card_heading">
                <span>Billed&nbsp;
                  <span className={currentCountry === 'india' ? 'rupee' : ''}>
                    {currentCountry === 'indonesia' ? currentPrice.advance.substring(0,4) : currentPrice.advance.substring(0,1)}
                  </span>
                  {currentCountry === 'indonesia' ? currentPrice.advance.substring(4) : currentPrice.advance.substring(1)} for 12 months' service per account
                </span>
              </div>
            }
            <div className="pricing_card_button">
              <button>
                {showButton(false, 'advance')}
              </button>
            </div>

            <div className="pricing_card_features">
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text"  style={{fontWeight:"bold"}}>All Basic Features</p>
              </div>
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text">
                  Multiple Attachments
                </p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text"> Schedule</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text"> Zoom Call Support</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_feature_text"> Business Chat Link</p>
              </div>
            </div>
          </div>
          <div className="pricing_card multiple_user_card">
            <div className="multiple_card_type">
              <p>Need multiple accounts?</p>
            </div>

            <div className="pricing_card_heading">
              Purchase premium plan for multiple users for your organisation at a discounted rate
            </div>
            <div className="pricing_card_button">
              <button>
                <a href={whatsappRedirectUrl} target="_blank" className="buy_button">Talk to Us</a>
              </button>
            </div>
          </div>
        </div>
        <div className="sub-text" colSpan="4" style={{ color: '#C64A23', fontSize: '12px', textDecoration: 'underline', paddingBottom: 24, textAlign: 'center' }}>By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month.</div>
        <div className="sub-text" style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>By purchasing the premium plan, you agree to our Terms and Service and Privacy Policy.</div>
        <div className="pricing_lower_section">
          <SectionTitle 
            gif="/gifs/compare-plans.gif" 
            title="Compare Our Plans" 
            subtitle="Complete list of features available in our pricing plans"
          />
          <div className="pricing_table_section">
            <table className="pricing_table">
              <thead>
                <tr>
                  <th></th>
                  <th>Free</th>
                  <th>Basic</th>
                  <th>Advanace</th>
                </tr>
              </thead>
              <tbody>
              {pricingFeatures.map((feature, index) => (
                <tr key={index}>
                  <th>{feature.name}</th>
                  <td>{feature.free ? <AiOutlineCheck /> : <RxCross2 className="cross_icon" />}</td>
                  <td>{feature.basic ? <AiOutlineCheck /> : <RxCross2 className="cross_icon" />}</td>
                  <td>{feature.advance ? <AiOutlineCheck /> : <RxCross2 className="cross_icon" />}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;