import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
  LinkAuthenticationElement
} from "@stripe/react-stripe-js";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
import { useTranslation } from 'react-i18next';

const CheckoutForm = ({ checkoutData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!stripe || !elements) return;

    const emailInputInterval = setInterval(() => {
      const emailInputElement = document.querySelector("#link-authentication-element iframe");
      if (emailInputElement) {
        clearInterval(emailInputInterval);
        emailInputElement.style.pointerEvents = "none";
      }
    }, 100);

    return () => clearInterval(emailInputInterval);
  }, [stripe, elements]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsSubmitting(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://prime-sender.com/${checkoutData.plan_type.toLowerCase()}-success`,
      },
    });

    if (error) {
      setIsSubmitting(false);
      toast(error.message || "An error occurred. Please try again.", {
        theme: "colored",
        type: "error",
        autoClose: 8000,
      });
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form onSubmit={handleSubmit} className="stripe_payment_form">
      <ToastContainer style={{ zIndex: "100000000" }} />
      <LinkAuthenticationElement
        id="link-authentication-element"
        options={{ defaultValues: { email: checkoutData.email } }}
        disabled
      />
      <PaymentElement options={paymentElementOptions} />
      <AddressElement options={{ mode: "billing" }} />
      <button className="checkout_payment_button">
        {isSubmitting ? <Oval /> : t('checkout.payNow')}
      </button>
    </form>
  );
};

export default CheckoutForm;