import React from 'react'
import { useState } from "react";

import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [regemail, setEmail] = useState("");
  const [regpassword, setPassword] = useState("");
  const [teachId, setTeachId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/register/',{
      email: regemail,
      password: regpassword,
      teacher_id: teachId
    })
      .then(response => {
        if(response.status === 201)
        {
            setMessage('Registered');
            setTimeout(() => {
              window.location.href = "/login";
            }, 1000)
        }
      })
      .catch(error => {
        console.log(error);
      });

  }

  return (
    <div className='bg-black text-white font-sans'>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-gray-800 rounded-lg">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-400 md:text-2xl">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="username" className="mr-2 font-bold">
                Email :
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
                id="email"
                name="email"
                value={regemail}
                onChange={(e) => setEmail(e.target.value)}
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
                name="password"
                value={regpassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
            <label htmlFor="teacherId" className="mr-2 font-bold">
                Teacher Id :
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
                id="teacherId"
                name="teacherId"
                value={teachId}
                onChange={(e) => setTeachId(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center"
            >
              Register
            </button>
            
          </form>
          <h2 className="font-bold text-lg">{message}</h2>
        </div>
        </div>
  </div>
  )
}

export default Register