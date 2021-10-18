import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router';
import Swal from "sweetalert2";
import useAuth from '../../hooks/useAuth';

const GoogleSignIn = ({ text }) => {
    const history = useHistory()
    const location = useLocation()
    const redirect_URL = location.state?.from || '/'
    const { signInWithGoogle, setUser, setIsLoading } = useAuth()

    const handleClick = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_URL)
                setUser(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Greate Job',
                    text: 'Successfully logged in',
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something Went Wrong',
                    text: error.message,
                })
            }).finally(() => {
                setIsLoading(false)
            });
    }
    return (
        <>
            {/* //google signin g */}
            <div className="border-t border-gray-200 ">
                <p className="text-center text-gray-400 py-4">OR </p>
                <div className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100" onClick={handleClick} >
                    <FcGoogle className="w-6 h-6" />
                    <span className="poppins">{text}</span>
                </div>
            </div>
        </>
    );
};

export default GoogleSignIn;