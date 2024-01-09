import React from 'react';
import {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

console.log(errors);
  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
  <div className="flex-1 flex-col justify-center px-5 py-5 max-w-sm mx-auto border-gray-900 border-2 shadow-md p-9 rounded-md">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="https://www.pngplay.com/wp-content/uploads/7/Online-Shopping-Logo-PNG-Clipart-Background.png"
          alt="Your Company"
        />
        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form noValidate className="space-y-6" onSubmit={handleSubmit((data)=>{
          console.log(data);
        })}>
      
        <div>
            <label htmlFor="name" className="block text-sm text-left font-medium leading-6 text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                {...register("name",{ required:"please enter your name"})}
                type="name"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.name && <p className='text-white'>{errors.name.message}</p>}
            </div>
            </div>
          <div>
            <label htmlFor="email" className="block  text-left text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                {...register("email",{ required:"email is required",pattern:{value:/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,message:"email is not valid"}})}
                type="email"
              
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <p className='text-white'>{errors.email.message}</p>}

            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              
              </div>
            <div className="mt-2">
              <input
                id="password"
                {...register("password",{ required:"password is required",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,message:`at least 8 characters/n
                - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number/n
                - Can contain special characters`}})}
                type="password"
              
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && <p className='text-white'>{errors.password.message}</p>}
            </div>
            <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 mt-2 text-gray-900">
                Confirm Password
              </label>
             
            </div>
            </div>
            <div className="mt-3">
              <input
                id="confirmpassword"
                {...register("confirmpassword",{ required:"confirm password required",validate: (value, formValues) => value === formValues.password || "password not match"
              })}
                type="password"
             
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.confirmpassword && <p className='text-white'>{errors.confirmpassword.message}</p>}

            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-white">
          Already Have an Account?{' '}
          <Link to='/login' className="font-semibold leading-6 text-indigo-900 hover:text-indigo-500">
            Login to your Accout
          </Link>
        </p>
      </div>
    </div>
    </div>
  </>
)
}

