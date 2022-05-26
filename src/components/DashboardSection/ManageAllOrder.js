import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../pages/SharedPages/Loading/Loading';

const ManageAllOrder = () => {
    const { data: allOrder, isLoading, refetch } = useQuery('allOrder', () => fetch('http://localhost:5000/manageorder').then(res => res.json()));
    console.log(allOrder);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Item picture</th>
                        <th>Item name</th>
                        <th>Item Model</th>
                        <th>Booking Qnt</th>
                        <th>Buyer Email</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>

                    {allOrder.map((order,index) => <tr key={order._id}>
                        <th>{index + 1} </th>
                        <td>
                            <img className='w-10' src={order.image} alt="" />
                        </td>
                        <td>{order.name}</td>
                        <td>{order.model}</td>
                        <td>{order.bookingQuantity}</td>
                        <td>{order.email}</td>
                        <td></td>


                    </tr>)}



                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrder;