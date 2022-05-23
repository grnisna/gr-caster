import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const BookNowModal = ({ item }) => {

    const [quantity, setQuantity] = useState(0);

    const [user] = useAuthState(auth);
    const { name, image, description, price, weight, model, available, _id, minbook } = item;

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onChage = data =>{
        
        console.log(data);
        
    }
    const onBooked = async data => {
        const bookQuantity = parseInt(data?.quantity);
        const price = parseInt(data?.price);
        const totalPrice = bookQuantity * price;
        setQuantity(totalPrice);
        console.log(data);

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
                        <input type="text" value={name} placeholder="Type here" className="input my-2 input-bordered w-full max-w-xs" /><br />

                        <label>Product Model:</label><br />
                        <input type="text" value={model} placeholder="Type here" className="input my-2 input-bordered w-full max-w-xs" /><br />

                        <label>Per dozen Price:</label><br />
                        <input
                            type="text"
                            value={price}
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
                            
                            onKeyDown={onChage}
                            
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


                        <label>Total Price:</label><br />
                        <input type="text" value={quantity} readOnly placeholder="total price" className="input my-2 input-bordered w-full max-w-xs" />

                        <div className="divider"></div>
                        <h3 className="text-lg font-bold text-center">personer infomation</h3><br />

                        <label>Your Email:</label><br />
                        <input type="email" value={user.email} disabled placeholder="Type here" className="input my-2 input-bordered w-full max-w-xs" /><br />

                        <label>Cell-Phone number:</label><br />
                        <input type="text" placeholder="Phone number" className="input my-2 input-bordered w-full max-w-xs" /><br />

                        <label>Address:</label><br />
                        <input type="textarea" placeholder="Your Address" className="input my-2 input-bordered w-full max-w-xs" /><br />

                        <input type="submit" value="Booked" className="btn btn-primary my-2 input-bordered w-full max-w-xs" />

                    </div>
                </div>

            </form>
        </div >
    );
};

export default BookNowModal;