import React from 'react'
import { FaUsers } from 'react-icons/fa'
import {useAuth} from '../../context/authContext'

const Summary = () => {
    const {user}=useAuth();
  return (
    <div className='p-6'>
      <div className='rounded flex bg-white'>
        <div className={`text-3xl flex justify-center items-center bg-teal-600 text-white px-4`}>
            <FaUsers/>
        </div>
        <div className='pl-4  h-14'>
            <p className='text-lg font-semibold'>Welcome Back</p>
            <p>{user ? user.name : "No"}</p>
        </div>
      </div>
    </div>
  )
}

export default Summary