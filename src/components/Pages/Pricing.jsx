import { useState, useEffect, useRef } from "react";
import "../../styles/PricingPage/pricing.css";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import pricingFeatures from "../Data/pricing-page-features-list"
import Slider from "../common/Slider";
import SectionTitle from "../common/SectionTitle";
import HelmetHeader from "../common/HelmetHeader";
import ReactGA from "react-ga4";
import { promoText } from "../Data/seo-data";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FreeCardFeatures, advanceCardFeatures, basicCardFeatures } from "../Data/pricing-page-cards-list";
import {Oval} from "react-loader-spinner";
import MultipleAccountPopup from "../sections/MultipleAccountPopup";
import { countryCodeToCurrency, countryCodeToName, countryCodesPresent, countryNameToCode, countryCodeToDialCode, countrySwitchObject1, countrySwitchObject2, pricing_data, pricing_links, pricing_popup_premium_features, pricing_popup_trial_features, notification_country_data, countryPresent } from "../Data/pricing-data";
import NotificationBox from "../common/NotificationBox";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useTranslation, Trans } from 'react-i18next';

const UPIPopup = ({plan_type, price, currency, monthly_price, setShowUPIPopup}) => {
  const { t } = useTranslation();
  const overlayRef = useRef(null);
  let whatsappRedirectUrl = "https://web.whatsapp.com/send?phone=917058067789&text="
  let whatsappText = plan_type == 'Basic'?'Hi, I want to buy Basic Annual via UPI':'Hi, I want to buy Advance Annual via UPI';
  whatsappRedirectUrl+=encodeURIComponent(whatsappText);
  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.addEventListener('click', () => {
        setShowUPIPopup(false);
      })
    }

    return () => {
      if (overlayRef.current) {
        overlayRef.current.removeEventListener('click', () => {
          setShowUPIPopup(false);
        })
      }
    }
  }, [])
  return <>
    <div className="pricing-popup-overlay" ref={overlayRef}></div>
    <div className="upi_popoup_container">
      <div className="upi_popup_title">
        <div className="ui_popup_title_img">
          <img src="/images/logo-large.png" alt="" />
        </div>
        <p className="ui_popup_title_title">{plan_type=='Advance'?'Advance':'Basic'} Annual</p>
      </div>
      <div className="upi_popup_price rupee">
        <span className="upi_annual_price"><span className="rupee">{currency}</span>{price}</span>
        <span className="upi_monthly_price">(<span className="rupee">{currency}</span>{monthly_price}/month)</span>
        <br />
        <span className="upi_billed_text">{t('pricing.billedFor12Months')}</span>
        <a className="upi_buy_button" href={whatsappRedirectUrl} target="_blank" rel="noreferrer">
          Buy {plan_type} Annual
        </a>
        <span className="upi_last_text">{t('pricing.upiTransferOnlyAvailableForAnnualPlans')}</span>
      </div>
    </div>
  </>
}

// We define these helpers inside the component scope so they can safely use the `t` function
// returned by the `useTranslation` hook, avoiding rule-of-hooks violations.





const DiscountPercentageBox = ({discountPercentage, boxStyle}) => {
    const { t } = useTranslation();
    return <div className="discount_percentage_box shimmer" style={boxStyle}>
        <img src="/images/yellow-stars.png"/>
        <p>{t('pricing.save')} {discountPercentage}%</p>
        </div>
}

const Pricing = () => {
  const { t } = useTranslation();
  
  // Helper function to get feature translation based on feature name
  const getFeatureTranslation = (featureName) => {
    // Map feature names to their translation keys
    const featureMap = {
      'Unlimited Broadcasting': 'pricing.features.unlimitedBroadcasting.name',
      'Attachment': 'pricing.features.attachment.name',
      'Message Customization': 'pricing.features.customization.name',
      'Chat Support': 'pricing.features.chatSupport.name',
      'Caption': 'pricing.features.caption.name',
      'Save Campaign Details': 'pricing.features.saveCampaignDetails.name',
      'Save Message Template': 'pricing.features.saveMessageTemplate.name',
      'Detailed Delivery Report': 'pricing.features.detailedDeliveryReport.name',
      'Translate Conversation': 'pricing.features.translateConversation.name',
      'Priority Support': 'pricing.features.prioritySupport.name',
      'No minimum time gap': 'pricing.features.noMinimumTimeGap.name',
      'Random time gap': 'pricing.features.randomTimeGap.name',
      'Batching': 'pricing.features.batching.name',
      'Stop Campaign': 'pricing.features.stopCampaign.name',
      'Group Contacts Export': 'pricing.features.groupContactsExport.name',
      'Quick Replies': 'pricing.features.quickReplies.name',
      'Pause Campaign': 'pricing.features.pauseCampaign.name',
      'Multiple Attachments': 'pricing.features.multipleAttachments.name',
      'Schedule': 'pricing.features.schedule.name',
      'Business Chat Link': 'pricing.features.businessChatLink.name',
      'Export Unsaved Chat Contacts': 'pricing.features.exportUnsavedChatContacts.name'
    };
    
    // Return translation if available, otherwise return the original name
    return featureMap[featureName] ? t(featureMap[featureName]) : featureName;
  };
  
  // Helper function to get feature description translation based on feature name
  const getFeatureDescriptionTranslation = (featureName) => {
    // Map feature names to their description translation keys
    const featureDescMap = {
      'Unlimited Broadcasting': 'pricing.features.unlimitedBroadcasting.description',
      'Attachment': 'pricing.features.attachment.description',
      'Message Customization': 'pricing.features.customization.description',
      'Chat Support': 'pricing.features.chatSupport.description',
      'Caption': 'pricing.features.caption.description',
      'Save Campaign Details': 'pricing.features.saveCampaignDetails.description',
      'Save Message Template': 'pricing.features.saveMessageTemplate.description',
      'Detailed Delivery Report': 'pricing.features.detailedDeliveryReport.description',
      'Translate Conversation': 'pricing.features.translateConversation.description',
      'Priority Support': 'pricing.features.prioritySupport.description',
      'No minimum time gap': 'pricing.features.noMinimumTimeGap.description',
      'Random time gap': 'pricing.features.randomTimeGap.description',
      'Batching': 'pricing.features.batching.description',
      'Stop Campaign': 'pricing.features.stopCampaign.description',
      'Group Contacts Export': 'pricing.features.groupContactsExport.description',
      'Quick Replies': 'pricing.features.quickReplies.description',
      'Pause Campaign': 'pricing.features.pauseCampaign.description',
      'Multiple Attachments': 'pricing.features.multipleAttachments.description',
      'Schedule': 'pricing.features.schedule.description',
      'Business Chat Link': 'pricing.features.businessChatLink.description',
      'Export Unsaved Chat Contacts': 'pricing.features.exportUnsavedChatContacts.description'
    };
    
    // Return translation if available, otherwise return the original description
    const feature = pricingFeatures.find(f => f.name === featureName);
    return featureDescMap[featureName] ? t(featureDescMap[featureName]) : (feature ? feature.description : '');
  };
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => {
      return <span key={index} className='white_promo_text pro'>{text}</span>
    })
  }

  const promoTextComponent = <div className='promo_text_container'>
    {promoTextComponentGenerator()}
  </div>
  const [pricing, setPricing] = useState(pricing_data);
  const [planPeriod, setPlanPeriod] = useState("annually");
  const [currentCountry, setCurrentCountry] = useState("international");
  const [popupPlanPeriod, setPopupPlanPeriod] = useState('annually');
  // const [currency, setCurrency] = useState(null)
  // const [convertedCurrency, setConvertedCurrency] = useState({ basic: 0, advance: 0 })
  const [popupLastPlan, setPopupLastPlan] = useState(null);
  const [popupCountry, setPopupCountry] = useState(null);
  const [popupPlan, setPopupPlan] = useState(null);
  const [showPopupMonthly, setShowPopupMonthly] = useState(true);
  const [myLocation, setMyLocation] = useState({
        country_name: "International",
        pricing_country_name: "international",
        country_code: "US",
        country_currency: "USD" ,
        countryCallingCode:'+1',
        isSuccess: false,
  });
  const [flagIconSrc, setFlagIconSrc] = useState('');
  const [featureDetailHover, setFeatureDetailHover] = useState(-1);
  const [freeCardDetailHover, setFreeCardDetailHover] = useState(-1);
  const [basicCardDetailHover, setBasicCardDetailHover] = useState(-1);
  const [advanceCardDetailHover, setAdvanceCardDetailHover] = useState(-1);
  const [pricingCalculatorPlan, setPricingCalculatorPlan] = useState("advance");
  const [pricingCalculatorPeriod, setPricingCalculatorPeriod] = useState("annually");
  const [numAccounts, setNumAccounts] = useState(() => {
    const phoneNumbers = JSON.parse(localStorage.getItem('phoneNumbers')) || [];
    return phoneNumbers.length || 10;
  });
  const [multAccountPrice, setMultAccountPrice] = useState({ currency:'', price: '', totalPrice: '', cutPrice: ''});
  const [priceCalculatorLoader, setPriceCalculatorLoader] = useState(false);
  const [showMultipleAccountPopup, setShowMultipleAccountPopup] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState(JSON.parse(localStorage.getItem("phoneNumbers"))  || ['', '']);
  const [isMultipleAccountPage, setIsMultipleAccountPage] = useState(false);
  const [isPricingCardHovered, setIsPricingCardHovered] = useState("");
  const [showUPIPopup, setShowUPIPopup] = useState({ show: false, type: 'Basic', price: '', monthly_price: '', currency: '' });
  const [showNotification, setShowNotification] = useState(false);
  const [isShowingNotification, setIsShowingNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({ prevIndex: -1, city: "Delhi", country: "India", time: "16", currency: "INR", prince:"699"});
    
  const scrollToPricingPopupRef = useRef(null);
  
  const getParams = () => {
    const urlParams = typeof window !== 'undefined' ? window.location.search : '';
    const params = new URLSearchParams(urlParams);
    if (params.size > 0) {
      const lastPlan = params.get('lastPlan');
      const country = params.get('country');
      const currentPlan = params.get('currentPlan')
      const hideMonthly = params.get('hideMonthly') || "false";

      setPopupCountry(country)
      setPopupLastPlan(lastPlan)
      setPopupPlan(currentPlan)
      setShowPopupMonthly(hideMonthly=="false"?true:false)

      if (lastPlan || country || currentPlan) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };

  const whatsappRedirectUrl = "https://web.whatsapp.com/send?phone=917058067789&text=Hi%2C%20I%20would%20like%20to%20purchase%20premium%20for%20multiple%20users."

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

   // links for the button to buy
  function getButtonLink(country, duration, type) {
    let buttonLink = 'https://buy.stripe.com/'
    buttonLink += pricing_links[country][duration][type]
    return buttonLink;
  }

  function showButton(isPopup, planType) {
    const buyLabel = t('pricing.buy');
    const subscribeLabel = t('pricing.subscribe');
    const button_link = !isPopup ?
      planType === 'basic' ? getButtonLink(currentCountry, planPeriod, 'basic') : getButtonLink(currentCountry, planPeriod, 'advance') :
      popupPlan === 'basic' ? getButtonLink(popupCountry, popupPlanPeriod, 'basic') : getButtonLink(popupCountry, popupPlanPeriod, 'advance');
    const button_text = !isPopup ?
      (planPeriod === 'monthly' ? subscribeLabel : planType === 'basic' ? `${buyLabel} Basic` : `${buyLabel} Advance`) :
      (popupPlanPeriod === 'annually' ? buyLabel : subscribeLabel)
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
  currentPrice.currency_symbol = pricing[currentCountry].currency_symbol;

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
        {

            showPopupMonthly &&
          <div className='pricing-recommendation-msg'>
              <DiscountPercentageBox discountPercentage={40} boxStyle={{top:'-15px', right: '50px'}} />
          </div>
          }
          <div className={`pricing-popup-slider ${!showPopupMonthly?"marginTop30":""}`}>
            {
              popupPlan === 'basic' ?
                <Slider onTextValue="Monthly" offTextValue="Annual" onTextHeader="Basic" offTextHeader="Basic" setValue={togglePopupPlanPeriod} showPopupMonthly={showPopupMonthly} planPeriod={popupPlanPeriod}  /> :
                <Slider onTextValue="Monthly" offTextValue="Annual" onTextHeader="Advance" offTextHeader="Advance" setValue={togglePopupPlanPeriod} showPopupMonthly={showPopupMonthly} planPeriod={popupPlanPeriod} />
            }
          </div>
          <div className={`pricing-popup-content ${!showPopupMonthly?"hideMonthlyPopupPriceClass":""}`}>
            {
                showPopupMonthly &&
                <div className={`monthly-price ${popupPlanPeriod=='monthly'?'':'black_color_faded'}`}>
                    {
                        <div>
                            <div className={`${popupLastPlan==='freeTrial'?'pricing-popup-slash-price':''} display_flex`}>
                                <span className={popupCountry=='india'?"rupee":""}>
                                    {pricing[popupCountry].currency_symbol}
                                </span>
                                <span className="font30">
                                    {popupPlan === 'basic' ? pricing[popupCountry].monthly.basic_plan.final : pricing[popupCountry].monthly.advance_plan.final}
                                </span>
                            </div>
                            <div className="font14">{t('pricing.userPerMonthBilledAnnually')}</div>
                        </div>
                    }
                  {popupLastPlan === 'freeTrial' && (
                    <span className="pricing-popup-offer-price">
                      {
                        <span>
                          {popupPlan === 'basic' ? pricing[popupCountry].monthly.basic_plan.discounted : pricing[popupCountry].monthly.advance_plan.discounted}
                        </span>
                      }
                      *{t('pricing.userPerMonth')}
                    </span>
                  )}
                </div>
            }
            {
              popupCountry !== 'india' && popupCountry !== 'international' && popupCountry !== 'kuwait' ?
                <div className={`${showPopupMonthly?"annual-price-indonesia":"hideMonthlyPopupAnnualPriceClass"} ${popupPlanPeriod=='monthly'?'primary_color_faded':''}`} >
                <div>
                    <div className="display_flex">
                      <span className={popupCountry === 'india' ? 'rupee' : ''}>
                        {pricing[popupCountry].currency_symbol}
                      </span>
                      <span className="font30">
                        {popupPlan === 'basic' ? pricing[popupCountry].annually.basic_plan.monthly_final : pricing[popupCountry].annually.advance_plan.monthly_final}
                      </span>
                    </div>
                    <div className="font14">/user/month billed annually</div>
                </div>
                </div> :
                <div className={`${showPopupMonthly?"annual-price":"hideMonthlyPopupAnnualPriceClass"} ${popupPlanPeriod=='monthly'?'primary_color_faded':''}`} >
                  <div>
                    <div className="display_flex">
                        <span className={popupCountry === 'india' ? 'rupee' : ''}>
                            {pricing[popupCountry].currency_symbol}
                        </span>
                        <span className="font30">
                            {popupPlan === 'basic' ? pricing[popupCountry].annually.basic_plan.monthly_final : pricing[popupCountry].annually.advance_plan.monthly_final}
                        </span>
                    </div>
                    <div className="font14">/user/month billed annually</div>
                  </div>
                </div>
            }
          </div>
          <div className="pricing-popup-btn">
            <button onClick={handlePopupGaButtonClick}>{showButton(true, popupPlan)}</button>
            <span className="font20 marginTop10">or</span>
            <a target="_blank" href={'/pricing/multiple-account'} rel="noreferrer" className="multiple-accounts-btn"><img src="/images/mult_user.png"/><span>{t('pricing.buyMultipleUsers')}</span></a>
          </div>
          <div className="pricing-popup-bottom">
            <div className="pricing-popup-features">
              {
                pricing_popup_premium_features.map((item, index) => {
                  return <div className="feature-item" key={index}><img src={`/images/${popupPlan=="basic"?"circle_cross":"check"}.png`} className="check_icon" alt="✔"></img>{item} <span className="text-bold">&nbsp;(Advance)</span></div>
                })
              }
              {
                pricing_popup_trial_features.map((item, index) => {
                  return <div className="feature-item" key={index}><img src='/images/check.png' className="check_icon" alt="✔"></img>{item}</div>
                })
              }
            </div>

            <div className="pricing-popup-footer">
              <div className="pricing-popup-footer-icon"><span>i</span></div>
              <div className="pricing-popup-footer-content" style={{fontSize:popupPlanPeriod === 'monthly' && popupLastPlan === 'freeTrial' ?  "10px" : "11px"}}>
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

    const handleCountrySwitchClick = (val) => {
        setCurrentCountry(val);
        setMyLocation({
            country_name: val[0].toUpperCase() + val.slice(1),
            pricing_country_name: val,
            country_code: countryNameToCode[val],
            country_currency: countryCodeToCurrency[countryNameToCode[val]],
            countryCallingCode: countryCodeToDialCode[countryNameToCode[val]],
            isSuccess: false,
        });

    }

  const countrySwitchComponent = () => {
    return <div className="pricing_country_text">
        <p className="heading">
            Pricing curated just for you
            {(myLocation && myLocation.isSuccess) 
                ? <><span>,</span><img src={flagIconSrc} alt="flag" /><span className="country_name">{myLocation.country_name}!</span></> 
                : '!'
            }
        </p>
      </div>
  }

  const getWhatsappLink = (type, plan_type) => {
    let whatsappRedirectUrl = "https://web.whatsapp.com/send?phone=917058067789&text="
    let whatsappText = '';
    if (type == 'bank') {
      whatsappText = plan_type == 'Basic' ? 'Hi, I want to buy Basic Annual via Bank Transfer or PayPal' : 'Hi, I want to buy Advance Annual via Bank Transfer or PayPal';
      whatsappRedirectUrl += encodeURIComponent(whatsappText);
    }
    return whatsappRedirectUrl;
  }

    function checkIfMultipleAccountPage() {
        const url = window.location.href;
        const params = new URLSearchParams(window.location.search);
        const numberOfAccounts = params.get('numAccounts');
        if(numberOfAccounts!=null && numberOfAccounts!=undefined && numberOfAccounts=='25'){
          setNumAccounts(26);
          localStorage.setItem('numAccounts', JSON.stringify(26));
        }
        if (url.includes('multiple-account')) {
            setIsMultipleAccountPage(true);
            setTimeout(() => {
                if (scrollToPricingPopupRef.current) {
                  const element = scrollToPricingPopupRef.current;
                  const offset = 400;
                  const topPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
                  window.scrollTo({
                      top: topPosition,
                      behavior: 'smooth'
                  });
                } 
            }, 10);
        }

    }

    function getUserLocation() {
        fetch('https://ipapi.co/json/')
            .then(res => {
                if (!res.ok) throw new Error('Primary API failed');
                return res.json();
            })
            .then((data) => handleLocationResponse(data.country_code, data.country_name))
            .catch((err) => {
                fetch('https://get.geojs.io/v1/ip/geo.json')
                    .then(res => {
                        if (!res.ok) throw new Error('Fallback API failed');
                        return res.json();
                    })
                    .then((data) => handleLocationResponse(data.country_code, data.country))
                    .catch(fallbackErr => {
                        console.error('Both APIs failed.', fallbackErr);
                    });
            });
    }

    function handleLocationResponse(country_code, country_name) {
        let country, currency, dialCode;
        if (!countryCodesPresent.includes(country_code)) {
            country = "international";
            currency = "USD";
            dialCode = "+1";
        } else {
            country = countryCodeToName[country_code];
            currency = countryCodeToCurrency[country_code];
            dialCode = countryCodeToDialCode[country_code];
        }

        setMyLocation({
            country_name: country_name,
            pricing_country_name: country,
            country_code: country_code,
            country_currency: currency,
            countryCallingCode: dialCode,
            isSuccess: true,
        });
    }

    function startTour(){
      const urlParams = new URLSearchParams(window.location.search);
      const isTour = urlParams.get('isTour') === 'true';
      const accountObj = {
        showProgress: true,
        popoverClass: "driverjs-theme",
        steps: [
          {
            element: ".pricing_country.background-royal",
            popover: {
              title: "Choose Plan Type",
              description:
                "Please select the desired plan type from the available options.",
            },
          },
          {
            element: ".pricing-slider.pricing_calculator_slider",
            popover: {
              title: "Choose Plan Duration",
              description:
                "Select whether you prefer monthly or annual billing for the chosen plan.",
            },
          },
          {
            element: ".num_accounts_section",
            popover: {
              title: "Specify Number of Accounts",
              description:
                "Enter the number of accounts you'd like to purchase.",
            },
          },
          {
            element: ".pricing_card_button.background-royal",
            popover: {
              title: "Proceed to Purchase",
              description:
                "Once all selections are made, click 'Buy' to proceed."
            },
          }
        ],
      };
      if(isTour){
        window.scrollTo({
          top: "1px",
          behavior: 'smooth'
        });
        driver(accountObj).drive()
      }
    }

    function getPricingDataFromDatabase() {
        fetch('https://hpm53jwusnnb4vmbpmyzjppecy0omfxw.lambda-url.ap-south-1.on.aws/?operation=get-all-config-data').
            then(res => res.json()).
            then((data) => {
                data.data.map((item) => {
                    if (item.name == 'PRICING') {
                        setPricing(item.data);
                    }
                })
            });
    }

    function changeNotificationData() {
        let current_country_data = notification_country_data[myLocation.pricing_country_name.toLowerCase()]?.data;
        if(!current_country_data || current_country_data.size <= 3){
            current_country_data = Object.values(notification_country_data).flatMap(country => country.data);
        }
        let dataLength = current_country_data.length;
        let newIndex = Math.floor(Math.random()*dataLength);
        let prevIndex = notificationData.prevIndex;
        if(prevIndex == newIndex) {
            if(newIndex+1<dataLength)
                newIndex++;
            else
                newIndex--;
        }
        let hours = Math.floor(Math.random()*19+5);
        let notification_pricing_country = current_country_data[newIndex].country_code_name.toLowerCase();
        if(countryPresent.indexOf(notification_pricing_country) == -1)
            notification_pricing_country = 'international';

        let currency = pricing[notification_pricing_country].currency_symbol;
        let price = pricing[notification_pricing_country].annually.advance_plan.final; 
        setNotificationData({
            prevIndex: newIndex,
            city: current_country_data[newIndex].city,
            country: current_country_data[newIndex].country,
            time : hours,
            currency: currency, 
            price: price,
        });
    }

    function changeShowNotification() {
        changeNotificationData();
        setShowNotification(true);
        setIsShowingNotification(true);
        setTimeout(() => {
            setIsShowingNotification(false);
            setTimeout(() => {setShowNotification(false);}, 500);
        }, 10000);
    }

    function handleShowNotification() {
        const intervalId = setInterval(() => {
            changeShowNotification();
        }, 20000);

        return intervalId;
    }

    useEffect(() => {
        checkIfMultipleAccountPage();
        getParams();
        getUserLocation();
        getPricingDataFromDatabase();
        startTour();
    }, [])

    useEffect(() => {
        if (myLocation && myLocation.country_code) {
            setFlagIconSrc(`https://flagcdn.com/160x120/${myLocation.country_code.toLowerCase()}.webp`);
        }
        if (myLocation && myLocation.country_name) {
            setCurrentCountry(myLocation.pricing_country_name.toLowerCase());
        }
        setTimeout(() => {
            changeShowNotification();
        }, 5000);
        let intervalId = handleShowNotification();

        return () =>{ 
            if(intervalId)
                clearInterval(intervalId);
        }
    }, [myLocation]);

  const pricingCalculatorPeriodHandler = (e)=>{
    e.stopPropagation();
      pricingCalculatorPeriod == 'annually' ? setPricingCalculatorPeriod('monthly') : setPricingCalculatorPeriod('annually')
  }

  const calculateMultAccountPrice = () => {

    let multCurrentPrice = pricing[currentCountry][pricingCalculatorPeriod][pricingCalculatorPlan + '_plan'];
    let price = multCurrentPrice.final;
    let currency = pricing[currentCountry].currency_symbol;
    let cutPrice = pricingCalculatorPeriod=='annually' ? multCurrentPrice.monthly_original : multCurrentPrice.original;

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
      
    let discountedPrice = Math.ceil(Number(numAccounts) * (Number(price) - Number(price) * Number(discountPercentage)));
    let totalPrice = discountedPrice;
    if (pricingCalculatorPeriod == 'annually') {
      totalPrice = discountedPrice;
      discountedPrice = Math.ceil(Number(discountedPrice) / 12);
    }

      setMultAccountPrice({ currency:currency, price: discountedPrice, totalPrice: totalPrice, cutPrice: cutPrice });
  }

    const isCountryWithCurrency = () => {
        return currentCountry == 'india' || currentCountry == 'kuwait' || currentCountry == 'international';
    }

  useEffect(()=>{
    setPriceCalculatorLoader(true);
    const timeout = setTimeout(() => {
      setPriceCalculatorLoader(false);
    }, 1000);
    calculateMultAccountPrice();
    localStorage.setItem('numAccounts', JSON.stringify(numAccounts));
    return () => clearTimeout(timeout);
  }, [myLocation, numAccounts, pricingCalculatorPlan, pricingCalculatorPeriod, currentCountry, pricing])

  return (
    <>
      <HelmetHeader
        title={'Pricing | Prime Sender - Free AI Web Message Sender'}
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
          myLocation = {myLocation}
          country_currency = {myLocation.country_currency}
          multCountry = {currentCountry}
          currentCountry={myLocation.countryCallingCode}
        />
      }
      {showUPIPopup.show && 
        <UPIPopup 
          plan_type={showUPIPopup.type} 
          price={showUPIPopup.price} 
          monthly_price={showUPIPopup.monthly_price} 
          currency={showUPIPopup.currency} 
          setShowUPIPopup={setShowUPIPopup}
        />}
      {
          showNotification && <NotificationBox notificationData={notificationData} isShowingNotification={isShowingNotification} setShowNotification={setShowNotification} setIsShowingNotification={setIsShowingNotification} />
      }
      <div className="pricing_container">
        {promoTextComponent}
        {popupLastPlan && generatePricingPopup()}
        <div className="pricing_main">
          <div className="pricing_top_section">
            <SectionTitle gif="/gifs/pricing-title.gif" title={t('pricing.mainTitle')} />
            <div className="pricing_switches">
              <div className="pricing_country_text">
                <p className="heading">
                  {t('pricing.curatedForYou')}
                  {(myLocation && myLocation.isSuccess) &&
                    <>
                      <span>,</span>
                      <img src={flagIconSrc} alt="flag" />
                      <span className="country_name">{myLocation.country_name}</span>
                    </>   
                  }
                  !
                </p>
              </div>
              <div className={`pricing-slider top-pricing-slider`}>
                <div className={`pricing_country ${isMultipleAccountPage?"display_none":""}`}>
                  <div className="pricing_country_switch">
                    <div className={`country_switch ${planPeriod == 'monthly' && 'active_country_class'}`} onClick={()=> setPlanPeriod("monthly")}>
                      <p className="country_current_switch plan_switch">
                        {t('pricing.monthly')}
                      </p>
                    </div>
                    <div className={`country_switch ${planPeriod == 'annually' && 'active_country_class'}`} onClick={()=> setPlanPeriod("annually")} style={{position:"relative"}}>
                        <DiscountPercentageBox discountPercentage={40} />
                      <p className="country_current_switch plan_switch">
                      {t('pricing.12Months')}
                      </p>
                    </div>
                    <div className={`country_switch ${planPeriod == 'biannually' && 'active_country_class'}`} onClick={()=> setPlanPeriod("biannually")} style={{position:"relative"}}>
                        <DiscountPercentageBox discountPercentage={60} />
                      <p className="country_current_switch plan_switch">
                      {t('pricing.24Months')}
                      </p>
                    </div>
                  </div>
                </div>
            {
                planPeriod != "monthly" && 
                <div className="slider_discount_text">
                    <img src="/images/yellow-stars.png"/>
                    <p>
                      <Trans
                        i18nKey="pricing.purchasePlanToSave"
                        values={{
                          months: planPeriod == "annually" ? 12 : 24,
                          percentage: planPeriod == "annually" ? "40%" : "60%"
                        }}
                        components={{
                          bold: <span className="text-royal italic_text" />
                        }}
                      />
                    </p>
                </div>
            }
              </div>
            </div>
            {
              planPeriod === 'monthly' &&
              <div className="pricing_discount_text ">
                <div className="text">
                  {t('pricing.earlyBird.prefix')} <span className="text" style={{ fontWeight: "bold", marginLeft: "4px" }}>{t('pricing.earlyBird.bold')}&nbsp;</span>
                </div>
                <div className="discount-img text" >
                  {t('pricing.earlyBird.useCode')} <img src={currentCountry == 'india' || currentCountry == 'indonesia' || currentCountry == 'international' ? "/images/coupon.png" : "/images/first_coupon.png"} alt="Coupon icon" />
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
                <div className="pricing_card_price_div">
                <span className="display_flex_align_start">
                  <span className={`${currentCountry === 'india' ? 'rupee font15' : ' font15'} ${isCountryWithCurrency()?"marginTop3":""}`}>{currentPrice.currency_symbol}</span>
                  {<span className="pricing_card_price_text">{0}</span>}
                </span>
                </div>
              </div>
              <div className="pricing_card_heading">
                {planPeriod !== 'monthly' ? t('pricing.userPerMonthBilledAnnually') : t('pricing.userPerMonth')}
              </div>
              <div className="pricing_card_button">
                <button>
                  <a
                    href='https://chromewebstore.google.com/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia?hl=en'
                    target="_blank"
                    className="buy_button"
                    onClick={() => handleGaButtonClick("free")}>
                    {t('pricing.tryNow')}
                  </a>
                </button>
              </div>

              <div className="pricing_card_features">
                {
                  FreeCardFeatures.map((item, index) => {
                    return <div className="pricing_card_feature" key={index}>
                      <AiOutlineCheck />
                      <span className={`pricing_feature_info_container`} onMouseEnter={() => setFreeCardDetailHover(index)} onMouseLeave={() => setFreeCardDetailHover(-1)}>
                        <span className="pricing_feature_name">{getFeatureTranslation(item.name)}</span>
                        <IoIosInformationCircleOutline className="feature_info_class" />
                        <div className="navigation_outer_box_down navigation_container" hidden={!(freeCardDetailHover == index)}>
                          <div className="msg-box-down">
                            <p>
                              {getFeatureDescriptionTranslation(item.name)}
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
                <div className="pricing_card_price_div">
                <span className="display_flex_align_start">
                  <span className={`${currentCountry === 'india' ? 'rupee font15' : ' font15'} ${isCountryWithCurrency()?"marginTop3":""}`}>{currentPrice.currency_symbol}</span>
                  {<span className="pricing_card_price_text">{planPeriod === 'monthly' ? currentPrice.basic_plan.final : currentPrice.basic_plan.monthly_final}</span>}
                </span>
                    <span className="pricing_slashed_price black_color_faded">
                  <span className={currentCountry === 'india' ? 'rupee marginTop3' : ''} style={{ display: "inline" }}>{currentPrice.currency_symbol}</span>
                  <span style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                    {planPeriod === 'monthly' ? currentPrice.basic_plan.original : currentPrice.basic_plan.monthly_original}
                  </span>
                </span>
                </div>
              </div>
              <div className="pricing_card_heading">
                {planPeriod !== 'monthly' ? t('pricing.userPerMonthBilledAnnually') : t('pricing.userPerMonth')}
              </div>
              <div className="pricing_card_button">
                <button onClick={() => handleGaButtonClick("basic")}>
                  {showButton(false, 'basic')}
                </button>
              </div>
              {
                currentCountry == 'india' && planPeriod != 'monthly' && 
                <div className="pay_via_upi_text">{t('pricing.wantToPayViaUPI')} <span onClick={() => setShowUPIPopup({ show: true, type: 'Basic', price: currentPrice.basic_plan.final, monthly_price: currentPrice.basic_plan.monthly_final, currency: currentPrice.currency_symbol })}>{t('pricing.clickHere')}</span></div>
              }
              {
                currentCountry !='india' && planPeriod != 'monthly' &&
                <div className="pay_via_bank_text">{t('pricing.bankTransferAndPayPal')} - <a href={getWhatsappLink("bank", "Basic")} target="_blank" rel="noreferrer">{t('pricing.clickHere')}</a></div>
              }
              <div className="pricing_card_features">
                <div className="pricing_card_feature">
                  <AiOutlineCheck />
                  <p className="pricing_card_feature_text" style={{ fontWeight: "bold" }}>{t('pricing.allFreeFeatures')}</p>
                </div>
                {
                  basicCardFeatures.map((item, index) => {
                    return <div key={index} className="pricing_card_feature">
                      <AiOutlineCheck />
                      <span className={`pricing_feature_info_container`} onMouseEnter={() => setBasicCardDetailHover(index)} onMouseLeave={() => setBasicCardDetailHover(-1)}>
                        <span className="pricing_feature_name">{getFeatureTranslation(item.name)}</span>
                        <IoIosInformationCircleOutline className="feature_info_class" />
                        <div className="navigation_outer_box_down navigation_container" hidden={!(basicCardDetailHover == index)}>
                          <div className="msg-box-down">
                            <p>
                              {getFeatureDescriptionTranslation(item.name)}
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
                <div className="pricing_card_price_div">
                <span className="display_flex_align_start">
                  <span className={`${currentCountry === 'india' ? 'rupee font15' : ' font15'} ${isCountryWithCurrency()?"marginTop3":""}`}>{currentPrice.currency_symbol}</span>
                  {<span className="pricing_card_price_text">{planPeriod === 'monthly' ? currentPrice.advance_plan.final : currentPrice.advance_plan.monthly_final}</span>}
                </span>
                    <span className="pricing_slashed_price black_color_faded">
                  <span className={currentCountry === 'india' ? 'rupee marginTop3' : ''} style={{ display: "inline" }}>{currentPrice.currency_symbol}</span>
                  <span style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                    {planPeriod === 'monthly' ? currentPrice.advance_plan.original : currentPrice.advance_plan.monthly_original}
                  </span>
                </span>
                </div>
              </div>
              <div className="pricing_card_heading">
                {planPeriod !== 'monthly' ? t('pricing.userPerMonthBilledAnnually') : t('pricing.userPerMonth')}
              </div>
              <div className="pricing_card_button">
                <button onClick={() => handleGaButtonClick("advance")}>
                  {showButton(false, 'advance')}
                </button>
              </div>
              {
                currentCountry == 'india' && planPeriod != 'monthly' &&
                <div className="pay_via_upi_text">{t('pricing.wantToPayViaUPI')} <span onClick={() => setShowUPIPopup({ show: true, type: 'Advance', price: currentPrice.advance_plan.final, monthly_price: currentPrice.advance_plan.monthly_final, currency: currentPrice.currency_symbol })}>{t('pricing.clickHere')}</span></div>
              }
              {
                currentCountry !='india' && planPeriod != 'montly' &&
                <div className="pay_via_bank_text">{t('pricing.bankTransferAndPayPal')} - <a href={getWhatsappLink("bank", "Advance")} target="_blank" rel="noreferrer">{t('pricing.clickHere')}</a></div>
              }
              <div className="pricing_card_features">
                <div className="pricing_card_feature">
                  <AiOutlineCheck />
                  <p className="pricing_card_feature_text" style={{ fontWeight: "bold" }}>{t('pricing.allBasicFeatures')}</p>
                </div>
                {
                  advanceCardFeatures.map((item, index) => {
                    return <div key={index} className="pricing_card_feature">
                      <AiOutlineCheck />
                      <span className={`pricing_feature_info_container`} onMouseEnter={() => setAdvanceCardDetailHover(index)} onMouseLeave={() => setAdvanceCardDetailHover(-1)}>
                        <span className="pricing_feature_name">{getFeatureTranslation(item.name)}</span>
                        <IoIosInformationCircleOutline className="feature_info_class" />
                        <div className="navigation_outer_box_down navigation_container advance_navigation_box" hidden={!(advanceCardDetailHover == index)}>
                          <div className="msg-box-down">
                            <p>
                              {getFeatureDescriptionTranslation(item.name)}
                            </p>
                          </div>
                        </div>
                      </span>
                    </div>
                  })
                }
              </div>
            </div>
            <div className={`pricing_card multiple_user_card premium_card_purple ${isMultipleAccountPage && 'multiple_card_hover_style slider_stick'} ${isPricingCardHovered == "multiple" && !isMultipleAccountPage && "pricing_card_hover"}`} ref={scrollToPricingPopupRef} onMouseEnter={() => setIsPricingCardHovered("multiple")} onMouseLeave={() => setIsPricingCardHovered("")}>
              <div className="multiple_card_type">
                <p>{t('pricing.needMultipleAccounts')}</p>
              </div>

              <div className="pricing_card_heading">
                <div>
                {t('pricing.purchasePremiumPlanForMultipleUsers')}
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
                  <h3 className="pricing_calculator_title">{t('pricing.pricingCalculator')}</h3>
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
                    <span className={`slider-text ${pricingCalculatorPeriod == 'monthly' ? 'text-royal' : 'text-gray'}`}> {t('pricing.monthly')}</span>
                    <label className="switch-container" onChange={(e)=>pricingCalculatorPeriodHandler(e)}>
                      <input type="checkbox" defaultChecked />
                      <span className="switch background-royal" />
                    </label>
                    <span className={`slider-text ${pricingCalculatorPeriod !='monthly' ? 'text-royal' : 'text-gray'}`}>{t('pricing.12Months')}</span>
                  </div> 
                </div>
                {/* number of accounts */}
                <div className="num_accounts_section">
                  <p className="num_accounts_title text-gray">{t('pricing.numberOfAccounts')}</p>
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
              <div style={{width: "100%", display:"flex", flexDirection:'column', justifyContent:"center", alignItems:"center"}} className={`${pricingCalculatorPeriod=='monthly'?'marginBottom10':'marginBottom30'}`}>
              <Oval
                visible={true}
                height="50"
                width="50"
                color="#7829f9"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
                    {
                      <div className="pricing_card_heading margin_bottom_110" style={{visibility:"hidden"}}>
                        <span>Billed&nbsp;
                          <span className={currentCountry === 'india' ? 'rupee' : ''}>{multAccountPrice.currency}</span>
                          {Math.round(multAccountPrice.totalPrice / numAccounts)} for 12 months' service per user
                        </span>
                      </div>
                    }
                  </div> :
                  numAccounts > 1 ?
                  (
                    <>
                      <div className="pricing_card_price">
                        <div className="pricing_card_price_div">
                            <span style={{ "fontWeight": "bold", "marginRight": "5px" }} className="text-royal">~</span>
                            <span className="display_flex_align_start">
                                <span className={`${currentCountry === 'india' ? 'rupee font15' : ' font15'} ${isCountryWithCurrency()?"marginTop3":""} text-royal`}>{multAccountPrice.currency}</span>
                                <span className="pricing_card_price_text text-royal">{Math.ceil(multAccountPrice.price/numAccounts)}</span>
                            </span>
                            <span className="pricing_slashed_price black_color_faded">
                                <span className={currentCountry === 'india' ? 'rupee marginTop3' : ''} style={{ display: "inline" }}>{currentPrice.currency_symbol}</span>
                                <span style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                                    {multAccountPrice.cutPrice}
                                </span>
                            </span>
                        </div>
                      </div>
                      {
                        <div className={`pricing_card_heading margin_bottom_100`}>
                            {t('pricing.userPerMonth')} {pricingCalculatorPeriod=="annually"?t('pricing.billedAnnually'):""}
                        </div>
                      }
                    </>
                  ) : <div className="mult_error_message">
                    {t('pricing.numberOfAccountsCannotBeLessThan2')}
                  </div>
              }
            <div className="mult_card_bottom_container">
                <div className={`pricing_card_button mult_account_buy_button background-royal ${isMultipleAccountPage?"pricing_card_button_width":""}`}>
                    <button onClick={() => handleGaButtonClick("multiple_user")}>
                      <a target="_blank" rel="noreferrer" className="buy_button">{t('pricing.buy')}</a>
                    </button>
                </div>
                <div className="pricing_calculator_support">
                    <p>{t('pricing.needMoreSupport')} <a href={whatsappRedirectUrl} target="_blank" rel="noreferrer">{t('pricing.clickHere')}</a></p>
                </div>
            </div>
          </div>
          </div>
          <div className="sub-text" colSpan="4" style={{ color: '#C64A23', fontSize: '12px', textDecoration: 'underline', paddingBottom: 24, textAlign: 'center', marginTop: '30px' }}>{t('pricing.autoDeductionsDisclaimer')}</div>
          <div className="sub-text" style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>{t('pricing.termsAgreement')}</div>
          <div className="pricing_lower_section">
            <SectionTitle
              gif="/gifs/compare-plans.gif"
              title={t('pricing.sectionTitle')}
              subtitle={t('pricing.sectionSubtitle')}
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
                        <span className={`pricing_feature_info_container`} onMouseEnter={() => setFeatureDetailHover(index)} onMouseLeave={() => setFeatureDetailHover(-1)}>
                          <span className="pricing_feature_name">{getFeatureTranslation(feature.name)}</span>
                          <IoIosInformationCircleOutline className="feature_info_class" />
                          <div className="navigation_outer_box_down navigation_container" hidden={!(featureDetailHover == index)}>
                            <div className="msg-box-down">
                              <p>
                                {getFeatureDescriptionTranslation(feature.name)}
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
