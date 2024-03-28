
import React from 'react'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios'

const Admin = () => {
    const [subjCode,setSubjCode] = useState("")
    const [subjName, setSubjName] = useState("")

    const [startDate, setStartDate] = useState(new Date());
    const [startTime,setStartTime]= useState("");
    const [endTime,setEndTime] = useState("")
    const [classRoom, setClassRoom] = useState("")

    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(typeof(startDate))
        console.log(typeof(startTime))
        console.log(endTime)
    
         axios.post('http://localhost:8000/api/add_exam/',{
           subjCode: subjCode,
           subjName: subjName,
           startDate: startDate,
           startTime: startTime,
           endTime: endTime,
           classRoom : classRoom

         })
           .then(response => {
             console.log(response)
           })
           .catch(error => {
             console.log(error);
           });
    
      }
    
  return (
    <div className='bg-black p-8 font-sans h-full'>
        <div className='text-white font-bold text-3xl'>Admin</div>
        <div className="flex flex-col mt-10">
        <div className="space-y-7 bg-gray-800 rounded-lg p-16">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-400 md:text-2xl">
            Add exam
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="subjCode" className="mr-2 font-bold text-white">
                Subject Code :
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5"
                required
                id="subjCode"
                name="subjCode"
                value={subjCode}
                onChange={(e) => setSubjCode(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="subjName" className="mr-2 font-bold text-white">
                Subject Name :
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5"
                required
                id="subjName"
                name="subjName"
                value={subjName}
                onChange={(e) => setSubjName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="mr-2 font-bold text-white">
                Date :
              </label>
              <input type="date" onChange={(e) => setStartDate(e.target.value)}></input>
            </div>
            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
            {/* <div>
              <label htmlFor="password" className="mr-2 font-bold text-white">
                Start Time :
              </label>
              <div className='flex'>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
                id="subjName"
                name="subjName"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
             
              </div>
            </div>
            <div>
              <label htmlFor="password" className="mr-2 font-bold text-white">
                End Time :
              </label>
              <div className='flex'>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
                id="subjName"
                name="subjName"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
              </div>
            </div> */}
            <div>
            <label htmlFor="password" className="mr-2 font-bold text-white">
                Start Time :
              </label>
              <input type="time" value={startTime}  onChange={(e) => setStartTime(e.target.value)}></input>
            </div>
            <div>
            <label htmlFor="password" className="mr-2 font-bold text-white">
                End Time :
              </label>
              <input type="time"  value={endTime} onChange={(e) => setEndTime(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="classroom" className="mr-2 font-bold text-white">
                Classroom :
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5"
                required
                id="classroom"
                name="classroom"
                value={classRoom}
                onChange={(e) => setClassRoom(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center"
            >
              Add Exam
            </button>
            
          </form>
          <h2 className="font-bold text-lg">{message}</h2>
        </div>
        </div>
    </div>
  )
}

export default Admin