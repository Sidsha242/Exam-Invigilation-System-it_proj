import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';
import toast from 'react-hot-toast';



const Login = () => {

  const [mahe_id, setMaheId] = useState("");
  const [logpassword, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/login/',{
      mahe_id: mahe_id,
      password: logpassword,
    })
      .then(response => {
        console.log(response)
        if(response.data.message == 'LoggedIn'){
              setMessage('LoggedIn');
              toast.success('Logged In!');
              localStorage.setItem("user", JSON.stringify(response.data.data));
              setTimeout(() => {
                 window.location.href = "/dash";
              }, 1000)
        }
        else
        {
            toast.error('Invalid Login!')
            setMessage('Invalid Username-Password Combination')
        }
      })
      .catch(error => {
        console.log(error);
      });

  }

  return (
    <div className="h-screenfont-sans bg-hero-pattern bg-opacity-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="p-6 bg-white space-y-4 md:space-y-6 sm:p-8 rounded-lg">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-400 md:text-2xl">
              Login
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="mahe_id" className="mr-2 font-bold">
                  MAHE Id :
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  id="mahe_id"
                  value={mahe_id}
                  onChange={(e) => setMaheId(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="mr-2 font-bold">
                  Password :
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  id="password"
                  value={logpassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center"
              >
                Login
              </button>
              
            </form>
            <h2 className="font-bold text-lg">{message}</h2>

            <p className="text-sm font-light text-gray-500">
              Don't have an account yet?{" "}
              <Link
                to="/register"
                className="font-bold text-lg text-primary-600 hover:underline"
              >
                SignUp
              </Link>
            </p>
          </div>
        </div>
    </div>
  )
}

export default Login