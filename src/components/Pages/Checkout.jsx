import { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../sections/CheckoutForm";
import "../../styles/Checkout/checkout.css";
import { CheckoutContext } from "../context/CheckoutContext";
import { Trans, useTranslation } from 'react-i18next';

const stripePromise = loadStripe("pk_live_51JNhQYSGarUwHS3uNvHHbJOwhN57mB86SaotpjxomSIQkHzmqfu2I60xZT478pN9mKivmwPvzIAOJI3sitFCJYKn00n1XqvxZX");


const Checkout = () => {
  const { checkoutData: contextData, setCheckoutData } = useContext(CheckoutContext);

  const [checkoutData, setLocalCheckoutData] = useState(contextData);
  const [loading, setLoading] = useState(!contextData);

  const { i18n } = useTranslation(); 

  useEffect(() => {
    if (!contextData) {
      const stored = sessionStorage.getItem("checkoutData");
      if (stored) {
        const parsed = JSON.parse(stored);
        setLocalCheckoutData(parsed);
        if (setCheckoutData) setCheckoutData(parsed);
      } else {
        window.location.href = "/pricing";
      }
      setLoading(false);
    }
  }, [contextData, setCheckoutData]);

  if (loading) {
    return (
      <div className="main-section checkout-section">
        <div className="checkout_loading">Loading checkout details...</div>
      </div>
    );
  }

  if (!checkoutData) return null;

  const { clientSecret, email, numbers, currency, totalPrice, title, slashedPrice } = checkoutData;

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const formatPriceParts = (currency, amount, locale = 'en-US') => {
    const parts = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).formatToParts(amount);

    return parts;
  };
  const totalPriceParts = formatPriceParts(currency, totalPrice);
  const slashedPriceParts = slashedPrice !== null ? formatPriceParts(currency,slashedPrice) : [];


  return (
    clientSecret ? (
      <div className="main-section checkout-section">
        <div className="checkout_info_section">
          <div className="checkout_heading_section">
            <div className="checkout_logo">
              <img src="/images/logo-large.png" alt="Prime Sender logo" />
            </div>
            <div className="checkout_logo_text">
              <img src="/images/logo-text-light.png" alt="Prime Sender logo" />
            </div>
          </div>
          <div className="checkout_title_section">
            <p>
              {i18n.language === 'pt' ? (
                <Trans
                  i18nKey="checkout.primeSenderPlan"
                  values={{
                    planTitle: title.replace(/^Prime Sender\s*/i,'').replace(/\s*plan.*$/i,'').trim(),
                    users: numbers.length
                  }}
                />
              ) : (
                title
              )}
            </p>
          </div>
          <div className="checkout_price_section">
            <p className="checkout_price total_checkout_price">
              {totalPriceParts.map((part, idx) => {
                if (part.type === 'currency') {
                  return <span key={idx} className={`${currency === 'INR' ? 'rupee' : ''} currency-symbol`}>{part.value}</span>;
                }
                return part.value;
              })}
            </p>
            <p className="checkout_price slashed_price">
              {slashedPriceParts.length > 0 && slashedPriceParts.map((part, idx) => {
                if (part.type === 'currency') {
                  return <span key={idx} className={`${currency === 'INR' ? 'rupee' : ''} currency-symbol`}>{part.value}</span>;
                }
                return part.value;
              })}
            </p>
          </div>
            <div className="checkout_email_section">
              <p className="checkout_email_label">Email: </p>
              <p className="checkout_email_text">{email}</p>
          </div>
          <div className="checkout_numbers_section">
              <p className="checkout_number_label">Numbers: </p>
              <div className="checkout_numbers_div">
                {
                  numbers.map((number, index) => (
                    <p className="checkout_number_text" key={index}>{number.split('-').join('')}</p>
                  ))
                }
              </div>
          </div>
        </div>
        <div className="checkout_form_section">
           <Elements options={options} stripe={stripePromise}>
              <CheckoutForm checkoutData={checkoutData} />
           </Elements>
        </div>
      </div>
    ) : (
      <div>Loading</div>
    )
  );
};

export default Checkout;