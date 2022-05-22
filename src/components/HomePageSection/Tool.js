import React from 'react';

const Tool = ({ tool }) => {
    const { name, image, description, price, weight, model } = tool;
    return (
        <div class="card bg-base-100 rounded-none border">
            <div className='w-48 mx-auto '><img src={image} alt="tools" /></div>
            <div class="card-body border">
                <h2 class="card-title">Name: {name}</h2>
                <h3 class="card-title">Model: {model}</h3>
                <h3>Total Weight: {weight} </h3>
                <h4>Price:${price} </h4>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary w-full hover:bg-warning border-0">Purchases</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;