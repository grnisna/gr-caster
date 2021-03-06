import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading/Loading';

const stripePromise = loadStripe('pk_test_51L0n2qCi5PWr8KPCurMmZmhlJEx8ZEoP5qVQyJhgP3me90UrjMQjxkIE9Y1zGMiVp80HKbadzEYD9nIiEgFBx9Cq005ObwXMol');

const Payment = () => {
    const { id } = useParams();
    // data load form DB ----------------
    const { data: booked, isLoading } = useQuery(['booked', id], () => fetch(`https://aqueous-cove-84612.herokuapp.com/booking/${id}`).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    };

    const { image,   model, name,  total, bookingQuantity } = booked;

    return (

        <div className="py-10 min-h-screen bg-base-100 ">
            <div className=" lg:flex items-center justify-center">
                <div className="text-center lg:text-left mr-10">
                    <div className="avatar">
                        <div className="w-32 rounded">
                            <img src={image} alt="" />
                        </div>
                    </div>

                    <h3 className='text-xl text-warning  '>Item Name:<span className='text-green-500'>{name} </span> </h3>
                    <h4 className='text-xl text-warning  '>Model:<span className='text-green-500'> {model} </span> </h4>
                    <h4 className='text-xl text-warning  '>Booked Quantity:<span className='text-green-500'>{bookingQuantity} DZN </span> </h4>
                    <h2 className='text-xl text-warning '>Total Price: <span className='text-purple-500'>{total}$</span>  </h2>

                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <Checkout booked={booked} ></Checkout>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;