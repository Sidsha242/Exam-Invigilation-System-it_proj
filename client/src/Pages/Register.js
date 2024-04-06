import React from 'react'
import { useState } from "react";

import axios from 'axios';
import toast from 'react-hot-toast';


const Register = () => {
  const [mahe_id, setMaheId] = useState("");
  const [regpassword, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/register/',{
      mahe_id: mahe_id,
      password: regpassword,
      name: name
    })
      .then(response => {
        if(response.status === 201)
        {
            setMessage('Registered');
            toast.success('Registered!')
            setTimeout(() => {
              window.location.href = "/login";
            }, 1000)
        }
      })
      .catch(error => {
        toast.error('Invalid Registration!')
        console.log(error);
      });

  }

  return (
    <div className=' bg-hero-pattern font-sans bg-opacity-50'>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-white rounded-lg">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-400 md:text-2xl">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="mahe_id" className="mr-2 font-bold">
                Mahe Id :
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
                id="mahe_id"
                placeholder='MAHE0000000'
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
                name="password"
                value={regpassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
            <label htmlFor="name" className="mr-2 font-bold">
                Name :
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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