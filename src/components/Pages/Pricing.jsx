import { useState , useEffect } from "react";
import "../../styles/PricingPage/pricing.css";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Companies from "../Sections/Companies";
import pricingFeatures from "../Data/pricing-page-features-list"
import Slider from "../common/Slider";

const Pricing = () => {
  const [planPeriod, setPlanPeriod] = useState("yearly");
  const [currentCountry, setCurrentCountry] = useState("india");
  const [userPlanPeriod, setUserPlanPeriod] = useState('annually');
  const [userLastPlan,setUserLastPlan] = useState(null)
  const [userCountry,setUserCountry] = useState(null)
  const [userPlan,setUserPlan] = useState(null)

  const getParams = () => {
    const urlParams = typeof window !== 'undefined' ? window.location.search : '';
    const params = new URLSearchParams(urlParams);
    if(params.size > 0){
      const lastPlan = params.get('lastPlan');
      const country = params.get('country');
      const currentPlan = params.get('currentPlan')

      setUserCountry(country)
      setUserLastPlan(lastPlan)
      setUserPlan(currentPlan)
    
      if (lastPlan || country || currentPlan) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };
  
  useEffect(() => {
    getParams();
  }, []);

  const pricing = {
    india: {
      monthly: {
        free: "0",
        basic: "699",
        basicOld: "999",
        advance: "849",
        advanceOld: "1199",
        basicLimited: "489",
        advanceLimited: "594",
        basicLimitedLink: "https://buy.stripe.com/00g7sMawi30A3JucN2",
        advanceLimitedLink: "https://buy.stripe.com/fZe7sMawi30Acg0bIZ",
      },
      yearly: {
        free: "0",
        basic: "6999",
        basicOld: "9999",
        advance: "8499",
        advanceOld: "11999",
      },
    },
    indonesia: {
      monthly: {
        free: "IDR 0",
        basic: "IDR 79000",
        basicOld: "IDR 109000",
        advance: "IDR 99000",
        advanceOld: "IDR 139000",
        basicLimited: "IDR 55300",
        advanceLimited: "IDR 69300",
        basicLimitedLink: "https://buy.stripe.com/dR6dRa33Q7gQeo8eV2",
        advanceLimitedLink: "https://buy.stripe.com/28ocN6gUGcBa7ZKdQX",
      },
      yearly: {
        free: "IDR 0",
        basic: "IDR 790000",
        basicOld: "IDR 1090000",
        advance: "IDR 990000",
        advanceOld: "IDR 1390000",
      },
    },
    international: {
      monthly: {
        free: "$0",
        basic: "$12.99",
        basicOld: " $16.99",
        advance: "$15.99",
        advanceOld: "$20.99",
        basicLimited: "$9.09",
        advanceLimited: "$11.19",
        basicLimitedLink: "https://buy.stripe.com/4gwbJ25bYgRqa7S9AO",
        advanceLimitedLink: "https://buy.stripe.com/fZeeVe1ZM30Aeo88wL",
      },
      yearly: {
        free: "$0",
        basic: "$129.99",
        basicOld: " $169.99",
        advance: "$159.99",
        advanceOld: "$209.99",
      },
    },
  };

  // links for the button to buy
  function getAdvanceButtonId(country,duration) {
    if (country === 'international') {
      return duration === 'monthly' ? 'https://buy.stripe.com/fZeeVe1ZM30Aeo88wL' : 'https://buy.stripe.com/6oEcN6cEqat2gwg6or';
    }
    else if (country === 'indonesia')
      return duration === 'monthly' ? 'https://buy.stripe.com/28ocN6gUGcBa7ZKdQX' : 'https://buy.stripe.com/00g7sM7k6gRq3JufZ9';
    return duration === 'monthly' ? 'https://buy.stripe.com/fZe7sMawi30Acg0bIZ' : 'https://razorpay.com/payment-button/pl_HyuXVKKhpfe28k/view';
  }

  function getBasicButtonId(country,duration) {
    if (country === 'international') {
      return duration === 'monthly' ? 'https://buy.stripe.com/4gwbJ25bYgRqa7S9AO' : 'https://buy.stripe.com/7sI4gAcEqeJi3JudQW';
    }
    else if (country === 'indonesia')
      return duration === 'monthly' ? 'https://buy.stripe.com/dR6dRa33Q7gQeo8eV2' : 'https://buy.stripe.com/fZe28s8oaat2a7S8wJ';
    return duration === 'monthly' ? 'https://buy.stripe.com/00g7sMawi30A3JucN2' : 'https://razorpay.com/payment-button/pl_HyuSnC8BpjlWV7/view';
  }

  function showButton(planType) {
    const button_href = getBasicButtonId(currentCountry,planPeriod);
    const button_text = planPeriod === 'monthly' ? 'Subscribe' : planType==='basic' ? 'Buy Basic' : 'Buy ' + planType
    return (
      <a
        href={button_href}
        target="_blank"
        className="buy_button">
        {button_text}
      </a>
    );
  }

  function togglePlanPeriod() {
    planPeriod === "yearly" ? setPlanPeriod("monthly") : setPlanPeriod("yearly")
  }

  function toggleUserPlanPeriod(sliderValue) {
    sliderValue ? setUserPlanPeriod('annually') : setUserPlanPeriod('monthly');
  }

  let currentPrice;
  if (currentCountry == "india") {
    if (planPeriod === "monthly") {
      currentPrice = pricing.india.monthly;
    } else if (planPeriod === "yearly") {
      currentPrice = pricing.india.yearly;
    }
  } else if (currentCountry == "indonesia") {
    if (planPeriod === "monthly") {
      currentPrice = pricing.indonesia.monthly;
    } else if (planPeriod === "yearly") {
      currentPrice = pricing.indonesia.yearly;
    }
  } else if (currentCountry == "international") {
    if (planPeriod === "monthly") {
      currentPrice = pricing.international.monthly;
    } else if (planPeriod === "yearly") {
      currentPrice = pricing.international.yearly;
    }
  }

  return (
    <div className="pricing_container">
      <div className="pricing_main">
        <div className="pricing_top_section">
          <div className="pricing_heading">
            <h1>Simple, Flexible Pricing</h1>
          </div>
          <div className="pricing_switches">
            <div className="pricing-slider">
              <Slider onTextHeader="Monthly" offTextHeader="Annually" setValue={togglePlanPeriod} />
            </div>
            <div className="pricing_country">
              <div className="pricing_country_switch">
                <div
                  className={`country_switch ${currentCountry === "india" && "active_country_class"
                    }`}
                  onClick={() => setCurrentCountry("india")}
                >
                  <p>India</p>
                </div>
                <div
                  className={`country_switch ${currentCountry === "indonesia" && "active_country_class"
                    }`}
                  onClick={() => setCurrentCountry("indonesia")}
                >
                  <p>Indonesia</p>
                </div>
                <div
                  className={`country_switch ${currentCountry === "international" && "active_country_class"
                    }`}
                  onClick={() => setCurrentCountry("international")}
                >
                  <p>International</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing_discount_text">
            Early Bird Offer For New User - Extra 30% OFF. Use Code ‘NEWUSER30’
          </div>
        </div>
        <div className="pricing_cards_container">
          {/* free card */}
          <div className="pricing_card">
            <div className="pricing_card_type">
              <p>Free</p>
            </div>
            <div className="pricing_card_price">
              <div className="pricing_cut_price">
                <span className={currentCountry==='india'?'rupee':''}>{currentCountry === "india" ? "₹" : ""}</span>
                <span style={{ textDecoration: "line-through" }}>{currentPrice.basic}</span> / 
                <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>{currentPrice.basicOld}</p>
              </div>
            </div>
            <div className="pricing_card_heading">
              <p>For professionals getting started with small projects</p>
            </div>
            <div className="pricing_card_button">
              <button>{showButton('')}</button>
            </div>
            <div className="pricing_card_text">
              <p>No credit Card required</p>
            </div>
            <div className="pricing_card_features">
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text">Attachment</p>
              </div>
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text">
                  {" "}
                  Customization
                </p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> Caption</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> Save Campaing Details</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> Detailed Delivery Report</p>
              </div>
            </div>
          </div>
          {/* basic card */}
          <div className="pricing_card">
            <div className="pricing_card_type">
              <p>Basic</p>
            </div>
            <div className="pricing_card_price">
              <div className="pricing_cut_price" >
                <span className={currentCountry==='india'?'rupee':''}>{currentCountry === "india" ? "₹" : ""}</span>
                <span>{currentPrice.basic}</span> / 
                <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>{currentPrice.basicOld}</p>
              </div>
            </div>
            <div className="pricing_card_heading">
              <p>For professionals getting started with small projects</p>
            </div>
            <div className="pricing_card_button">
              <button>
                {showButton('basic')}
              </button>
            </div>
            <div className="pricing_card_text">
              <p>No credit Card required</p>
            </div>
            <div className="pricing_card_features">
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text">All Free Features</p>
              </div>
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text">
                  {" "}
                  Call Support
                </p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> No minimum time gap</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> Batching</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> Quick Replies</p>
              </div>
            </div>
          </div>
          {/* advance card */}
          <div className="pricing_card">
            <div className="pricing_card_type">
              <p>Advance</p>
            </div>
            <div className="pricing_card_price">
              <div className="pricing_cut_price" >
                <span className={currentCountry==='india'?'rupee':''}>{currentCountry === "india" ? "₹" : ""}</span>
                <span>{currentPrice.advance}</span> / 
                <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>{currentPrice.advanceOld}</p>
              </div>
            </div>
            <div className="pricing_card_heading">
              <p>For professionals getting started with small projects</p>
            </div>
            <div className="pricing_card_button">
              <button>
                {showButton('advance')} 
              </button>
            </div>
            <div className="pricing_card_text">
              <p>No credit Card required</p>
            </div>
            <div className="pricing_card_features">
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text">All Basic Features</p>
              </div>
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text">
                  Multiple Attachments
                </p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> Schedule</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> Zoom Call Support</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> Business Chat Link</p>
              </div>
            </div>
          </div>
          <div className="pricing_card">
            <div className="pricing_card_type">
              <p>Free</p>
            </div>
            <div className="pricing_card_price">
              <p>
                <span> <span className="rupee">{currentCountry==='india'?'₹':currentCountry==='indonesia'?'IDR ':'$'}</span>0</span> / Forever
              </p>
            </div>
            <div className="pricing_card_heading">
              <p>For professionals getting started with small projects</p>
            </div>
            <div className="pricing_card_button">
              <button>{showButton('')}</button>
            </div>
            <div className="pricing_card_text">
              <p>No credit Card required</p>
            </div>
            <div className="pricing_card_features">
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text">2 free projects</p>
              </div>
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text">
                  {" "}
                  1 GB of cloud storage
                </p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> For personal use</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> Weekly data backup</p>
              </div>{" "}
              <div className="pricing_card_feature">
                <AiOutlineCheck />
                <p className="pricing_card_fature_text"> 12/5 email support</p>
              </div>
            </div>
          </div>
        </div>
        <div colSpan="4" style={{ color: '#C64A23', fontSize: '12px', textDecoration: 'underline', paddingBottom: 24, textAlign: 'center' }}>By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month.</div>
        <div style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>By purchasing the premium plan, you agree to our Terms and Service and Privacy Policy.</div>
        <Companies />
        <div className="pricing_lower_section">
          <div className="pricing_heading">
            <h1>Compare Our Plans</h1>
          </div>
          <div className="pricing_lower_text">
            <p>Complete list of features available in our pricing plans</p>
          </div>
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