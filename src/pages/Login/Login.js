import React, { useEffect, useState } from 'react';

import loginImage from '../../assets/loginBackgoundImge.jpg';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';
import Loading from '../SharedPages/Loading/Loading';
import useToken from '../../hooks/useToken';




const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user1,loading1] = useAuthState(auth);

    const from = location.state?.from?.pathname || '/';

    // ----------react form  ---------------
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || user1);

    useEffect(() => {
        if (user || user1) {
            navigate(from, { replace: true });
        }
    }, [ navigate,from,user , user1])

    //   -------loaading------
    if (loading || loading1) {
        return <Loading></Loading>
    };

    // -------error message--------
    let signInError;
    if (error) {
        signInError = <p><span className='text-error' >{error?.message} </span></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };


    return (
        <div style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>


            <form onSubmit={handleSubmit(onSubmit)} className="form-control lg:w-1/4 md:w-1/3 w-full border p-5 my-10  mx-auto bg-base-100" >
                {/* ------------ title ---------------- */}
                <h1 className='text-center text-2xl my-6'>Log in Form</h1>
                {/* divider  */}
                <div className="divider"></div>

                {/* -------- email address -------------- */}
                <label>
                    <span>Your Email Address</span>
                </label>
                <input
                    type="email"
                    placeholder='Email Address'
                    className="input input-bordered w-full max-w-xs"
                    {...register('email', {
                        require: {
                            value: true,
                            message: 'Need Email Address'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'please provided valid pattern of email'
                        }
                    })}
                />
                <label>
                    {errors.email?.type === 'require' && <p>{errors.email.message} </p>}
                    {errors.email?.type === 'pattern' && <p>{errors.email.message} </p>}
                </label>

                {/* -------- your password -----------  */}
                <label className='mt-5'>
                    <span  >Your Password</span>
                </label>
                <input
                    type="password"
                    placeholder='Email Address'
                    className="input input-bordered w-full max-w-xs"
                    {...register('password', {
                        require: {
                            value: true,
                            message: 'Need  min  6 digit legnth password'
                        },
                        minLength: {
                            value: 6,
                            message: 'please provided valid pattern of password'
                        }
                    })}
                />
                <label>
                    {errors.password?.type === 'require' && <p>{errors.password.message} </p>}
                    {errors.password?.type === 'minLength' && <p>{errors.password.message} </p>}
                </label>

                {/* -------------------errror messsage ------------  */}
                {signInError}

                {/* ------------- submit ----------------- */}
                <input
                    type="submit"
                    value="Login"
                    className='btn btn-primary w-full my-5'

                />

                <p>No Account?
                    <span className='text-primary' ><Link to='/signup'> Registration </Link></span>
                </p>

                {/* =--------------------- ?social login------------- */}
                <SocialLogin></SocialLogin>
            </form>



        </div>
    );
};

export default Login;