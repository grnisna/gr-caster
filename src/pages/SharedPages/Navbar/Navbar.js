import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/Logo (2).png';
import auth from '../../../firebase.init';


const Navbar = ({ children }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = () => {
        signOut(auth);
        navigate('/login');
        localStorage.removeItem('userToken');
    }
    return (
        <div className="drawer drawer-end ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-100">

                    {/* // --------------- dashboard menu bar --------------- / */}
                    <label for="my-drawer" class="  swap swap-rotate lg:hidden">
                        <input type="checkbox" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>

                    <div className="flex-1 px-2 mx-2 ">
                        <Link to='/'><img className='w-48' src={logo} alt="" /></Link>

                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><NavLink to='/home'>HOME</NavLink></li>
                            <li><NavLink to={`/purchase`}>ALL PRODUCT</NavLink></li>
                            <li><NavLink to='/blogs'>BLOGS</NavLink></li>

                            <li>{user ? <>
                                <NavLink to='/dashboard'>DASHBOARD</NavLink>
                                <button onClick={handleLogOut} >LOGOUT</button>
                                <span> {user.displayName} </span>
                            </>
                                :
                                <NavLink to='/login'>LOGIN</NavLink>}</li>
                        </ul>

                    </div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
                {/* <!-- Page content here --> */}

                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu  overflow-y-auto w-48 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/home'>HOME</NavLink></li>
                    <li><NavLink to='/purchase'>ALL PRODUCTS</NavLink></li>
                    <li><NavLink to='/blogs'>BLOGS</NavLink></li>
                    <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
                    <li><NavLink to='/login'>LOGIN</NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default Navbar;