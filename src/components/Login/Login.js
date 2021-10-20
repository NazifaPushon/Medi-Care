import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import UnderLine from '../UnderLine/UnderLine';

//user login Components
//react hook form is used here
// login info is used form useAuth

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const redirect_URL = location.state?.from || '/'
    const { signIn, setUser , setIsLoading} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    //handle the submision of the form and login the user
    const onSubmit = data => {
        const { email, password } = data;
        signIn(email, password)
            .then((result) => {
                setUser(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'WelCome Back !',
                    text: 'Logged In Successfully',
                })
                history.push(redirect_URL)
            })
            .catch((error) => {
                let alertmessage;
                const err = error.message
                if(err.includes("wrong-password")){
                    alertmessage = "Your Password Wrog"
                }else if (err.includes("user-not-found")){
                    alertmessage = "User Not Found"
                }
                else{
                    alertmessage = "Something went wrong"
                }
                Swal.fire({
                    icon: 'error',
                    title: alertmessage,
                    text: error.message,
                })
            }).finally(() => {
                setIsLoading(false)
            });
    };

    return (
        <main className="h-screen mx-5 my-10">
            <h1 className="text-center text-3xl font-semibold">MADI CARE LOGIN</h1>
            <UnderLine />
            <div className="flex justify-center items-center">
                <form className="bg-white w-96 mt-6 p-4 rounded-lg my-shadow" onSubmit={handleSubmit(onSubmit)}>
                    
                    <input className="input" {...register("email", { required: true })} type="email" placeholder="Your Email" />
                    {errors.email && <p className="text-red-500">Email is required</p>}

                    <input className="input" {...register("password", { required: true })} type="password" placeholder="Your Password" />
                    {errors.password && <p className="text-red-500">Password is required</p>}

                    <input type="submit" className="btn-3" value="Login" />
                    <br />
                    <div className="text-center my-5">
                        <NavLink to="/signUp" className="text-normal  text-red-500 underline"> Need An Account ? </NavLink>
                    </div>
                    <br />
                    <GoogleSignIn text="Login With Google" />
                </form>
            </div>
        </main>
    );
};

export default Login;