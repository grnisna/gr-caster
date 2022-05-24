import React, { useEffect, useState } from 'react';
import Review from './Review';



const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        <div className='py-10 '>
            <h1 className='text-center text-3xl text-primary font-bold divider'>Our Clients Reviews  </h1>

            <div className='md:flex lg:flex flex-none justify-center items-center gap-10'>
                {
                    reviews.slice(0,3).map((review, index) => <Review
                        key={index}
                        review={review}
                    ></Review>)
                }
            </div>

            

        </div>
    );
};

export default Reviews;