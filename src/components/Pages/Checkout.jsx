import { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../sections/CheckoutForm";
import "../../styles/Checkout/checkout.css";
import { CheckoutContext } from "../context/CheckoutContext";

const stripePromise = loadStripe("pk_live_51JNhQYSGarUwHS3uNvHHbJOwhN57mB86SaotpjxomSIQkHzmqfu2I60xZT478pN9mKivmwPvzIAOJI3sitFCJYKn00n1XqvxZX");


const Checkout = () => {
  const { checkoutData } = useContext(CheckoutContext);
  const [clientSecret, setClientSecret] = useState(null);
  const [planDetails, setPlanDetails] = useState(null);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const formatPrice = (currency, amount, locale = 'en-US') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };
  useEffect(() => {
    if(!checkoutData){
      window.location.href = '/pricing';
    }
    setClientSecret(checkoutData.clientSecret);
    setPlanDetails({
      email: checkoutData.email,
      numbers: checkoutData.numbers,
      currency: checkoutData.currency,
      totalPrice: checkoutData.totalPrice,
      title: checkoutData.title,
    })
  }, []);

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
            <p>{planDetails.title}</p>
          </div>
          <div className="checkout_price_section">
            <p className={`${planDetails.currency == 'INR'&&'rupee'} checkout_price`}>{formatPrice(planDetails.currency, planDetails.totalPrice)}</p>
          </div>
            <div className="checkout_email_section">
              <p className="checkout_email_label">Email: </p>
              <p className="checkout_email_text">{planDetails.email}</p>
          </div>
          <div className="checkout_numbers_section">
              <p className="checkout_number_label">Numbers: </p>
              <div className="checkout_numbers_div">
                {
                  planDetails.numbers.map((number, index) => (
                    <p className="checkout_number_text" key={index}>{number.split('-').join('')}</p>
                  ))
                }
              </div>
          </div>
        </div>
        <div className="checkout_form_section">
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
        </div>
      </div>
    ) : (
      <div>Loading</div>
    )
  );
};

export default Checkout;