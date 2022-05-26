import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import commentImage from '../../assets/comments.jpg';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageApiKey = '5fbcdb5a428c028af61f3741571ad322';

    const handleReview = async (data, event) => {



        const name = event.target.name.defaultValue;
        const comment = event.target.review.defaultValue;

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const URL = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;

        fetch(URL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const commentImage = data.data.url;
                    const review = {
                        name: name,
                        comment: comment,
                        image: commentImage

                    };

                    fetch('https://aqueous-cove-84612.herokuapp.com/review',{
                        method:'POST',
                        headers:{'content-type':'application/json'},
                        body:JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(data => {
                           
                            if (data.insertedId) {
                                toast.success('successFully added your comment');
                                reset();
                            }
                            else {
                                toast.error('failed to added your comment');
                                reset();
                            }
                        })


                }
            })



    }
    
    return (
        <>
        <h1 className='text-center text-4xl text-primary font-extrabold bg-base-100 py-10'>Add Review</h1>

        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleSubmit(handleReview)}>


                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={commentImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-2xl text-green-700 text-center'>Deploy Your Own Opinion</h1>

                            <div className="form-control">
                                <input type="text" name='name' placeholder="Your Name" defaultValue={user.displayName} readOnly className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <input type="file"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                    {...register('image', {
                                        required: {
                                            value: true,
                                            message: 'Need to upload YOur comment photo'
                                        }
                                    })}

                                />

                                <label>
                                    {errors.image?.type === 'required' && <span className='text-error'>{errors.image.message} </span>}
                                </label>
                            </div>


                            <div className="form-control">
                                <textarea className="textarea textarea-bordered" name='review' placeholder="Your Comments"></textarea>
                            </div>

                            <div className=" flex">
                                <p htmlFor="">Ratting: </p>
                                <div className="rating">
                                    <input type="radio" name="rating1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
        </>
    );
};

export default AddReview;