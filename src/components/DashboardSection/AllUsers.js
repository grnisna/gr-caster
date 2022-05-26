import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../pages/SharedPages/Loading/Loading';

const AllUsers = () => {

    const { data: allUser, isLoading, refetch } = useQuery('allUser', () => fetch('https://aqueous-cove-84612.herokuapp.com/admin').then(res => res.json()));
    
    if(isLoading){
        return <Loading></Loading>
    }

 // make an user to admin ---------------------

    const makeAdmin = userEmail =>{
        fetch(`https://aqueous-cove-84612.herokuapp.com/admin/${userEmail}`,{
            method:'PUT',
            headers:{'authorization':`Bearer ${localStorage.getItem('userToken')}`}
        })
        .then(res => res.json())
        .then( data => {
            if(data.modifiedCount){
            toast.success('successfully Added to Admin role');
            refetch();
            }
            else{
                toast.error('Failed to make Admin role')
            }
        })
    }


    return (
        <>
        <h1 className='text-center text-4xl text-primary font-extrabold bg-base-100 py-10'>All Registered User ({allUser?.length})</h1>

        <div className='bg-base-100 ronded-lg'>
            <div >

                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>                            
                            <th>User Email</th>                            
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            allUser.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                
                                <td>{user.email}</td>
                                <td>
                                    { !user.role ? <button onClick={()=>makeAdmin(user.email)} className='btn btn-success '>Make Admin</button>: <h1 className='text-xl text-orange-600 ' >admin</h1>  }
                                    
                                </td>
                                <td>
                                    {!user.role ?  <div>

                                        <a href="#my-modal-3" className="btn btn-error">Remove</a>

                                        <div className="modal" id="my-modal-3">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg text-center">Are you Sure Want Remove user?</h3>
                                                <p className="py-4 text-center">If delete  then you lost this user</p>
                                                <div className="modal-action flex justify-between items-center">
                                                    <a href="#1" className="btn btn-success">NO</a>
                                                    <button  className='btn btn-error' >Yes</button>
                                                </div>
                                            </div>
                                        </div>

                                


                                    </div> 
                                   : <h1 className='text-xl text-orange-600 ' >No way to Remove</h1>


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

export default AllUsers;