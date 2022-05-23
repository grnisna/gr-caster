import React from 'react';

import loginImage from '../../assets/loginBackgoundImge.jpg';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { MdOutlineSecurity } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';




const Login = () => {
    const navigate = useNavigate();
    // --------- exists user ---------- 
    const [user] = useAuthState(auth);
    const email = user?.email;
    // ------------------ signIn account =-------------- 
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    // --------------react  form ----------
    const { register, formState: { errors }, handleSubmit } = useForm();

    // submit form to login------------ 
    const onSumit = async data => {
        
       await signInWithEmailAndPassword(data.email, data.password);

    }


    return (
        <div style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

            <form onSubmit={handleSubmit(onSumit)} className="form-control lg:w-1/4 md:w-1/3 w-full border p-5 my-10  mx-auto bg-base-100" >
                {/* ------------ title ---------------- */}
                <h1 className='text-center text-2xl my-6'>Log in Form</h1>

                {/* -------- email address -------------- */}
                <label>
                    <span>Your Email Address</span>
                </label>
                <input
                    type="email"
                    name='email'
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
                    name='password'
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

                {/* ------------- submit ----------------- */}
                <input 
                type="submit" 
                value="Login" 
                className='btn btn-primary w-full my-5'

                />

                <p>No Account?
                    <span className='text-primary' ><Link to='/signup'> Registration </Link></span>
                </p>

            </form>

        </div>
    );
};

export default Login;