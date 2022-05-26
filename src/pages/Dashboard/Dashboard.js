import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import bgImage from '../../assets/dashboardImage.jpg';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile min-h-screen ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />


            <div className="drawer-content py-10" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                {/* <!-- Page content here --> */}

                <Outlet></Outlet>

            </div>

            <div className="drawer-side w-44 lg:max-w-lg ">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4   bg-slate-400 text-base-content ">
                    {/* <!-- Sidebar content here --> */}
                    <h2 className='text-2xl text-center text-accent' >Navigation</h2>
                    <div className='divider m-0 p-0' ></div>
                    
                    {
                        !admin ?
                            <li>
                                <Link to='/dashboard'>My orders</Link>
                                <Link to={'/dashboard/myreview'}>Add Comments</Link>
                                <Link to={'/dashboard/myprofile'}>My Profile</Link>

                            </li>
                            :
                            <li>
                                <Link  to={'/dashboard/admin'}>All Users</Link>
                                <Link to={'/dashboard/manageitems'}>Manage Items</Link>
                                <Link to={'/dashboard/manageallorder'}>Manage Orders</Link>
                                <Link to={'/dashboard/addnewitem'}>Add New Item</Link>
                                <Link to={'/dashboard/myprofile'}>My Profile</Link>
                            </li>
                    }


                </ul>
            </div>
        </div>

    );
};

export default Dashboard;