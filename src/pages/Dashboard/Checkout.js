import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';



const Checkout = ({ booked }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [working, setWorking] = useState(true);

    const { total, name, _id, image,     bookingQuantity } = booked;
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('https://aqueous-cove-84612.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ total })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [total])




    const handlePayment = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }


        const { error } = await stripe.createPaymentMethod({ type: 'card', card });

        if (error) {
            setWorking(false);
            setCardError(error.message);
            toast.error(`${error.message}`);

        } else {
            setCardError('');

        }


        // ----------------- conform payment ------------- 
        const { paymentIntent, paymentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.email
                    },
                },
            },
        );


        if (error || paymentError) {
            setWorking(false);
            setCardError(paymentError.message);
            toast.error(`${paymentError.message}`);
        }
        else {
            toast.success('Succefully payment done');
           
            //    ----------------  set to mongodb -----------------
            const paymentInfo = {
                transactionId: paymentIntent.id,
                name: name,
                totalprice: total,
                bookingQtn: bookingQuantity,
                image: image
            };

            fetch(`https://aqueous-cove-84612.herokuapp.com/booking/${_id}`, {
                method: 'PUT',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    setWorking(false);
                    

                })

            navigate('/dashboard');
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

                <button className='btn btn-primary hover:btn-warning w-full mt-10' type="submit" disabled={!stripe || !clientSecret}> Pay now </button>
            </form>
            <p className='text-error' >{cardError}</p>
        </div>
    );
};

export default Checkout;