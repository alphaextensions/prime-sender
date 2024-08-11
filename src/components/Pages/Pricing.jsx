import { useState, useEffect } from "react";
import "../../styles/PricingPage/pricing.css";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import pricingFeatures from "../Data/pricing-page-features-list"
import Slider from "../Common/Slider";
import SectionTitle from "../Common/SectionTitle";
import HelmetHeader from "../Common/HelmetHeader";
import ReactGA from "react-ga4";
import { promoText } from "../Data/seo-data";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FreeCardFeatures, advanceCardFeatures, basicCardFeatures } from "../Data/pricing-page-cards-list";
import {Oval} from "react-loader-spinner";
import MultipleAccountPopup from "../sections/MultipleAccountPopup";


const Pricing = () => {
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => {
      return <span key={index} className='white_promo_text pro'>{text}</span>
    })
  }

  const promoTextComponent = <div className='promo_text_container'>
    {...promoTextComponentGenerator()}
  </div>
  const [planPeriod, setPlanPeriod] = useState("annually");
  const [currentCountry, setCurrentCountry] = useState("international");
  const [popupPlanPeriod, setPopupPlanPeriod] = useState('annually');
  // const [currency, setCurrency] = useState(null)
  // const [convertedCurrency, setConvertedCurrency] = useState({ basic: 0, advance: 0 })
  const [popupLastPlan, setPopupLastPlan] = useState(null);
  const [popupCountry, setPopupCountry] = useState(null);
  const [popupPlan, setPopupPlan] = useState(null);
  const [myLocation, setMyLocation] = useState(null);
  const [flagIconSrc, setFlagIconSrc] = useState('');
  const [loading, setLoading] = useState(false);
  const [featureDetailHover, setFeatureDetailHover] = useState(-1);
  const [freeCardDetailHover, setFreeCardDetailHover] = useState(-1);
  const [basicCardDetailHover, setBasicCardDetailHover] = useState(-1);
  const [advanceCardDetailHover, setAdvanceCardDetailHover] = useState(-1);
  const [pricingCalculatorPlan, setPricingCalculatorPlan] = useState("advance");
  const [pricingCalculatorPeriod, setPricingCalculatorPeriod] = useState("annually");
  const [numAccounts, setNumAccounts] = useState(Number(JSON.parse(localStorage.getItem('numAccounts')))|| 2);
  const [multAccountPrice, setMultAccountPrice] = useState({ price: '', totalPrice: '', cutPrice: ''});
  const [priceCalculatorLoader, setPriceCalculatorLoader] = useState(false);
  const [showMultipleAccountPopup, setShowMultipleAccountPopup] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState(JSON.parse(localStorage.getItem("phoneNumbers"))  || ['', '']);
  const [isMultipleAccountPage, setIsMultipleAccountPage] = useState(false);
  const [isPricingCardHovered, setIsPricingCardHovered] = useState("");
  
  const getParams = () => {
    const urlParams = typeof window !== 'undefined' ? window.location.search : '';
    const params = new URLSearchParams(urlParams);
    if (params.size > 0) {
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
  const countryCodesPresent= ["IN", "ID", "AE", "EG", "GB", "SA", "KW", "SG", "IL"]
  const countryCodeToName= {
    "IN": 'india',
    "ID": 'indonesia',
    "AE": 'uae',
    "EG": 'egypt',
    "GB": 'uk',
    "SA": 'saudi_arabia',
    "KW": 'kuwait',
    "SG": 'singapore',
    "IL": 'israel',
  }
  const countryCodeToCurrency = {
    "IN": "INR",
    "ID": "IDR",
    "AED": "AED",
    "EG": "EGP",
    "GB": "GBP",
    "SA": "SAR",
    "KW": "USD",
    "SG": "SGD",
    "IL": "ILS",
  }

  const whatsappRedirectUrl = "https://web.whatsapp.com/send?phone=917058067789&text=Hi%2C%20I%20would%20like%20to%20purchase%20premium%20for%20multiple%20users."

  const trial_features = ['Export Group Contacts', "Translate Conversation", "Quick Replies", "Customizable Time Gap", "Random Time Gap", 'Chat Support', "Batching", "Caption", "Save Message Template", "Detailed Delivery report"];
  const premium_features = ["Schedule", 'Business Chat Link', 'Meet/Zoom Support', "Multiple Attachments"];

  const handleGaButtonClick = (type) => {
    ReactGA.event({
      category: "Button Click",
      action: `buy ${type} button click`,
      label: `buy_${type}_btn_clicked`,
    });
    if(type == "multiple_user") {
      setShowMultipleAccountPopup(true);
    }
    return;
  }

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
        monthlyBasicSlash: "₹999",
        monthlyAdvanceSlash: "₹1199",
        basicRoundedOffPrice: "₹584",
        advanceRoundedOffPrice: "₹709"
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
        monthlyBasicSlash: "IDR 109000",
        monthlyAdvanceSlash: "IDR 139000",
        basicRoundedOffPrice: "IDR 65850",
        advanceRoundedOffPrice: "IDR 82500"
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
        monthlyBasicSlash: "$16.99",
        monthlyAdvanceSlash: "$20.99",
        basicRoundedOffPrice: "$10.8",
        advanceRoundedOffPrice: "$13.3"
      },
    },
    uae: {
      monthly: {
        free: "AED 0",
        basic: "AED 62.99",
        basicSlash: "AED 89.99",
        advance: "AED 73.99",
        advanceSlash: "AED 105.99",
        basicOffer: "AED 44.09",
        advanceOffer: "AED 51.79"
      },
      annually: {
        free: "AED 0",
        basic: "AED 629.99",
        basicSlash: "AED",
        advance: "AED 739.99",
        advanceSlash: "",
        monthlyBasicSlash: "AED 89.99",
        monthlyAdvanceSlash: "AED 105.99",
        basicRoundedOffPrice: "AED 52.49",
        advanceRoundedOffPrice: "AED 61.66"
      },
    },
    egypt: {
      monthly: {
        free: "EGP 0",
        basic: "EGP 439.99",
        basicSlash: "EGP 628.99",
        advance: "EGP 529.99",
        advanceSlash: "EGP 756.99",
        basicOffer: "EGP 307.99",
        advanceOffer: "EGP 370.99"
      },
      annually: {
        free: "EGP 0",
        basic: "EGP 4399.99",
        basicSlash: "",
        advance: "EGP 5299.99",
        advanceSlash: "",
        monthlyBasicSlash: "EGP 628.99",
        monthlyAdvanceSlash: "EGP 756.99",
        basicRoundedOffPrice: "EGP 366.66",
        advanceRoundedOffPrice: "EGP 441.66"
      },
    },
    kuwait: {
      monthly: {
        free: "$0",
        basic: "$15.99",
        basicSlash: "$22.99",
        advance: "$18.99",
        advanceSlash: "$26.99",
        basicOffer: "$11.19",
        advanceOffer: "$13.29"
      },
      annually: {
        free: "$0",
        basic: "$159.99",
        basicSlash: "",
        advance: "$189.99",
        advanceSlash: "",
        monthlyBasicSlash: "$22.99",
        monthlyAdvanceSlash: "$26.99",
        basicRoundedOffPrice: "$13.33",
        advanceRoundedOffPrice: "$15.83"
      },
    },
    singapore: {
      monthly: {
        free: "SGD 0",
        basic: "SGD 23.99",
        basicSlash: "SGD 33.99",
        advance: "SGD 27.99",
        advanceSlash: "SGD 39.99",
        basicOffer: "SGD 16.79",
        advanceOffer: "SGD 19.59"
      },
      annually: {
        free: "SGD 0",
        basic: "SGD 239.99",
        basicSlash: "",
        advance: "SGD 279.99",
        advanceSlash: "",
        monthlyBasicSlash: "SGD 33.99",
        monthlyAdvanceSlash: "SGD 39.99",
        basicRoundedOffPrice: "SGD 19.99",
        advanceRoundedOffPrice: "SGD 23.33"
      },
    },
    israel: {
      monthly: {
        free: "ILS 0",
        basic: "ILS 62.99",
        basicSlash: "ILS 89.99",
        advance: "ILS 73.99",
        advanceSlash: "ILS 105.99",
        basicOffer: "ILS 44.09",
        advanceOffer: "ILS 51.79"
      },
      annually: {
        free: "ILS 0",
        basic: "ILS 629.99",
        basicSlash: "",
        advance: "ILS 739.99",
        advanceSlash: "",
        monthlyBasicSlash: "ILS 89.99",
        monthlyAdvanceSlash: "ILS 105.99",
        basicRoundedOffPrice: "ILS 52.5",
        advanceRoundedOffPrice: "ILS 61.6"
      },
    },
    uk: {
      monthly: {
        free: "GBP 0",
        basic: "GBP 13.99",
        basicSlash: "GBP 19.99",
        advance: "GBP 16.99",
        advanceSlash: "GBP 23.99",
        basicOffer: "GBP 9.79",
        advanceOffer: "GBP 11.89"
      },
      annually: {
        free: "GBP 0",
        basic: "GBP 139.99",
        basicSlash: "",
        advance: "GBP 169.99",
        advanceSlash: "",
        monthlyBasicSlash: "GBP 19.99",
        monthlyAdvanceSlash: "GBP 23.99",
        basicRoundedOffPrice: "GBP 11.6",
        advanceRoundedOffPrice: "GBP 14.2"
      },
    },
    saudi_arabia: {
      monthly: {
        free: "SAR 0",
        basic: "SAR 56.99",
        basicSlash: "SAR 81.99",
        advance: "SAR 75.99",
        advanceSlash: "SAR 108.99",
        basicOffer: "SAR 39.89",
        advanceOffer: "SAR 53.19"
      },
      annually: {
        free: "SAR 0",
        basic: "SAR 569.99",
        basicSlash: "",
        advance: "SAR 759.99",
        advanceSlash: "",
        monthlyBasicSlash: "SAR 81.99",
        monthlyAdvanceSlash: "SAR 108.99",
        basicRoundedOffPrice: "SAR 47.5",
        advanceRoundedOffPrice: "SAR 63.3"
      },
    },
  };

  const pricing_links = {
    india: {
      monthly: {
        basic: '00g7sMawi30A3JucN2',
        advance: 'fZe7sMawi30Acg0bIZ'
      },
      annually: {
        basic: '9AQ14o47UdFe6VG7tq',
        advance: '14k9AUgUG9oY3Ju5lj'
      }
    },
    international: {
      monthly: {
        basic: '4gwbJ25bYgRqa7S9AO',
        advance: 'fZeeVe1ZM30Aeo88wL'
      },
      annually: {
        basic: '7sI4gAcEqeJi3JudQW',
        advance: '6oEcN6cEqat2gwg6or'
      }
    },
    indonesia: {
      monthly: {
        basic: 'dR6dRa33Q7gQeo8eV2',
        advance: '28ocN6gUGcBa7ZKdQX'
      },
      annually: {
        basic: 'fZe28s8oaat2a7S8wJ',
        advance: '00g7sM7k6gRq3JufZ9'
      }
    },
    uae: {
      monthly: {
        basic: 'eVa28scEqeJi7ZKeVE',
        advance: '6oEeVe1ZMfNm7ZK8xf'
      },
      annually: {
        basic: '5kAaEY7k6dFe4NycNu',
        advance: '6oE3cwdIucBadk428P'
      }
    },
    kuwait: {
      monthly: {
        basic: '7sIbJ27k68kU6VG4gP',
        advance: '6oE8wQ1ZM44Edk4eVw'
      },
      annually: {
        basic: 'aEU3cwawi8kU93O7t2',
        advance: '14k5kE9se30A93O14F'
      }
    },
    egypt: {
      monthly: {
        basic: 'cN228s8oa8kUfsc4gW',
        advance: 'bIY00keMyfNm1Bm28N'
      },
      annually: {
        basic: '00g9AU7k6bx62Fq9Be',
        advance: '4gwcN6awi7gQ93O5kX'
      }
    },
    singapore: {
      monthly: {
        basic: 'eVa5kE6g230A4Ny28F',
        advance: '14kbJ233Qat2bbW28E'
      },
      annually: {
        basic: 'dR63cwdIu9oYcg014z',
        advance: 'fZeeVe8oa8kUeo828G'
      }
    },
    israel: {
      monthly: {
        basic: '8wM7sMeMy6cMeo8eVQ',
        advance: '3cseVe6g27gQ7ZK00V'
      },
      annually: {
        basic: 'aEU9AUdIu0Ssfsc3d6',
        advance: 'aEUcN6cEqcBa3Ju5ld'
      }
    },
    uk: {
      monthly: {
        basic: "aEUcN65bYdFe4Ny4h8",
        advance: "aEUdRa5bY8kUdk47tj"
      },
      annually: {
        basic: "4gw4gA8oa44E5RC6pe",
        advance: "bIY5kEdIu9oY2FqaFt"
      }
    },
    saudi_arabia: {
      monthly: {
        basic: "aEUeVebAm58Ieo8151",
        advance: "14k6oIeMy0Sscg09Bn",
      },
      annually: {
        basic: "4gw5kE7k6dFe4Ny00M",
        advance: "6oEaEY5bY1Wwfsc28T"
      }
    }
  };

  // links for the button to buy
  function getButtonLink(country, duration, type) {
    let buttonLink = 'https://buy.stripe.com/'
    buttonLink += pricing_links[country][duration][type]
    return buttonLink;
  }

  function showButton(isPopup, planType) {
    const button_link = !isPopup ?
      planType === 'basic' ? getButtonLink(currentCountry, planPeriod, 'basic') : getButtonLink(currentCountry, planPeriod, 'advance') :
      popupPlan === 'basic' ? getButtonLink(popupCountry, popupPlanPeriod, 'basic') : getButtonLink(popupCountry, popupPlanPeriod, 'advance');
    const button_text = !isPopup ?
      planPeriod === 'monthly' ? 'Subscribe' : planType === 'basic' ? 'Buy Basic' : 'Buy Advance' :
      popupPlanPeriod === 'annually' ? 'Buy' : 'Subscribe'
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
    currentCountry === 'international' && setInternational()
  }

  function togglePopupPlanPeriod() {
    popupPlanPeriod === 'monthly' ? setPopupPlanPeriod('annually') : setPopupPlanPeriod('monthly');
  }

  let currentPrice;
  currentPrice = pricing[currentCountry][planPeriod];

  function generatePricingPopup() {
    ReactGA.send({ hitType: "popupview", page: "/pricing", title: "Pricing Page Popup, Redirected from extension" });
    let capitalPlanName = popupPlan.charAt(0).toUpperCase() + popupPlan.slice(1);
    const handlePopupGaButtonClick = () => {
      ReactGA.event({
        category: "Button Click",
        action: `pricing popup buy ${popupPlan} button click`,
        label: `buy_popup_${popupPlan}_btn_clicked`,
      });
      return;
    }
    return (
      <>
        <div className="pricing-popup-overlay"></div>
        <div className="pricing-popup" style={popupLastPlan === 'planExpired' ? { background: '#EDF9F3' } : null}>
          <div className="pricing-popup-header">
            <div className='pricing-popup-logo'>
              <img src="/images/logo-img.png" alt="logo" />
              <img src="/images/logo-text.png" alt="logo" />
            </div>
            <h1> <b>{capitalPlanName} Plan</b></h1>
          </div>
          <hr />
          <div className='pricing-recommendation-msg'>
            <img src="/images/stars.png" alt="starts" />
            <div className="recommendation-msg-content">Recommended - Value for Money</div>
          </div>
          <div className="pricing-popup-slider">
            {
              popupPlan === 'basic' ?
                <Slider onTextValue="Monthly Plan" offTextValue="Annual Plan" onTextHeader="Basic" offTextHeader="Basic" setValue={togglePopupPlanPeriod} /> :
                <Slider onTextValue="Monthly Plan" offTextValue="Annual Plan" onTextHeader="Advance" offTextHeader="Advance" setValue={togglePopupPlanPeriod} />
            }
          </div>
          <div className="pricing-popup-content">
            <div className="monthly-price">
              <span className={popupLastPlan === 'freeTrial' ? 'pricing-popup-slash-price' : ''}>
                {
                  popupCountry !== 'india' ? <span>
                    {popupPlan === 'basic' ? pricing[popupCountry].monthly.basic : pricing[popupCountry].monthly.advance}
                  </span> : <span>
                    <span className="rupee"> {popupPlan === 'basic' ? pricing[popupCountry].monthly.basic.substring(0, 1) : pricing[popupCountry].monthly.advance.substring(0, 1)}</span>
                    <span>{popupPlan === 'basic' ? pricing[popupCountry].monthly.basic.substring(1) : pricing[popupCountry].monthly.advance.substring(1)}</span>
                  </span>
                }
                /month</span>
              <br />
              {popupLastPlan === 'freeTrial' && (
                <span className="pricing-popup-offer-price">
                  {
                    popupCountry !== 'india' ? <span>
                      {popupPlan === 'basic' ? pricing[popupCountry].monthly.basicOffer : pricing[popupCountry].monthly.advanceOffer}
                    </span> :
                      <span>
                        <span className='rupee'>{popupPlan === 'basic' ? pricing[popupCountry].monthly.basicOffer.substring(0, 1) : pricing[popupCountry].monthly.advanceOffer.substring(0, 1)}</span>
                        <span>{popupPlan === 'basic' ? pricing[popupCountry].monthly.basicOffer.substring(1) : pricing[popupCountry].monthly.advanceOffer.substring(1)}</span>
                      </span>
                  }
                  */month
                </span>
              )}
            </div>
            {
              popupCountry !== 'india' && popupCountry !== 'international' && popupCountry !== 'kuwait' ?
                <div className="annual-price-indonesia" >
                  <span>
                    {popupPlan === 'basic' ? pricing[popupCountry].annually.basic : pricing[popupCountry].annually.advance}
                    &nbsp;({
                      (popupPlan === 'basic' ? pricing[popupCountry].annually.basicRoundedOffPrice : pricing[popupCountry].annually.advanceRoundedOffPrice)
                    }/month)</span>
                </div> :
                <div className="annual-price" >
                  <span>
                    <span className={popupCountry === 'india' ? 'rupee' : ''}>
                      {popupPlan === 'basic' ? pricing[popupCountry].annually.basic.substring(0, 1) : pricing[popupCountry].annually.advance.substring(0, 1)}
                    </span>
                    <span>
                      {popupPlan === 'basic' ? pricing[popupCountry].annually.basic.substring(1) : pricing[popupCountry].annually.advance.substring(1)}
                    </span>
                    &nbsp;(
                    <span className={popupCountry === 'india' ? 'rupee' : ''}>
                      {(popupPlan === 'basic' ? pricing[popupCountry].annually.basicRoundedOffPrice : pricing[popupCountry].annually.advanceRoundedOffPrice)}
                      /month)</span>
                  </span>
                </div>
            }
          </div>
          <div className="pricing-popup-btn">
            <button onClick={handlePopupGaButtonClick}>{showButton(true, popupPlan)}</button>
            <a href={whatsappRedirectUrl} target="_blank" className="multiple-accounts-btn">Purchase for multiple users</a>
          </div>
          <div className="pricing-popup-bottom">
            <div className="pricing-popup-features">
              {
                premium_features.map((item, index) => {
                  return <div className="feature-item" key={index}><img src='/images/check.png' className="check_icon" alt="✔"></img>{item} <span className="text-bold">&nbsp;(Advance)</span></div>
                })
              }
              {
                trial_features.map((item, index) => {
                  return <div className="feature-item" key={index}><img src='/images/check.png' className="check_icon" alt="✔"></img>{item}</div>
                })
              }
            </div>

            <div className="pricing-popup-footer">
              <div className="pricing-popup-footer-icon"><span>i</span></div>
              <div className="pricing-popup-footer-content">
                <span className='footer-instruction'>{popupPlanPeriod === 'monthly' && popupLastPlan === 'freeTrial' ? "*Discount applicable for the first month" : ""}</span>
                {
                  popupPlanPeriod === 'monthly' ?
                    <span>
                      By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month. By purchasing the premium plan, you agree to our <u><a href="https://prime-sender.com/terms-of-service/" target='_blank'>Terms of Service</a> </u> and <u><a href="https://prime-sender.com/privacy-policy/" target='_blank'>Privacy Policy</a> </u>.
                    </span> :
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

  const countrySwitchObject1 = [
    {
      name: "India",
      countryCode: "in",
      currentCountryName: "india"
    },
    {
      name: "Indonesia",
      countryCode: "id",
      currentCountryName: "indonesia"
    },
    {
      name: "UAE",
      countryCode: "ae",
      currentCountryName: "uae"
    }, {
      name: "Egypt",
      countryCode: "eg",
      currentCountryName: "egypt"
    }, {
      name: "UK",
      countryCode: "gb",
      currentCountryName: "uk"
    }, {
      name: "Saudi Arabia",
      countryCode: "sa",
      currentCountryName: "saudi_arabia"
    }
  ]

  const countrySwitchObject2 = [
    {
      name: "Kuwait",
      countryCode: "kw",
      currentCountryName: "kuwait"
    }, {
      name: "Singapore",
      countryCode: "sg",
      currentCountryName: "singapore"
    }, {
      name: "Israel",
      countryCode: "il",
      currentCountryName: "israel"
    },
    {
      name: "International",
      countryCode: "in",
      currentCountryName: "international"
    },
  ]

  const countrySwitchComponent = () => {
    if (myLocation && myLocation.country_name) {
      return <div className="pricing_country_text">
        <p className="heading">Pricing curated just for you,
          <img src={flagIconSrc} alt="flag" />
          <span className="country_name">{myLocation.country_name}!</span>
        </p>
      </div>
    }
    return <>
      <div className="pricing_country">
        <div className="pricing_country_switch">
          {
            countrySwitchObject1.map((obj, ind) => (
              <div key={ind} className={`country_switch ${currentCountry === obj.currentCountryName && "active_country_class"}`} onClick={() => setCurrentCountry(obj.currentCountryName)}>
                <p className="country_current_switch heading">
                  <img src={`https://flagcdn.com/160x120/${obj.countryCode}.webp`} alt={`${obj.name}`} />
                  {obj.name}
                </p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="pricing_country">
        <div className="pricing_country_switch">
          {
            countrySwitchObject2.map((obj, ind) => {
              if (obj.name === 'International') {
                return <div key={ind} className={`country_switch ${currentCountry === "international" && "active_country_class"}`} onClick={() => setCurrentCountry("international")}>
                  <p className="country_current_switch heading">🌎 International</p>
                </div>
              }
              return <div key={ind} className={`country_switch ${currentCountry === obj.currentCountryName && "active_country_class"}`} onClick={() => setCurrentCountry(obj.currentCountryName)}>
                <p className="country_current_switch heading">
                  <img src={`https://flagcdn.com/160x120/${obj.countryCode}.webp`} alt={`${obj.name}`} />
                  {obj.name}
                </p>
              </div>
            })
          }
        </div>
      </div>
    </>;
  }

  // const currencyConversion = async (amount, planType) => {
  //   if (!amount) return;
  //   try {
  //     const res = await fetch(
  //       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
  //     );
  //     const data = await res.json();
  //     setConvertedCurrency((prevState) => {
  //       return { ...prevState, [planType]: data.usd[currency] * 1.02 * parseFloat(amount) };
  //     })
  //   } catch (error) {
  //     console.error("Error Fetching", error);
  //     const res = await fetch(
  //       `https://latest.currency-api.pages.dev/v1/currencies/usd.json`
  //     );
  //     const data = await res.json();
  //     setConvertedCurrency((prevState) => {
  //       return { ...prevState, [planType]: data.usd[currency] * 1.02 * parseFloat(amount) };
  //     })
  //   }
  // }

  // const getAmount = (price, roundedPrice) => {
  //   return planPeriod === 'monthly' ? price.substring(4) : roundedPrice.substring(4);
  // }

  // const getLocalAmount = (price, roundedPrice) => {
  //   return planPeriod === 'monthly' ? price.substring(1) : roundedPrice.substring(1);
  // }

  // const countryWisePrices = (planType) => {
  //   if (planType === "advance") {
  //     return (
  //       <span style={{ fontSize: "0.75rem", margin: "0 2px" }}>
  //         ( ~ {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3, maximumFractionDigits: 1 }).format(convertedCurrency.advance)}{" "}{currency.toUpperCase()})
  //       </span>
  //     );
  //   }

  //   return (
  //     <span style={{ fontSize: "0.75rem", margin: "0 2px" }}>
  //       ( ~ {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3, maximumFractionDigits: 1 }).format(convertedCurrency.basic)}{" "}{currency.toUpperCase()})
  //     </span>
  //   );
  // }

  // const setInternational = () => {
  //   const isLocalCountry = ['india', 'international', 'kuwait'].includes(currentCountry);

  //   const basicAmount = isLocalCountry ? getLocalAmount(currentPrice.basic, currentPrice.basicRoundedOffPrice)
  //     : getAmount(currentPrice.basic, currentPrice.basicRoundedOffPrice);

  //   const advanceAmount = isLocalCountry ? getLocalAmount(currentPrice.advance, currentPrice.advanceRoundedOffPrice)
  //     : getAmount(currentPrice.advance, currentPrice.advanceRoundedOffPrice);

  //   currencyConversion(basicAmount, "basic");
  //   currencyConversion(advanceAmount, "advance");
  // }


  useEffect(() => {
    const url = window.location.href;
    if(url.includes('multiple-account')) {
      setIsMultipleAccountPage(true);
    }
    setLoading(true);
    getParams();
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then((data) => {
        let country, currency;
        if(!countryCodesPresent.includes(data.country_code)){
          country = 'international';
          currency = "USD";
        }
        else {
          country = countryCodeToName[data.country_code];
          currency= countryCodeToCurrency[data.country_code];
        }
        setMyLocation({
          country_name: data.country_name, pricing_country_name: country, country_code: data.country_code, country_currency : currency
        });
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err)
      });
  }, []);

  useEffect(() => {
    if (myLocation && myLocation.country_code) {
      setFlagIconSrc(`https://flagcdn.com/160x120/${myLocation.country_code.toLowerCase()}.webp`);
    }
    if (myLocation && myLocation.country_name) {
      setCurrentCountry(myLocation.pricing_country_name.toLowerCase());
    }
  }, [myLocation]);

  const pricingCalculatorPeriodHandler = (e)=>{
    e.stopPropagation();
      pricingCalculatorPeriod == 'annually' ? setPricingCalculatorPeriod('monthly') : setPricingCalculatorPeriod('annually')
  }

  const calculateMultAccountPrice = () => {
    let currentPrice = pricing[currentCountry][pricingCalculatorPeriod];
    let price;
    let discountPercentage;
    if (numAccounts == 2) 
      discountPercentage = 0.20;
    else if (numAccounts == 3) 
      discountPercentage = 0.30;
    else if (numAccounts >= 4 && numAccounts <= 9)
      discountPercentage = 0.40;
    else if (numAccounts >= 10 && numAccounts <= 25) 
      discountPercentage = 0.50;
    else if (numAccounts > 25) 
      discountPercentage = 0.60;
    
    if(pricingCalculatorPeriod == 'annually')
      discountPercentage += 0.05;
    if(pricingCalculatorPlan == 'advance')
      discountPercentage += 0.05;
    let currency;
    if (pricingCalculatorPlan == 'advance') {
      currency = currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.advance.substring(0, 3) : currentPrice.advance.substring(0, 1);
      price = currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.advance.substring(4) : currentPrice.advance.substring(1);
    }
    else {
      currency = currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.advance.substring(0, 3) : currentPrice.advance.substring(0, 1);
      price = currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.basic.substring(4) : currentPrice.basic.substring(1);
    }
    let cutPrice;
    if(pricingCalculatorPlan == 'advance'){
      cutPrice = pricing[currentCountry].monthly.advanceSlash;
    } else {
      cutPrice = pricing[currentCountry].monthly.basicSlash;
    }
      
    let discountedPrice = Math.ceil(Number(numAccounts) * (Number(price) - Number(price) * Number(discountPercentage)));
    let totalPrice = discountedPrice;
    if (pricingCalculatorPeriod == 'annually') {
      totalPrice = discountedPrice;
      discountedPrice = Math.ceil(Number(discountedPrice) / 12);
    }

    if(currentCountry!='india' && currentCountry!='international' && currentCountry!='kuwait'){ 
      price = currency+" "+discountedPrice.toString();
      totalPrice = currency+" "+totalPrice;
    }
    else {
      price = currency+discountedPrice.toString()
      totalPrice = currency+totalPrice;
    }

    setMultAccountPrice({ price: price, totalPrice: totalPrice, cutPrice: cutPrice });
    return;
  }

  useEffect(()=>{
    setPriceCalculatorLoader(true);
    const timeout = setTimeout(() => {
      setPriceCalculatorLoader(false);
    }, 1000);
    calculateMultAccountPrice();
    localStorage.setItem('numAccounts', JSON.stringify(numAccounts));
    return () => clearTimeout(timeout);
  }, [myLocation, numAccounts, pricingCalculatorPlan, pricingCalculatorPeriod, currentCountry])

  return (
    <>
      <HelmetHeader
        title={'Pricing | Prime Sender - Best Web Sender Extension'}
        description={'Pricing for Prime Sender, "Explore the future of messaging with our WhatsApp Sender Extension. Maximize productivity, enhance convenience, and simplify your communication tasks. Get started now!"'}
        keywords={'pricing, prime sender pricing, affordable pricing, Simple, cheap, prime sender pricing plans'}
      />
      {showMultipleAccountPopup &&
        <MultipleAccountPopup
          value={numAccounts}
          setValue={setNumAccounts}
          phoneNumbers={phoneNumbers}
          setPhoneNumbers={setPhoneNumbers} 
          setShowMultipleAccountPopup= {setShowMultipleAccountPopup}
          plan_duration = {pricingCalculatorPeriod}
          plan_type = {pricingCalculatorPlan}
          amount = {multAccountPrice}
          country_currency = {myLocation.country_currency}
          multCountry = {currentCountry}
        />
      }
      <div className="pricing_container">
        {promoTextComponent}
        {popupLastPlan && generatePricingPopup()}
        <div className="pricing_main">
          <div className="pricing_top_section">
            <SectionTitle gif="/gifs/pricing-title.gif" title="Simple, Affordable Pricing" />
            <div className="pricing_switches">
              {!loading && countrySwitchComponent()}
              <div className="pricing-slider">
                <Slider onTextHeader="Monthly" offTextHeader="12 Months" setValue={togglePlanPeriod} planPeriod={planPeriod} />
              </div>
            </div>
            {
              planPeriod === 'monthly' &&
              <div className="pricing_discount_text ">
                <div className="text">
                  Early bird offer for new user - <span className="text" style={{ fontWeight: "bold", marginLeft: "4px" }}>Extra 30% OFF. &nbsp; </span>
                </div>
                <div className="discount-img text" >
                  Use code <img src={currentCountry == 'india' || currentCountry == 'indonesia' || currentCountry == 'international' ? "/images/coupon.png" : "/images/first_coupon.png"} alt="Coupon icon" />
                </div>
              </div>
            }
          </div>
          <div className={`pricing_cards_container ${isMultipleAccountPage && 'multiple_acc_pricing_cards_container'}`}>
            {isMultipleAccountPage && <div className="pricing_card_container_overlay"></div>}
            {/* free card */}
            <div className={`pricing_card ${isPricingCardHovered == "free" && 'pricing_card_hover'}`} onMouseEnter={() => setIsPricingCardHovered("free")} onMouseLeave={() => setIsPricingCardHovered("")}>
              <div className="pricing_card_type">
                <img src="/images/signal-free.png" alt="Free plan icon" />
                <p>Free</p>
              </div>
              <div className="pricing_card_price">
                <div className="free_pricing_div">
                  <span className={currentCountry === 'india' ? 'rupee heading' : ' heading'}>
                    {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.basic.toString().substring(0, 4) : currentPrice.basic.toString().substring(0, 1)}</span>
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
                    className="buy_button"
                    onClick={() => handleGaButtonClick("free")}>
                    Try Now
                  </a>
                </button>
              </div>

              <div className="pricing_card_features">
                {
                  FreeCardFeatures.map((item, index) => {
                    return <div className="pricing_card_feature" key={index}>
                      <AiOutlineCheck />
                      <div className="pricing_card_feature_text">
                        {item.name}
                      </div>
                      <span className={`pricing_feature_info_container`} onMouseEnter={() => setFreeCardDetailHover(index)} onMouseLeave={() => setFreeCardDetailHover(-1)}>
                        <IoIosInformationCircleOutline className="feature_info_class" />
                        <div className="navigation_outer_box_down navigation_container" hidden={!(freeCardDetailHover == index)}>
                          <div className="msg-box-down">
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </span>
                    </div>
                  })
                }
              </div>
            </div>
            {/* basic card */}
            <div className={`pricing_card premium_card ${isPricingCardHovered == "basic" && 'pricing_card_hover'}`} onMouseEnter={() => setIsPricingCardHovered("basic")} onMouseLeave={() => setIsPricingCardHovered("")}>
              <div className="pricing_card_type">
                <img src="/images/signal-basic.png" alt="Basic plan icon" />
                <p>Basic</p>
              </div>
              <div className="pricing_card_price">
                <div className="pricing_cut_price">
                  <span className={currentCountry === 'india' ? 'rupee heading' : ' heading'}>
                    {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.basic.substring(0, 4) : currentPrice.basic.substring(0, 1)}
                  </span>
                  {
                    (currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait') ?
                      <span className="heading">{planPeriod === 'monthly' ? currentPrice.basic.substring(4) : currentPrice.basicRoundedOffPrice.substring(4)}</span> :
                      <span className="heading">{planPeriod === 'monthly' ? currentPrice.basic.substring(1) : currentPrice.basicRoundedOffPrice.substring(1)}</span>
                  }
                  <p style={{ display: "inline", whiteSpace: "nowrap" }}> / month</p>
                  <br />
                  <p className={currentCountry === 'india' ? 'rupee' : ''} style={{ display: "inline" }}>
                    {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.basic.substring(0, 4) : currentPrice.basic.substring(0, 1)}
                  </p>
                  <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                    {
                      currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ?
                        planPeriod === 'monthly' ? currentPrice.basicSlash.substring(4) : currentPrice.monthlyBasicSlash.substring(4) :
                        planPeriod === 'monthly' ? currentPrice.basicSlash.substring(1) : currentPrice.monthlyBasicSlash.substring(1)
                    }
                  </p>
                </div>
              </div>
              {planPeriod === 'annually' &&
                <div className="pricing_card_heading">
                  <span>Billed&nbsp;
                    <span className={currentCountry === 'india' ? 'rupee' : ''}>
                      {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.basic.substring(0, 4) : currentPrice.basic.substring(0, 1)}
                    </span>
                    {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.basic.substring(4) : currentPrice.basic.substring(1)} for 12 months' service per user
                  </span>
                </div>
              }
              <div className="pricing_card_button">
                <button onClick={() => handleGaButtonClick("basic")}>
                  {showButton(false, 'basic')}
                </button>
              </div>

              <div className="pricing_card_features">
                <div className="pricing_card_feature">
                  <AiOutlineCheck />
                  <p className="pricing_card_feature_text" style={{ fontWeight: "bold" }}>All Free Features</p>
                </div>
                {
                  basicCardFeatures.map((item, index) => {
                    return <div key={index} className="pricing_card_feature">
                      <AiOutlineCheck />
                      <div className="pricing_card_feature_text">
                        {item.name}
                      </div>
                      <span className={`pricing_feature_info_container`} onMouseEnter={() => setBasicCardDetailHover(index)} onMouseLeave={() => setBasicCardDetailHover(-1)}>
                        <IoIosInformationCircleOutline className="feature_info_class" />
                        <div className="navigation_outer_box_down navigation_container" hidden={!(basicCardDetailHover == index)}>
                          <div className="msg-box-down">
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </span>
                    </div>
                  })
                }
              </div>
            </div>
            {/* advance card */}
            <div className={`pricing_card premium_card ${isPricingCardHovered == "advance" && 'pricing_card_hover'}`} onMouseEnter={() => setIsPricingCardHovered("advance")} onMouseLeave={() => setIsPricingCardHovered("")}>
              <img className="recommended_tag" src="/images/recommended_tag.png" alt="Recommended tag" />
              <div className="pricing_card_type">
                <img src="/images/signal-advance.png" alt="Advance plan icon" />
                <p>Advance</p>
              </div>
              <div className="pricing_card_price">
                <div className="pricing_cut_price">
                  <span className={currentCountry === 'india' ? 'rupee heading' : ' heading'}>
                    {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.advance.substring(0, 4) : currentPrice.advance.substring(0, 1)}
                  </span>
                  {
                    currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ?
                      <span className="heading">{planPeriod === 'monthly' ? currentPrice.advance.substring(4) : currentPrice.advanceRoundedOffPrice.substring(4)}</span> :
                      <span className="heading">{planPeriod === 'monthly' ? currentPrice.advance.substring(1) : currentPrice.advanceRoundedOffPrice.substring(1)}</span>
                  }
                  <p style={{ display: "inline", whiteSpace: "nowrap" }}> / month</p>
                  <br />
                  <p className={currentCountry === 'india' ? 'rupee' : ''} style={{ display: "inline" }}>
                    {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.advance.substring(0, 4) : currentPrice.advance.substring(0, 1)}
                  </p>
                  <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                    {
                      currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ?
                        planPeriod === 'monthly' ? currentPrice.advanceSlash.substring(4) : currentPrice.monthlyAdvanceSlash.substring(4) :
                        planPeriod === 'monthly' ? currentPrice.advanceSlash.substring(1) : currentPrice.monthlyAdvanceSlash.substring(1)
                    }
                  </p>
                </div>
              </div>
              {planPeriod === 'annually' &&
                <div className="pricing_card_heading">
                  <span>Billed&nbsp;
                    <span className={currentCountry === 'india' ? 'rupee' : ''}>
                      {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.advance.substring(0, 4) : currentPrice.advance.substring(0, 1)}
                    </span>
                    {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.advance.substring(4) : currentPrice.advance.substring(1)} for 12 months' service per user 
                  </span>
                </div>
              }
              <div className="pricing_card_button">
                <button onClick={() => handleGaButtonClick("advance")}>
                  {showButton(false, 'advance')}
                </button>
              </div>

              <div className="pricing_card_features">
                <div className="pricing_card_feature">
                  <AiOutlineCheck />
                  <p className="pricing_card_feature_text" style={{ fontWeight: "bold" }}>All Basic Features</p>
                </div>
                {
                  advanceCardFeatures.map((item, index) => {
                    return <div key={index} className="pricing_card_feature">
                      <AiOutlineCheck />
                      <div className="pricing_card_feature_text">
                        {item.name}
                      </div>
                      <span className={`pricing_feature_info_container`} onMouseEnter={() => setAdvanceCardDetailHover(index)} onMouseLeave={() => setAdvanceCardDetailHover(-1)}>
                        <IoIosInformationCircleOutline className="feature_info_class" />
                        <div className="navigation_outer_box_down navigation_container advance_navigation_box" hidden={!(advanceCardDetailHover == index)}>
                          <div className="msg-box-down">
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </span>
                    </div>
                  })
                }
              </div>
            </div>
            <div className={`pricing_card multiple_user_card premium_card_purple ${isMultipleAccountPage && 'multiple_card_hover_style'} ${isPricingCardHovered == "multiple" && !isMultipleAccountPage && "pricing_card_hover"}`} onMouseEnter={() => setIsPricingCardHovered("multiple")} onMouseLeave={() => setIsPricingCardHovered("")}>
              <div className="multiple_card_type">
                <p>Need multiple accounts?</p>
              </div>

              <div className="pricing_card_heading">
                <div>
                Purchase premium plan for multiple users for your organization at a <span className="text-bold text-royal">discounted rate upto 70%</span>
                </div>
                {/* {
                  planPeriod === 'annually' && (
                    <div style={{visibility:'hidden'}}>
                      This is dummy text
                    </div>
                  )
                } */}
              </div>
              <div className="pricing_calculator_section">
                {/* heading section */}
                <div className="pricing_calculator_heading">
                  <div className="left_line"></div>
                  <div className="pricing_calculator_text">Pricing Calculator</div>
                  <div className="right_line"></div>
                </div>
                {/* basic/advance switch */}
                <div className="pricing_country background-royal">
                  <div className="pricing_country_switch">
                    <div className={`country_switch ${pricingCalculatorPlan == 'basic' && 'active_country_class'}`} onClick={()=> setPricingCalculatorPlan("basic")}>
                      <p className="country_current_switch plan_switch">
                        Basic
                      </p>
                    </div>
                    <div className={`country_switch ${pricingCalculatorPlan == 'advance' && 'active_country_class'}`} onClick={()=> setPricingCalculatorPlan("advance")}>
                      <p className="country_current_switch plan_switch">
                        Advance
                      </p>
                    </div>
                  </div>
                </div>
                {/* slider plan period */}
                <div className="pricing-slider pricing_calculator_slider">
                  <div className="slider">
                    <span className={`slider-text ${pricingCalculatorPeriod == 'monthly' ? 'text-royal' : 'text-gray'}`}> Monthly</span>
                    <label className="switch-container" onChange={(e)=>pricingCalculatorPeriodHandler(e)}>
                      <input type="checkbox" defaultChecked />
                      <span className="switch background-royal" />
                    </label>
                    <span className={`slider-text ${pricingCalculatorPeriod !='monthly' ? 'text-royal' : 'text-gray'}`}>12 Months</span>
                  </div> 
                </div>
                {/* number of accounts */}
                <div className="num_accounts_section">
                  <p className="num_accounts_title text-gray">Number of accounts:</p>
                  <input className="num_accounts_input" type="number" value={numAccounts} onChange={(e) => {
                    setNumAccounts(e.target.value)
                    if(e.target.value>1)
                      setPhoneNumbers([...Array(Number(e.target.value)).fill('')]);
                    else 
                      setPhoneNumbers(['', '']);
                  }} />
                </div>
              </div>
              {/* price section */}
              {
              priceCalculatorLoader ? 
              <div style={{width: "100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Oval
                visible={true}
                height="50"
                width="50"
                color="#7829f9"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              /></div> : 
                numAccounts > 1 ?
                  (
                    <>
                      <div className="pricing_card_price">
                        <div className="pricing_cut_price">
                          <span style={{ "fontWeight": "bold", "marginRight": "5px" }} className="text-royal">~</span>
                          <span className={`${currentCountry === 'india' ? 'rupee heading' : ' heading'} text-royal`}>
                            {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? multAccountPrice.price.substring(0, 4) : multAccountPrice.price.substring(0, 1)}
                          </span>
                          {
                            (currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait') ?
                              <span className="heading text-royal">{Math.ceil(multAccountPrice.price.substring(4)/numAccounts)}</span> :
                              <span className="heading text-royal">{Math.round(multAccountPrice.price.substring(1)/numAccounts)}</span>
                          }
                          <p style={{ display: "inline", whiteSpace: "nowrap" }}> <span className="text-royal">per user</span> / month</p>
                          <br />
                          <p className={currentCountry === 'india' ? 'rupee' : ''} style={{ display: "inline", marginLeft: "13px" }}>
                            {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? currentPrice.basic.substring(0, 4) : currentPrice.basic.substring(0, 1)}
                          </p>
                          <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                            {
                              currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ?
                              multAccountPrice.cutPrice.substring(4) : multAccountPrice.cutPrice.substring(1)
                            }
                          </p>
                        </div>
                      </div>
                      {
                        pricingCalculatorPeriod == 'annually' &&
                        <div className="pricing_card_heading">
                          <span>Billed&nbsp;
                            <span className={currentCountry === 'india' ? 'rupee' : ''}>
                              {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? multAccountPrice.totalPrice.substring(0, 4) : multAccountPrice.totalPrice.substring(0, 1)}
                            </span>
                            {currentCountry !== 'india' && currentCountry !== 'international' && currentCountry !== 'kuwait' ? Math.round(multAccountPrice.totalPrice.substring(4)/numAccounts) : Math.round(multAccountPrice.totalPrice.substring(1)/numAccounts)} for 12 months' service per user
                          </span>
                        </div>
                      }
                    </>
                  ) : <div className="mult_error_message">
                    Number of accounts cannot be less than 2
                  </div>
              }
              <div className="pricing_card_button background-royal">
                <button onClick={() => handleGaButtonClick("multiple_user")}>
                  <a target="_blank" className="buy_button">Buy</a>
                </button>
              </div>
              <div className="pricing_calculator_support">
                <p>Need more support? <a href={whatsappRedirectUrl} target="_blank">Click here</a></p>
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
                    <th>Advance</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingFeatures.map((feature, index) => (
                    <tr key={index}>
                      <th>
                        {feature.name}
                        <span className={`pricing_feature_info_container`} onMouseEnter={() => setFeatureDetailHover(index)} onMouseLeave={() => setFeatureDetailHover(-1)}>
                          <IoIosInformationCircleOutline className="feature_info_class" />
                          <div className="navigation_outer_box_down navigation_container" hidden={!(featureDetailHover == index)}>
                            <div className="msg-box-down">
                              <p>
                                {feature.description}
                              </p>
                              {/* <div className="arrow"></div> */}
                            </div>
                          </div>
                        </span>
                      </th>
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
      </div >
    </>
  );
};

export default Pricing;