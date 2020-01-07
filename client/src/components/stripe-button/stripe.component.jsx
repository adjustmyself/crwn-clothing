import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_pYhqcpbLi1bZs568APOwY0u700gyQnEGgX';

    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
              amount: priceForStripe,
              token: token
          }  
        }).then(response => {
            alert('payment success!')
        }).catch(error => {
            console.log('Payment error: ',error);
            alert('payment issue, please check provided credit cart');
        });
    }

    
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shoppingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton