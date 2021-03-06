import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51HfOD3Kf5ChfkWfunkI0rZV09b9b5caRnyuixko2k78nxBD8JDe1S0m2UVGgmxzujS6vnf5aevXM6dVNMvsbR9o60056u8jpQq";
  const onToken = async (token) => {
    try {
      const res = await axios({
        url: "https://crwnn-clothes.herokuapp.com/api/payment",
        method: "post",

        data: {
          token,
          amount: stripePrice,
        },
      });
      console.log(res);
      alert("payment successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="COZY"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
