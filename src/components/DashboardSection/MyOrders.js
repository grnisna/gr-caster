import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../pages/SharedPages/Loading/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    // ----------- get booking data from mongo db --------------
    const { data: booking, isLoading, refetch } = useQuery('booking', () => fetch(`https://aqueous-cove-84612.herokuapp.com/booking?email=${user.email}`, {
        method: 'GET', headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).then(res => {
        if (res.status === 101 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('userToken');
        }
        return res.json()
    }));

    if (isLoading) {
        return <Loading></Loading>
    };

    const cancelBooking = (bookingId) => {
        fetch(`https://aqueous-cove-84612.herokuapp.com/booking/${bookingId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleteed Item:', data);
                refetch();
            })
    }




    return (
        <>
        <h1 className='text-center text-4xl text-primary font-extrabold bg-base-100 py-10'>Add New Item</h1>
        <div className='bg-base-100 ronded-lg'>
            <h1 className='text-4xl font-bold text-center text-primary my-10 '>My All Order {booking.length}</h1>
            <div >

                <table className="table w-full">

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
                                    <div className="avatar">
                                        <div className="w-24 mask mask-squircle">
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

                                        <a href="#my-modal-2" className="btn btn-error">Cancel</a>

                                        <div className="modal" id="my-modal-2">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg text-center">Are you Sure Want Cancel??</h3>
                                                <p className="py-4 text-center">If Cancel then you book again.</p>
                                                <div className="modal-action flex justify-between items-center">
                                                    <button onClick={() => cancelBooking(book._id)} className='btn btn-error' >Yes</button>
                                                    <a href="#1" className="btn btn-success">NO</a>
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
        </>
    );
};

export default MyOrders;