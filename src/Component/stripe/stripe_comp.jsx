import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutPage = ({price}) => {
  const StripeToCents = price * 100;
  const PublishKey = 'pk_test_51ItxanIZlBKmJB0wyD9DNtJ6W95RsofUsKgreFnuxIvDjTdYIfOCBJ1LGnrm6Qj7wtKF9SPaUauwdDfhHmdEh7OI00j9X0ToWN'

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
    label="clothing"
    description="Buy cloth here!"
    name="crwd clothing"
    stripeKey={PublishKey}
    token={onToken}
    amount={StripeToCents}
    shippingAddress
    billingAddress
    />
  )
}

export default StripeCheckoutPage;