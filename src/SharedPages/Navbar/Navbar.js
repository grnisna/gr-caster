import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo (2).png';

const Navbar = ({ children }) => {
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar bg-base-100">

                    <div class="flex-1 px-2 mx-2 ">
                        <img className='w-48' src={logo} alt="" />
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><NavLink to='/home'>HOME</NavLink></li>
                            <li><NavLink to='/purchase'>PURCHASE</NavLink></li>
                            <li><NavLink to='/blogs'>BLOGS</NavLink></li>
                            <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
                            <li><NavLink to='/login'>LOGIN</NavLink></li>
                        </ul>
                    </div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
                {/* <!-- Page content here --> */}

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu  overflow-y-auto w-48 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/home'>HOME</NavLink></li>
                    <li><NavLink to='/purchase'>PURCHASE</NavLink></li>
                    <li><NavLink to='/blogs'>BLOGS</NavLink></li>
                    <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
                    <li><NavLink to='/login'>LOGIN</NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default Navbar;