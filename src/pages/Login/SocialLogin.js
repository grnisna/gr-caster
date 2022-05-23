import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedPages/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate('/home');
        }
    },[navigate,user]);

    if(loading){
        return <Loading></Loading>;
    }


    return (
        <div>
            <div className="divider">OR</div>
            {error && <p className='text-error' > {error.message} </p>}
            <button onClick={()=>signInWithGoogle()} className='btn btn-outline w-full text-primary'>Login with Google</button>
        </div>
    );
};

export default SocialLogin;