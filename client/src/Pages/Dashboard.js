

import React, { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const [teacher_name,setTeacherName] = useState("")
  const [teacher_id,setTeacherId] = useState("")
  const [examData,setExamData] = useState([])

  const [selectedSubj,setSelectedSubj] = useState("")


  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(subjCode) {
    setIsOpen(true)
    setSelectedSubj(subjCode)
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    setTeacherName(items.name)
    setTeacherId(items.mahe_id)

     axios.get('http://localhost:8000/api/get_exam/')
         .then(response => {
           console.log(response.data)
           setExamData(response.data)
         })
         .catch(error => {
           console.log(error);
        });

  }, [])

  const addInvig = () => {
    closeModal()
    console.log(selectedSubj)

    
    axios.put('http://localhost:8000/api/add_invj/',{
        mahe_id : teacher_id,
        subjCode: selectedSubj
    })
    .then(response => {
      toast.success('Invigilation Booked')
      console.log(response)
    })
    .catch(error => {
      toast.error('Error in Invigilation!')
      console.log(error);
   });


  }
  
  return (
    <div className='bg-orange-400 h-screen font-sans p-3'>
     <div className='text-white font-bold text-3xl'>Dashboard</div> 
     <div className='text-white font-bold text-3xl mt-5'>Welcome {teacher_name}</div> 
     <div className='mt-5'>
     <Link to='/myexams' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2'>View MyExams</Link>
     </div>
     <div className='border border-white rounded-md mt-10 p-5 font-bold text-2xl'>
      Upcoming Exams
    
      <table className="w-full text-sm mt-10">
            <thead className="text-sm uppercase bg-white">
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
                        Start Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                        End Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Class Room
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Invigilate
                    </th>
                </tr>
            </thead>
            <tbody>
                {examData.length === 0 ? <tr className='text-xl w-full bg-orange-400 flex justify-center'><th>No Upcoming Exams </th></tr> : examData.map(exam => {
                    let date = exam.startDate.split("-").reverse().join("-");
                    return(
                        <tr className='bg-white'>
                            <th className='px-6 py-4'>{date}</th>
                            <th className='px-6 py-4'>{exam.subjCode}</th>
                            <th className='px-6 py-4'>{exam.subjName}</th>
                            <th className='px-6 py-4'>{exam.startTime}</th>
                            <th className='px-6 py-4'>{exam.endTime}</th>
                            <th className='px-6 py-4'>{exam.classRoom}</th>
                            <th>
                           {exam.mahe_id == null || exam.mahe_id == "" ?                      
                                <button type="button" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"  onClick={(e) => openModal(exam.subjCode)} >Invigilate</button>
                                : <p>Booked</p>
                           }
                            </th>
                        </tr>
                        //onClick={(e) => addInvig(exam.subjCode)}
                        
                    )
                })}
            </tbody>     
        </table>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Are you sure you want to Invigilate this exam?
                  </Dialog.Title>

                  <div className="mt-4 ml-24">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      No
                    </button>
                    <button
                      type="button"
                      className="inline-flex ml-20 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={addInvig}
                    >
                      Yes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
     </div>
    </div>
  )
}

export default Dashboard

