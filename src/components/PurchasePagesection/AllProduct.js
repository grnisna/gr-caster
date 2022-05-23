import React, { useEffect, useState } from 'react';

import BookNowModal from './BookNowModal';

const AllProduct = ({ tool,setItem }) => {
    
    
    const { name, image, description, price, weight, model, available, _id,minbook } = tool;
    

    // useEffect(()=>{
    // fetch(`http://localhost:5000/tool/${_id}`)
    // .then( res => res.json())
    // .then( data => setItem(data));
    // } ,[_id])

    return (
        <div className="card bg-base-100 rounded-none border">
            <div className='w-48 mx-auto '><img src={image} alt="tools" /></div>
            <div className="card-body border">
                <h2 className="card-title">Name: {name}</h2>
                <h3 className="card-title">Model: {model}</h3>
                <h3>Total Weight: {weight} </h3>
                <h4>Price:${price} per dozen </h4>
                <h4>Available: {available} dozen </h4>
                <p className='text-primary' >Note: Minimum B00k : {minbook} dozn </p>
                <p>{description}</p>

                <div className="">
                    <label
                        htmlFor="my-modal-3"
                        className="btn modal-button btn-primary w-full hover:bg-warning"
                        onClick={()=>setItem(tool)}
                    >Book Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;