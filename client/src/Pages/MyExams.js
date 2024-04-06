import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const MyExams = () => {

  const [teacher_name,setTeacherName] = useState("")
  const [examData, setExamData] = useState([])

    useEffect(() => {

        const items = JSON.parse(localStorage.getItem('user'));
        setTeacherName(items.name)
        
         axios.get(`http://localhost:8000/api/get_myexam/${items.mahe_id}`)
             .then(response => {
               console.log(response.data)
               setExamData(response.data)
             })
             .catch(error => {
               console.log(error);
            });
    
      }, [])

      const leaveExam = (subjCode) => {
        axios.put('http://localhost:8000/api/leave_invj/',{
          subjCode: subjCode
        }).then(response => {
            toast.success('Left Exam Duty!')
        }).catch(error => {
            toast.error('Error')
        })
      }

  return (
    <div className='bg-orange-400 h-screen font-sans p-3'>
       <div className='text-white font-bold text-3xl'>MyExams</div>
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
                    return(
                        <tr className='bg-white'>
                            <th className='px-6 py-4'>{exam.startDate}</th>
                            <th className='px-6 py-4'>{exam.subjCode}</th>
                            <th className='px-6 py-4'>{exam.subjName}</th>
                            <th className='px-6 py-4'>{exam.startTime}</th>
                            <th className='px-6 py-4'>{exam.endTime}</th>
                            <th className='px-6 py-4'>{exam.classRoom}</th>
                            <th><button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={(e) => leaveExam(exam.subjCode)}>Leave</button></th>
                        </tr>
                        //onClick={(e) => addInvig(exam.subjCode)}
                        
                    )
                })}
            </tbody>     
        </table>
        
    </div>
  )
}

export default MyExams