import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../SharedPages/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [token] = useToken(user);
    useEffect(()=>{
        if(token){
            navigate(from, { replace: true });
        }
    },[navigate,token,from]);

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