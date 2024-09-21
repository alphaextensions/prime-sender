import React, { useContext, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
  LinkAuthenticationElement
} from "@stripe/react-stripe-js";
import { CheckoutContext } from "../context/CheckoutContext";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { checkoutData } = useContext(CheckoutContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }

    const emailInputInterval = setInterval(() => {
      const emailInputElement = document.querySelector("#link-authentication-element iframe");
      if(emailInputElement) {
        clearInterval(emailInputInterval);
        emailInputElement.style.pointerEvents = "none";
      }
    }, 100);
    return () => clearInterval(emailInputInterval);
  }, [stripe, elements]);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://prime-sender.com/${checkoutData.plan_type.toLowerCase()}-success`,
      },
    });

    if (error) {
      setIsSubmitting(false);
      let errorMessage = error.message || 'An error occurred. Please try again.';
			  toast(errorMessage, { theme: 'colored', type: 'error', autoClose: 8000 });
    }

    if(paymentIntent){
      setIsSubmitting(false);
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form onSubmit={handleSubmit} className="stripe_payment_form">
      <ToastContainer style={{zIndex: "100000000"}} />
      <LinkAuthenticationElement
        id="link-authentication-element"
        options={{ defaultValues: { email: checkoutData.email } } }
        disabled
      />
      <PaymentElement options={paymentElementOptions} />
      <AddressElement options={{mode: 'billing'}} />
      <button className="checkout_payment_button">
        {isSubmitting ? <Oval /> : 'Pay now'}
      </button>
    </form>
  );
};

export default CheckoutForm;