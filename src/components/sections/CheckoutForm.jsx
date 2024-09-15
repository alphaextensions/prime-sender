import React, { useContext, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement
} from "@stripe/react-stripe-js";
import { CheckoutContext } from "../context/CheckoutContext";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { checkoutData } = useContext(CheckoutContext);

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
      console.log(error.message);
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form onSubmit={handleSubmit} className="stripe_payment_form">
      <PaymentElement options={paymentElementOptions} />
      <AddressElement options={{mode: 'billing'}} />
      <button className="checkout_payment_button">
        Pay now
      </button>
    </form>
  );
};

export default CheckoutForm;