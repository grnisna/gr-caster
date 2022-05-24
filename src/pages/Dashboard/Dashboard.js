import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import bgImage from '../../assets/dashboardImage.jpg';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile min-h-screen ">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />


            <div class="drawer-content py-10" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                {/* <!-- Page content here --> */}
                <h1 className='text-center text-4xl font-extrabold text-accent' >About My Summary</h1>
                <Outlet></Outlet>

            </div>

            <div class="drawer-side w-44 lg:max-w-lg ">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4   bg-slate-400 text-base-content ">
                    {/* <!-- Sidebar content here --> */}
                    <h2 className='text-2xl text-center text-accent' >Navigation</h2>
                    <div className='divider m-0 p-0' ></div>
                    <li><Link to='/dashboard'>My orders</Link></li>
                    <li><Link to={'/dashboard/myreview'}>Add Comments</Link></li>
                    <li><Link to={'/dashboard/myprofile'}>My Profile</Link></li>

                </ul>
            </div>
        </div>

    );
};

export default Dashboard;