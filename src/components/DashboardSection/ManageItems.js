import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../pages/SharedPages/Loading/Loading';

const ManageItems = () => {
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://aqueous-cove-84612.herokuapp.com/tool').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const removeItem = (id) => {
        fetch(`https://aqueous-cove-84612.herokuapp.com/tool/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('SuccessFully Remove item');
                refetch();
            })
    }

    return (
        <>
            <h1 className='text-center text-4xl text-primary font-extrabold bg-base-100 py-10'>Manage Products ({tools.length})</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Product Name</th>
                            <th>Weight</th>
                            <th>Available DZN</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool, index) => <tr
                                key={tool._id}
                            >
                                <th>{index + 1} </th>
                                <td>
                                    <div className="avatar bg-slate-400">
                                        <div className="w-24 rounded-xl ">
                                            <img src={tool.image} alt='items' />
                                        </div>
                                    </div>
                                </td>
                                <td>{tool.name} </td>
                                <td>{tool.weight}</td>
                                <td>{tool.available}</td>
                                <td>

                                    <a href="#my-modal-10" className="btn btn-error">Remove</a>

                                    <div className="modal" id="my-modal-10">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg text-center">Want to remove {tool.name}</h3>
                                            <div className="modal-action flex justify-center">
                                                <button onClick={() => removeItem(tool._id)} className='btn btn-error'>Remove</button>
                                                <a href="#" className="btn btn-success">NO</a>
                                            </div>
                                        </div>
                                    </div>

                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ManageItems;