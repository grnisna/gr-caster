import React from 'react';
import bgImage from '../../assets/industrialBG.jpg';
import {BsPeople} from 'react-icons/bs';
import {CgFlag} from 'react-icons/cg';
import {MdEventNote} from 'react-icons/md';

const BusinessSummary = () => {
    return (
        <div className='py-16' style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            
                <h1 className='lg:text-5xl md:text-5xl text-3xl text-center font-bold text-base-100 '>SUMMARY OF OUR BUSINESS</h1>
            
            <div  className="lg:flex md:flex flex-none justify-center items-center ">

                <div className='w-64 md:w-72 lg-w-96  bg-success p-5 rounded-tr-3xl rounded-bl-3xl lg:mx-5 md:mx-5 mx-auto   '>
                    <span className='text-7xl text-accent '><CgFlag className='text-center'/></span>
                    <h1 className='text-3xl text-accent text-center'>Supply Countries</h1>
                    <h3 className='text-2xl bg-base-100 text-accent text-center rounded mt-2'>18+</h3>
                </div>
                <div className='w-64 md:w-72 lg-w-96 my-10 bg-success p-5 rounded-tr-3xl rounded-bl-3xl lg:mx-5 md:mx-5 mx-auto '>
                    <span className='text-7xl text-accent '><MdEventNote className='text-center'/></span>
                    <h1 className='text-3xl text-accent text-center'>Completed Orders</h1>
                    <h3 className='text-2xl bg-base-100 text-accent text-center rounded mt-2'>1278+</h3>
                </div>
                <div className='w-64 md:w-72 lg-w-96  bg-success p-5 rounded-tr-3xl rounded-bl-3xl lg:mx-5 md:mx-5 mx-auto  '>
                    <span className='text-7xl text-accent '><BsPeople className='text-center'/></span>
                    <h1 className='text-3xl text-accent text-center'>Happiness Client</h1>
                    <h3 className='text-2xl bg-base-100 text-accent text-center rounded mt-2'>11278+</h3>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;