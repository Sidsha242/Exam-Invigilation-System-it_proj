

import React, { useState, useEffect } from 'react'

import axios from 'axios'

const Dashboard = () => {

  const [teacher_id,setTeacherId] = useState("")

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    setTeacherId(items.teacher_id)

    axios.get('http://localhost:8000/api/get_exam/')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });

  }, [])
  
  return (
    <div className='bg-black h-screen font-sans p-5'>
     <div className='text-white font-bold text-3xl'>Dashboard</div> 
     <div className='text-white font-bold text-3xl mt-5'>Welcome {teacher_id}</div> 
     <div className='border border-white rounded-md mt-10 text-white p-10 font-bold'>
      Upcoming Exams
     <Table></Table>
     
     </div>

      </div>
  )
}

export default Dashboard


const Table = () => {
  return(
      <div className="relative overflow-x-auto mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      Exam Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Exam Code
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Subject
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Class Room
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr className="border-b bg-gray-800 border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                      Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">
                      Silver
                  </td>
                  <td className="px-6 py-4">
                      Laptop
                  </td>
                  <td className="px-6 py-4">
                      $2999
                  </td>
              </tr>
              <tr className="border-b bg-gray-800 border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                      Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">
                      White
                  </td>
                  <td className="px-6 py-4">
                      Laptop PC
                  </td>
                  <td className="px-6 py-4">
                      $1999
                  </td>
              </tr>
              <tr className="border-b bg-gray-800 border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                      Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">
                      Black
                  </td>
                  <td className="px-6 py-4">
                      Accessories
                  </td>
                  <td className="px-6 py-4">
                      $99
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
  )
}