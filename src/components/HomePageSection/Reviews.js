import React, { useEffect, useState } from 'react';
import Review from './Review';



const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-cove-84612.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        <div className='py-10 '>
            <h1 className='text-center text-3xl text-primary font-bold divider'>Our Clients Reviews  </h1>

            <div className='md:flex lg:flex flex-none justify-center items-center gap-10'>
                {
                    reviews.map((review, index) => <Review
                        key={index}
                        review={review}
                    ></Review>).reverse().slice(0,3)
                }
            </div>

            

        </div>
    );
};

export default Reviews;