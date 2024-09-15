import React, { useContext, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement
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
    const clientSecret = new URLSearchParams(window.location.search).get("clientSecret");
    if (!clientSecret) {
      return;
    }
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
      redirect: "if_required",
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
      <PaymentElement options={paymentElementOptions} />
      <AddressElement options={{mode: 'billing'}} />
      <button className="checkout_payment_button">
        {isSubmitting ? <Oval /> : 'Pay now'}
      </button>
    </form>
  );
};

export default CheckoutForm;