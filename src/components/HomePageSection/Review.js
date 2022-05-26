import React from 'react';



const Review = ({ review }) => {
    const { name, comment, ratting, image } = review;

    return (
        <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-32" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{comment}</p>

                    <div  className='flex justify-evenly' >
                        <p>Ratting: <span className='text-warning'> {ratting} </span></p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default Review;