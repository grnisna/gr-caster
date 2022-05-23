import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const navigate = useNavigate();
    const { name, image, description, price, weight, model, _id } = tool;
    return (
        <div className="card bg-base-100 rounded-none border">
            <div className='w-48 mx-auto '><img src={image} alt="tools" /></div>
            <div className="card-body border">
                <h2 className="card-title">Name: {name}</h2>
                <h3 className="card-title">Model: {model}</h3>
                <h3>Total Weight: {weight} </h3>
                <h4>Price:${price} per dozen </h4>
                <p>{description}</p>
                <div className="">
                    <Link to={`/purchase`}> <button className="btn btn-primary w-full hover:bg-warning border-0">Purchases</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;