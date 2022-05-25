import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../pages/SharedPages/Loading/Loading';

const ManageItems = () => {
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tool').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const removeItem = (id) => {
        fetch(`http://localhost:5000/tool/${id}`, {
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
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

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
                                    <div class="avatar bg-slate-400">
                                        <div class="w-24 rounded-xl ">
                                            <img src={tool.image} alt='items' />
                                        </div>
                                    </div>
                                </td>
                                <td>{tool.name} </td>
                                <td>{tool.weight}</td>
                                <td>{tool.available}</td>
                                <td>

                                    <a href="#my-modal-10" class="btn btn-error">Remove</a>

                                    <div class="modal" id="my-modal-10">
                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg text-center">Want to remove {tool.name}</h3>
                                            <div class="modal-action flex justify-center">
                                                <button onClick={() => removeItem(tool._id)} className='btn btn-error'>Remove</button>
                                                <a href="#" class="btn btn-success">NO</a>
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