
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';



const MyProfile = () => {

    const [user] = useAuthState(auth);
    const email = user.email;
    const [profiles, setProfiles] = useState({});

    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    // ----------------------------------------------------------------------------- 
    useEffect(() => {
        fetch(`https://aqueous-cove-84612.herokuapp.com/profile?email=${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('userToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProfiles(data))
    }, [email])
    // ----------------------------------------------------------------------------- 




    const imageApiKey = '5fbcdb5a428c028af61f3741571ad322';


    const handleProfile = async data => {
        const name = data.name;
        const email = data.email;
        const education = data.education;
        const location = data.location;
        const social = data.social;

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);


        const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;

        fetch(url, { method: 'POST', body: formData })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const img = data.data.url;
                    const myProfile = {
                        image: img,
                        name: name,
                        email: email,
                        education: education,
                        location: location,
                        social: social
                    }


                    fetch(`https://aqueous-cove-84612.herokuapp.com/profile`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('userToken')}`
                        },
                        body: JSON.stringify(myProfile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('Your Profile Updated');

                                reset();

                            }
                            else {
                                toast.error('Not updated your profile');
                                reset();
                            }
                        })
                }
            })


    }

    return (
        <>
            <h1 className='text-center text-4xl text-primary font-extrabold bg-base-100 py-10'>My Profile</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left ">


                        < div className="card lg:w-96 bg-base-100 shadow-xl">

                            <figure><img className='rounded w-32 mt-10  ring ring-primary ring-offset-base-100 ring-offset-2' src={profiles?.image} alt="profile pic" /></figure>

                            <div className="card-body">
                                <h2 className="card-title"> Name: {profiles?.name} </h2>
                                <p>My Eduction : {profiles?.education}</p>
                                <p>My location : {profiles?.location}</p>
                                <p>Linkedin  : {profiles?.social}</p>

                            </div>
                        </div>

                    </div>

                    {/* --------------------------- profile form -------------------------------  */}
                    <div className="card flex-shrink-0 lg:w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(handleProfile)}>

                            <div className="lg:p-5 p-2">
                                <h1 className='text-2xl text-green-700 text-center'>SetUp Profile</h1>

                                <div className="form-control my-2">
                                    <input type="file"
                                        placeholder="Your photo"
                                        className="input input-bordered"

                                        {...register('image', {
                                            required: {
                                                value: true,
                                                message: 'Need to upload Your photo'
                                            }
                                        })}
                                    />
                                    <label>
                                        {errors.image?.type === 'required' && <span className='text-error'>{errors.image.message} </span>}
                                    </label>
                                </div>

                                <div className="form-control my-2">
                                    <input type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered"
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message: 'Write Your Name'
                                            }
                                        })}

                                    />

                                    <label>
                                        {errors.name?.type === 'required' && <span className='text-error'>{errors.name.message} </span>}
                                    </label>
                                </div>
                                <div className="form-control my-2">
                                    <input type="email"
                                        placeholder="Your Email Address"
                                        className="input input-bordered"
                                        value={email}
                                        readOnly
                                        {...register('email', {
                                            required: {
                                                value: true,
                                                message: 'Please write your Email address'
                                            }
                                        })}

                                    />

                                    <label>
                                        {errors.email?.type === 'required' && <span className='text-error'>{errors.email.message} </span>}
                                    </label>
                                </div>
                                <div className="form-control my-2">
                                    <input type="text"
                                        placeholder="Your Education Qualification"
                                        className="input input-bordered"
                                        {...register('education', {
                                            required: {
                                                value: true,
                                                message: 'Please Write Down Your education'
                                            }
                                        })}

                                    />

                                    <label>
                                        {errors.education?.type === 'required' && <span className='text-error'>{errors.education.message} </span>}
                                    </label>
                                </div>

                                <div className="form-control my-2">
                                    <input type="text"
                                        placeholder="Yoru Location"
                                        className="input input-bordered"
                                        {...register('location', {
                                            required: {
                                                value: true,
                                                message: 'Need Your Location'
                                            }
                                        })}

                                    />

                                    <label>
                                        {errors.location?.type === 'required' && <span className='text-error'>{errors.location.message} </span>}
                                    </label>
                                </div>

                                <div className="form-control my-2">
                                    <input type="text"
                                        placeholder="Linkedin profile links "
                                        className="input input-bordered"
                                        {...register('social', {
                                            required: {
                                                value: true,
                                                message: 'Need Linkedin profile links'
                                            }
                                        })}

                                    />

                                    <label>
                                        {errors.social?.type === 'required' && <span className='text-error'>{errors.social.message} </span>}
                                    </label>
                                </div>




                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Submit</button>


                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
};

export default MyProfile;