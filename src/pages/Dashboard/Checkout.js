import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';
import Loading from '../SharedPages/Loading/Loading';
import { toast } from 'react-toastify';



const Checkout = () => {
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();


    const handlePayment = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card });

        if (error) {
            setCardError(error.message);
            toast.error(`${error.message}`);
        } else {
            setCardError('');
            toast.success('Successfully payment completed')
        }






    }
    return (
        <div>
            <form onSubmit={handlePayment}>
                <CardElement>
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}F
                </CardElement>

                <button className='btn btn-primary hover:btn-warning w-full mt-10' type="submit" disabled={!stripe}> Pay now </button>
            </form>
            <p className='text-error' >{cardError}</p>
        </div>
    );
};

export default Checkout;