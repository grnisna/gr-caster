import React, { useState } from 'react';
import {AiFillStar} from 'react-icons/ai';


const Review = ({ review }) => {
    const { name, comment, ratting , image} = review;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{comment}</p>
                    <p>Ratting: <span className='text-warning'> {ratting} </span></p>

                </div>
            </div>
            

                
            
        </div>
    );
};

export default Review;