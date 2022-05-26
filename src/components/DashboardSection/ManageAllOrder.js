import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../pages/SharedPages/Loading/Loading';

const ManageAllOrder = () => {
    const [shipped, setShipped] = useState(false);




    const { data: allOrder, isLoading, refetch } = useQuery('allOrder', () => fetch('http://localhost:5000/manageorder').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleStatus = (id) => {
        fetch(`http://localhost:5000/manageorder/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    toast.success('successFully');
                    refetch();
                    setShipped(true);
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>

                        <th>Payment</th>
                        <th>Buyer Email</th>
                        <th>Item picture</th>
                        <th>Item name</th>
                        <th>Item Model</th>
                        <th>Booking Qnt</th>

                    </tr>
                </thead>
                <tbody>

                    {allOrder.map((order, index) => <tr key={order._id}>
                        <th>{index + 1} </th>
                        <td>
                            {
                                order.paid ? <button onClick={() => handleStatus(order._id)} className='btn btn-warning btn-xs'>
                                    {!shipped ? 'pending..' : 'shipped'}
                                </button>
                                    : <p className='text-error' >not paid</p>
                            }
                        </td>
                        <td>{order.email}</td>
                        <td>
                            <img className='w-10' src={order.image} alt="" />
                        </td>
                        <td>{order.name}</td>
                        <td>{order.model}</td>
                        <td>{order.bookingQuantity}</td>




                    </tr>)}



                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrder;