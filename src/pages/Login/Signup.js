import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import loginImage from '../../assets/loginBackgoundImge.jpg';
import Loading from '../SharedPages/Loading/Loading';
import SocialLogin from './SocialLogin';



const Signup = () => {
    const [errror, setErrror] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/purchase';

    // --------------react  form ----------
    const { register, formState: { errors }, handleSubmit } = useForm();

    // ------------ input sign in ------------  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // update profile =-----------------------------
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // navigate to other route 
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [navigate, user, from]);

    // loading ------------
    if (loading || updating) {
        return <Loading></Loading>
    };

    if (error || updateError) {
        const errorMessage = error.message;
        setErrror(errorMessage);
    }


    // ---------------submit button --------------
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password);
        updateProfile({ displayName: data.name });
    };

    return (
        <div style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>


            {/* ---------error handleing by react hook form ---------  */}
            <form onSubmit={handleSubmit(onSubmit)} className="form-control lg:w-1/4 md:w-1/3 w-full border p-5 my-10  mx-auto bg-base-100">

                <h2 className="text-center text-2xl">
                    Registration Form
                </h2>

                {/* divider  */}
                <div className="divider"></div>

                <div className="form-control w-full max-w-xs">

                    {/* ------------------name -------------  */}
                    <label className="label">
                        <span className="label-text">Your name</span>
                    </label>

                    <input type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Require Your Name'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='text-red-500' >{errors.name.message}</span>}

                    </label>
                    {/* ------------------email -------------  */}
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Require email address'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provided valid email pattern'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className='text-red-500' >{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-red-500' >{errors.email.message}</span>}

                    </label>
                    {/* --------------password----------  */}
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"
                        placeholder="Your Password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Require password address'
                            },

                            minLength: {
                                value: 6,
                                message: 'Provided valid password pattern'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className='text-error' >{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='text-error' >{errors.password.message}</span>}
                    </label>
                </div>

                {/* ------------- error message =-------------------- */}
                {errror}

                {/*----------- submit input =------------------- */}
                <input type="submit" className='btn btn-primary w-full max-w-xs ' value='registraion' />

                <p>Already have Account?
                    <span className='text-primary' ><Link to='/login'> Login</Link></span>
                </p>

                {/* ------------ social login --------------  */}
                <SocialLogin></SocialLogin>

            </form>



        </div>
    );
};

export default Signup;