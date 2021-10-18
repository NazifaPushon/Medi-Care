import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import initializeAuthentication from "../../firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import UnderLine from "../UnderLine/UnderLine";

initializeAuthentication()

const SignUp = () => {
  const history = useHistory()
  const location = useLocation()
  const redirect_URL = location.state?.from || '/'
  const { signUp, profileUpdate , setIsLoading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, userName } = data
    signUp(email, password, userName)
      .then(() => {
        profileUpdate(userName)
        history.push(redirect_URL)
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
  };
  return (
    <main className="h-screen w-full my-10">
      <h1 className="text-center text-3xl font-semibold">MADI CARE SIGN UP</h1>
      <UnderLine />
      <div className="flex justify-center items-center">
        <form
          className="bg-white w-96 mt-6 p-4 rounded-lg my-shadow"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="input"
            {...register("userName", { required: true })}
            type="text"
            placeholder="User Name"
          />
          {errors.userName && (
            <p className="text-red-500">User Name is required</p>
          )}

          <input
            className="input"
            {...register("email", { required: true })}
            type="email"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-500">Your Email is required</p>
          )}

          <input
            className="input"
            {...register("password", { required: true })}
            type="password"
            placeholder="Your Password"
          />
          {errors.password && (
            <p className="text-red-500">Your Password is required</p>
          )}

          <input type="submit" className="btn-3" value="Sign Up" />
          <br />
          <div className="text-center my-5">
            <NavLink
              to="/login"
              className="text-normal  text-red-500 hover:underline"
            >
              {" "}
              Already have an Account ?{" "}
            </NavLink>
          </div>
          <br />
          <GoogleSignIn text="Login With Google" />
        </form>
      </div>
    </main>
  );
};

export default SignUp;