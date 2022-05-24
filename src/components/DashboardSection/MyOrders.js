import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../pages/SharedPages/Loading/Loading';

const MyOrders = () => {


    // ----------- get booking data from mongo db --------------
    const { data: booking, isLoading, refetch } = useQuery('booking', () => fetch('http://localhost:5000/booking', {
        method: 'GET', headers: { 'content-type': 'application/json' }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    };

    const cancelBooking = (bookingId) => {
        fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleteed Item:', data);
                refetch();
            })
    }




    return (
        <div className='bg-base-100 ronded-lg'>
            <h1 className='text-4xl font-bold text-center text-primary my-10 '>My All Order {booking.length}</h1>
            <div >

                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Qtn</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Cancel Book</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            booking.map((book, index) => <tr
                                key={book._id}
                            >
                                <th>{index + 1}</th>
                                <td>
                                    <div class="avatar">
                                        <div class="w-24 mask mask-squircle">
                                            <img src={book.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{book.name}</td>
                                <td>{book.model}</td>
                                <td>{book.bookingQuantity} DZN</td>
                                <td>{book.total}$</td>
                                <td>
                                    {(book.price && !book.paid) &&
                                        <Link to={`/dashboard/payment/${book._id}`} className='btn btn-warning'>Pay Now</Link>}

                                    {(book.price && book.paid) &&
                                        <h2 className='text-success' >Paid</h2>}
                                </td>
                                <td>
                                    {(book.price && book.paid) ? <p className='text-orange-800' >Transaction ID:{book.transactionId} </p> : <div>
                                        {/* --------------------------  */}
                                        
                                        <a href="#my-modal-2" class="btn btn-error">Cancel</a>
                                        
                                    <div class="modal" id="my-modal-2">
                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg">Are you Sure Want Cancel??</h3>
                                            <p class="py-4">If Cancel then you book again.</p>
                                            <div class="modal-action flex justify-between items-center">
                                            <button onClick={() => cancelBooking(book._id)} className='btn btn-error' >Yes</button>
                                                <a href="#"  class="btn btn-success">NO</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* -----------------------------------  */}

                                    
                                </div> 
                                    
                                    
                                    }


                            </td>
                            </tr>)
                        }
                </tbody>

            </table>
        </div>

        </div >
    );
};

export default MyOrders;