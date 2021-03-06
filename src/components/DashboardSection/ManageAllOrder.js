import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../pages/SharedPages/Loading/Loading';

const ManageAllOrder = () => {
    const [shipped, setShipped] = useState(false);

    // get all booking --------------------------
    const { data: allOrder, isLoading, refetch } = useQuery('allOrder', () => fetch('https://aqueous-cove-84612.herokuapp.com/manageorder').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    // updata status ---------------------------
    const handleStatus = (id) => {
        fetch(`https://aqueous-cove-84612.herokuapp.com/manageorder/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {

                if (data.$set.shipped) {
                    toast.success('successFully');
                    refetch();
                    setShipped(true);
                }
            })
    }


    // delete unpaid order ------------------
    const deleteOrder = (id) => {
        fetch(`https://aqueous-cove-84612.herokuapp.com/manageorder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('successfully deleted');
                refetch();
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
                        {/*  */}
                        <td>
                            {(order.paid && !order.shipped) && <button onClick={() => handleStatus(order._id)} className='btn btn-warning'>pending...</button>}
                            {(order.paid && order.shipped) && <h2 className='text-xl text-success font-bold'>Shipped</h2>}
                            {(!order.paid && !order.shipped) && <>

                                <h2 className='text-xl text-error font-bold'>Un-Paid</h2>
                                {/* -----------------------------------------  */}
                                <a href="#my-modal-last" className="btn btn-error btn-xs">Cancel booked</a>

                                <div className="modal" id="my-modal-last">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg text-center">Are you Sure Want Cancel??</h3>
                                        <p className="py-4 text-center">If Cancel then you book again.</p>
                                        <div className="modal-action flex justify-between items-center">
                                            <button onClick={() => deleteOrder(order._id)} className='btn btn-error' >Yes</button>
                                            <a href="#1" className="btn btn-success">NO</a>
                                        </div>
                                    </div>
                                </div>
                                {/* -----------------------------------------  */}
                                

                            </>}

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