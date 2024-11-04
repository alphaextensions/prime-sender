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
import { countryCodeToCurrency, countryCodeToName, countryCodesPresent, countryNameToCode, countrySwitchObject1, countrySwitchObject2, pricing_data, pricing_links, pricing_popup_premium_features, pricing_popup_trial_features } from "../Data/pricing-data";

const UPIPopup = ({plan_type, price, currency, monthly_price, setShowUPIPopup}) => {
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
        <span className="upi_billed_text">Billed for 12 months' service</span>
      </div>
        <a className="upi_buy_button" href={whatsappRedirectUrl} target="_blank">
          Click here to buy
        </a>
      <span className="upi_last_text">*UPI transfer only available for Annual Plans</span>
    </div>
  </>
}


const Pricing = () => {
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => {
      return <span key={index} className='white_promo_text pro'>{text}</span>
    })
  }

  const promoTextComponent = <div className='promo_text_container'>
    {...promoTextComponentGenerator()}
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
  const [myLocation, setMyLocation] = useState({
        country_name: "International",
        pricing_country_name: "international",
        country_code: "US",
        country_currency: "USD" ,
        isSuccess: false,
  });
  const [flagIconSrc, setFlagIconSrc] = useState('');
  const [loading, setLoading] = useState(false);
  const [featureDetailHover, setFeatureDetailHover] = useState(-1);
  const [freeCardDetailHover, setFreeCardDetailHover] = useState(-1);
  const [basicCardDetailHover, setBasicCardDetailHover] = useState(-1);
  const [advanceCardDetailHover, setAdvanceCardDetailHover] = useState(-1);
  const [pricingCalculatorPlan, setPricingCalculatorPlan] = useState("advance");
  const [pricingCalculatorPeriod, setPricingCalculatorPeriod] = useState("annually");
  const [numAccounts, setNumAccounts] = useState(() => {
    const phoneNumbers = JSON.parse(localStorage.getItem('phoneNumbers')) || [];
    return phoneNumbers.length || 2;
  });
  const [multAccountPrice, setMultAccountPrice] = useState({ currency:'', price: '', totalPrice: '', cutPrice: ''});
  const [priceCalculatorLoader, setPriceCalculatorLoader] = useState(false);
  const [showMultipleAccountPopup, setShowMultipleAccountPopup] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState(JSON.parse(localStorage.getItem("phoneNumbers"))  || ['', '']);
  const [isMultipleAccountPage, setIsMultipleAccountPage] = useState(false);
  const [isPricingCardHovered, setIsPricingCardHovered] = useState("");
  const [showUPIPopup, setShowUPIPopup] = useState({ show: false, type: 'Basic', price: '', monthly_price: '', currency: '' });
    
  const scrollToPricingPopupRef = useRef(null);
  
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
                  <span className={popupCountry=='india'?"rupee":""}>
                    {popupPlan === 'basic' ? pricing[popupCountry].currency_symbol + pricing[popupCountry].monthly.basic_plan.final : pricing[popupCountry].currency_symbol + pricing[popupCountry].monthly.advance_plan.final}
                  </span>
                }
                /month</span>
              <br />
              {popupLastPlan === 'freeTrial' && (
                <span className="pricing-popup-offer-price">
                  {
                    <span>
                      {popupPlan === 'basic' ? pricing[popupCountry].monthly.basic_plan.discounted : pricing[popupCountry].monthly.advance_plan.discounted}
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
                    {popupPlan === 'basic' ? pricing[popupCountry].annually.basic_plan.final : pricing[popupCountry].annually.advance_plan.final}
                    &nbsp;({
                      (popupPlan === 'basic' ? pricing[popupCountry].annually.basic_plan.monthly_final : pricing[popupCountry].annually.advance_plan.monthly_final)
                    }/month)</span>
                </div> :
                <div className="annual-price" >
                  <span>
                    <span className={popupCountry === 'india' ? 'rupee' : ''}>
                      {pricing[popupCountry].currency_symbol}
                    </span>
                    <span>
                      {popupPlan === 'basic' ? pricing[popupCountry].annually.basic_plan.final : pricing[popupCountry].annually.advance_plan.final}
                    </span>
                    &nbsp;(
                    <span className={popupCountry === 'india' ? 'rupee' : ''}>
                      {pricing[popupCountry].currency_symbol}
                      <span className="font-family-class">
                        {(popupPlan === 'basic' ? pricing[popupCountry].annually.basic_plan.monthly_final : pricing[popupCountry].annually.advance_plan.monthly_final)}
                        /month)
                      </span>
                      </span>
                  </span>
                </div>
            }
          </div>
          <div className="pricing-popup-btn">
            <button onClick={handlePopupGaButtonClick}>{showButton(true, popupPlan)}</button>
            <a href={'/pricing/multiple-account'} className="multiple-accounts-btn">Purchase for multiple users</a>
          </div>
          <div className="pricing-popup-bottom">
            <div className="pricing-popup-features">
              {
                pricing_popup_premium_features.map((item, index) => {
                  return <div className="feature-item" key={index}><img src='/images/check.png' className="check_icon" alt="✔"></img>{item} <span className="text-bold">&nbsp;(Advance)</span></div>
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

    const handleCountrySwitchClick = (val) => {
        console.log("this is the val ", val);
        setCurrentCountry(val);
        console.log({
            country_name: val[0].toUpperCase() + val.slice(1),
            pricing_country_name: val,
            country_code: countryNameToCode[val],
            country_currency: countryCodeToCurrency[countryNameToCode[val]],
            isSuccess: false,
        });
        setMyLocation({
            country_name: val[0].toUpperCase() + val.slice(1),
            pricing_country_name: val,
            country_code: countryNameToCode[val],
            country_currency: countryCodeToCurrency[countryNameToCode[val]],
            isSuccess: false,
        });

    }

  const countrySwitchComponent = () => {
    if (myLocation && myLocation.isSuccess) {
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
              <div key={ind} className={`country_switch ${currentCountry === obj.currentCountryName && "active_country_class"}`} onClick={() => handleCountrySwitchClick(obj.currentCountryName)}>
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
                    scrollToPricingPopupRef.current.scrollIntoView({ behavior: 'smooth' });
                } 
            }, 400);
        }
    }

    function getUserLocation() {
        setLoading(true);
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then((data) => {
                let country, currency;
                if (!countryCodesPresent.includes(data.country_code)) {
                    country = 'international';
                    currency = "USD";
                }
                else {
                    country = countryCodeToName[data.country_code];
                    currency = countryCodeToCurrency[data.country_code];
                }
                setMyLocation({
                    country_name: data.country_name,
                    pricing_country_name: country,
                    country_code: data.country_code,
                    country_currency: currency,
                    isSuccess: true,
                });
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                
                console.log(err)
            });
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

    useEffect(() => {
        checkIfMultipleAccountPage();
        setLoading(true);
        getParams();
        getUserLocation();
        getPricingDataFromDatabase();
    }, [])

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
      {showUPIPopup.show && 
        <UPIPopup 
          plan_type={showUPIPopup.type} 
          price={showUPIPopup.price} 
          monthly_price={showUPIPopup.monthly_price} 
          currency={showUPIPopup.currency} 
          setShowUPIPopup={setShowUPIPopup}
        />}
      <div className="pricing_container">
        {promoTextComponent}
        {popupLastPlan && generatePricingPopup()}
        <div className="pricing_main">
          <div className="pricing_top_section">
            <SectionTitle gif="/gifs/pricing-title.gif" title="Simple, Affordable Pricing" />
            <div className="pricing_switches">
              {!loading && countrySwitchComponent()}
              <div className={`pricing-slider top-pricing-slider`} ref={scrollToPricingPopupRef}>
                <div className={`pricing_country ${isMultipleAccountPage?"display_none":""}`}>
                  <div className="pricing_country_switch">
                    <div className={`country_switch ${planPeriod == 'monthly' && 'active_country_class'}`} onClick={()=> setPlanPeriod("monthly")}>
                      <p className="country_current_switch plan_switch">
                        Monthly
                      </p>
                    </div>
                    <div className={`country_switch ${planPeriod == 'annually' && 'active_country_class'}`} onClick={()=> setPlanPeriod("annually")}>
                      <p className="country_current_switch plan_switch">
                      12 Months
                      </p>
                    </div>
                    <div className={`country_switch ${planPeriod == 'biannually' && 'active_country_class'}`} onClick={()=> setPlanPeriod("biannually")}>
                      <p className="country_current_switch plan_switch">
                      24 Months
                      </p>
                    </div>
                  </div>
                </div>
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
                  <span className={currentCountry === 'india' ? 'rupee heading' : ' heading'}>{currentPrice.currency_symbol}</span>
                  <span className="heading">0</span>
                  <br />
                  <p className={currentCountry === 'india' ? 'rupee' : ''} style={{ display: "inline", visibility: "hidden" }}>{currentCountry === "india" ? "₹" : currentCountry === 'indonesia' ? "IDR " : "$"}</p>
                  <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap", visibility: "hidden" }}>{planPeriod === 'monthly' ? currentPrice.basic_plan.original : currentPrice.basic_plan.monthly_original}</p>
                </div>
              </div>
              {planPeriod !== 'monthly' &&
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
                  <span className={currentCountry === 'india' ? 'rupee heading' : ' heading'}>{currentPrice.currency_symbol}</span>
                  {<span className="heading">{planPeriod === 'monthly' ? currentPrice.basic_plan.final : currentPrice.basic_plan.monthly_final}</span>}
                  <p style={{ display: "inline", whiteSpace: "nowrap" }}> / month</p>
                  <br />
                  <p className={currentCountry === 'india' ? 'rupee' : ''} style={{ display: "inline" }}>{currentPrice.currency_symbol}</p>
                  <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                    {planPeriod === 'monthly' ? currentPrice.basic_plan.original : currentPrice.basic_plan.monthly_original}
                  </p>
                </div>
              </div>
              {planPeriod !== 'monthly' &&
                <div className="pricing_card_heading">
                  <span>Billed&nbsp;
                    <span className={currentCountry === 'india' ? 'rupee' : ''}>{currentPrice.currency_symbol}</span>
                    {currentPrice.basic_plan.final} for {planPeriod=='annually'?12:24} months' service per user
                  </span>
                </div>
              }
              <div className="pricing_card_button">
                <button onClick={() => handleGaButtonClick("basic")}>
                  {showButton(false, 'basic')}
                </button>
              </div>
              {
                currentCountry == 'india' && planPeriod != 'monthly' && 
                <div className="pay_via_upi_text">Want to pay via UPI? <span onClick={() => setShowUPIPopup({ show: true, type: 'Basic', price: currentPrice.basic_plan.final, monthly_price: currentPrice.basic_plan.monthly_final, currency: currentPrice.currency_symbol })}>Click here</span></div>
              }
              {
                currentCountry !='india' && planPeriod != 'monthly' &&
                <div className="pay_via_bank_text">Bank Transfer and PayPal also available - <a href={getWhatsappLink("bank", "Basic")} target="_blank">Click here</a></div>
              }
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
                  <span className={currentCountry === 'india' ? 'rupee heading' : ' heading'}>{currentPrice.currency_symbol}</span>
                  {<span className="heading">{planPeriod === 'monthly' ? currentPrice.advance_plan.final : currentPrice.advance_plan.monthly_final}</span>}
                  <p style={{ display: "inline", whiteSpace: "nowrap" }}> / month</p>
                  <br />
                  <p className={currentCountry === 'india' ? 'rupee' : ''} style={{ display: "inline" }}>{currentPrice.currency_symbol}</p>
                  <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                    {planPeriod === 'monthly' ? currentPrice.advance_plan.original : currentPrice.advance_plan.monthly_original}
                  </p>
                </div>
              </div>
              {planPeriod !== 'monthly' &&
                <div className="pricing_card_heading">
                  <span>Billed&nbsp;
                    <span className={currentCountry === 'india' ? 'rupee' : ''}>{currentPrice.currency_symbol}</span>
                    {currentPrice.advance_plan.final} for {planPeriod=='annually'?12:24} months' service per user 
                  </span>
                </div>
              }
              <div className="pricing_card_button">
                <button onClick={() => handleGaButtonClick("advance")}>
                  {showButton(false, 'advance')}
                </button>
              </div>
              {
                currentCountry == 'india' && planPeriod != 'monthly' &&
                <div className="pay_via_upi_text">Want to pay via UPI? <span onClick={() => setShowUPIPopup({ show: true, type: 'Advance', price: currentPrice.advance_plan.final, monthly_price: currentPrice.advance_plan.monthly_final, currency: currentPrice.currency_symbol })}>Click here</span></div>
              }
              {
                currentCountry !='india' && planPeriod != 'montly' &&
                <div className="pay_via_bank_text">Bank Transfer and PayPal also available - <a href={getWhatsappLink("bank", "Advance")} target="_blank">Click here</a></div>
              }
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
                      pricingCalculatorPeriod == 'annually' &&
                      <div className="pricing_card_heading" style={{visibility:"hidden"}}>
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
                        <div className="pricing_cut_price">
                          <span style={{ "fontWeight": "bold", "marginRight": "5px" }} className="text-royal">~</span>
                          <span className={`${currentCountry === 'india' ? 'rupee heading' : ' heading'} text-royal`}>{multAccountPrice.currency}</span>
                          {<span className="heading text-royal">{Math.ceil(multAccountPrice.price/numAccounts)}</span>}
                          <p style={{ display: "inline", whiteSpace: "nowrap" }}> <span className="text-royal">per user</span> / month</p>
                          <br />
                          <p className={currentCountry === 'india' ? 'rupee' : ''} style={{ display: "inline", marginLeft: "13px" }}>{currentPrice.currency_symbol}</p>
                          <p style={{ display: "inline", textDecoration: "line-through", whiteSpace: "nowrap" }}>
                            {multAccountPrice.cutPrice}
                          </p>
                        </div>
                      </div>
                      {
                        pricingCalculatorPeriod == 'annually' &&
                        <div className="pricing_card_heading">
                          <span>Billed&nbsp;
                            <span className={currentCountry === 'india' ? 'rupee' : ''}>{multAccountPrice.currency}</span>
                            {Math.round(multAccountPrice.totalPrice/numAccounts)} for 12 months' service per user
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
