import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
  console.log(token);
  alert('Payment successful');
}

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Ybe7aR2urrPgkQmkk3EZxNLM00zUvc9y1z';
  return (
    <StripeCheckout
      label='Pay now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )

}

export default StripeCheckoutButton;