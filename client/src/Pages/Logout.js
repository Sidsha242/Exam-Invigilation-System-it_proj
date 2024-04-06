import React from 'react'
import { useNavigate } from "react-router-dom";

const Logout = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className='bg-orange-400 h-screen flex justify-center items-center'>
      <div className='bg-white p-2 rounded-lg flex flex-col space-y-2 justify-center items-center'>
      <div className='text-2xl font-semibold  p-10 flex-col justify-center items-center'>Are you sure you want to Logout?</div>
      <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={(e) => logout()}>Yes</button>
      </div>
    </div>
  )
}

export default Logout