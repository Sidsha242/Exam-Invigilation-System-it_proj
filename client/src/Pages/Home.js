import React from 'react'
import { Link } from 'react-router-dom'
import hero_pic from '../assets/manipal_pic.jpg'
const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-2 bg-[#D56330] pt-10 pl-10 pb-20'>
      <img src={hero_pic} className="rounded-lg" alt='edu-pic'></img>
      <div className="font-semibold font-sans text-white text-4xl flex flex-col space-y-10 p-10 justify-center items-center">
        Welcome to MIT Cse Department<br></br>
        Select your slot for Invigilation
        <Link to='/login' className="w-1/2 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2.5 me-2 mb-2 mt-5">Login</Link>
      </div>

      
      </div>

      <div className="pl-20 mb-10 mt-10">
          <ol className="relative border-l border-black">
            <li className="mb-5 ml-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <p className="mb-1 text-sm font-normal leading-none text-black ">
                Step 1
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Sign Up.
              </h3>
              <Link to="/register" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 mt-5">
                  {" "}
                  Sign Up
                  <svg
                    className="w-3 h-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
              </Link>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <p className="mb-1 text-sm font-normal leading-none text-black">
                Step 2
              </p>
              <h3 className="text-lg font-semibold text-gray-900 ">
                Select Exam you want to invigilate
              </h3>

            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <p className="mb-1 text-sm font-normal leading-none text-black ">
                Step 3
              </p>
              <h3 className="text-lg font-semibold text-gray-900">
                Get confirmation on your dashboard
              </h3>
            </li>
          </ol>
        </div>
    </div>
  )
}

export default Home