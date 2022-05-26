import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/404page.png';

const NotFound = () => {
    return (
        <div className="hero lg:min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-32 lg:w-full lg:h-48' src={notFoundImage} alt='notFound' />
                <div className='text-center'>
                    <h1 className="lg:text-7xl font-bold text-purple-400">Opps!!!</h1>
                    <p className="py-6 text-purple-400">Sorry!! The page you looking for doesn't exists.It could be Removed.</p>
                     <p className='text-purple-400 my-5'>Try Checking The URL for error . Then hit reload button on your browser</p>
                    <button className="btn btn-primary w-full"> <Link to='/home'>Home</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;