import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth()
    return (
        <div>
            <button onClick={signInWithGoogle} className="btn-1">
                google Sign In
            </button>
        </div>
    );
};

export default Login;