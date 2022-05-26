import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookNowModal = ({ item, setItem }) => {
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(0);

    const [user] = useAuthState(auth);
    const { name, image, price, model, available, _id, minbook } = item;

    const { register, handleSubmit, formState: { errors } } = useForm();



    const onBooked = (data, event) => {

        const bookQuantity = parseInt(data?.quantity);
        const price = parseInt(data?.price);
        const totalPrice = bookQuantity * price;
        setQuantity(totalPrice);
        //-----------------
        // set to DB 
        const booking = {
            itemId: _id,
            name: name,
            image: image,
            price: price,
            model: model,
            minbook: minbook,
            bookingQuantity: bookQuantity,
            email: user.email,
            total: totalPrice
        };

        fetch('https://aqueous-cove-84612.herokuapp.com/booking', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success(`Successfully added ${name}`)
                }
            });


        setItem(null);

        navigate('/dashboard');

    }


    return (
        <div>
            <form onSubmit={handleSubmit(onBooked)} >
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative ">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold text-center">Booking Form</h3>

                        <img className='w-24 mx-auto border rounded-full' src={image} alt="" />

                        <label>Product name:</label><br />
                        <input type="text" defaultValue={name} placeholder="Type here" className="input my-2 input-bordered w-full max-w-xs" /><br />

                        <label>Product Model:</label><br />
                        <input type="text" defaultValue={model} placeholder="Type here" className="input my-2 input-bordered w-full max-w-xs" /><br />

                        <label>Per dozen Price:</label><br />
                        <input
                            type="text"
                            defaultValue={price}
                            placeholder="Type here"
                            className="input my-2 input-bordered w-full max-w-xs"
                            name='unitPrice'

                            {
                            ...register("price", {
                                required: {
                                    value: true,
                                    message: "need to set price"
                                }
                            })
                            }
                        />
                        {
                            <label>
                                {errors.price?.type === 'required' && <p className='text-error'> {errors.price.message} </p>}
                            </label>
                        }
                        <br />


                        <label>Booked Quantity:</label><br />
                        <input
                            type="number"
                            placeholder={`Minimum Booked Qnt ${minbook} dzn`}
                            className="input my-2 input-bordered w-full max-w-xs"



                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Please Provide quantity of items in dozen"
                                },
                                min: {
                                    value: minbook,
                                    message: `Minimum booked ${minbook} dozen`
                                },
                                max: {
                                    value: available,
                                    message: `maximum booked ${available} message`
                                }
                            })}
                        />
                        {
                            <label>
                                {errors.quantity?.type === 'required' && <p className='text-error'> {errors.quantity.message} </p>}
                                {(errors.quantity?.type === 'max' || errors.quantity?.type === 'min') && <p className='text-error'> {errors.quantity.message} </p>}
                            </label>
                        }
                        <br />



                        <div className="divider"></div>
                        <h3 className="text-lg font-bold text-center">personer infomation</h3><br />

                        <label>Your Email:</label><br />
                        <input type="email" defaultValue={user.email} disabled placeholder="Type here" className="input my-2 input-bordered w-full max-w-xs" /><br />

                        <label>Cell-Phone number:</label><br />
                        <input type="text" placeholder="Phone number" className="input my-2 input-bordered w-full max-w-xs" /><br />

                        <label>Address:</label><br />
                        <input type="textarea" placeholder="Your Address" className="input my-2 input-bordered w-full max-w-xs" /><br />

                        <input type="submit" defaultValue="Booked" className="btn btn-primary my-2 input-bordered w-full max-w-xs" />

                    </div>
                </div>

            </form>
        </div >
    );
};

export default BookNowModal;