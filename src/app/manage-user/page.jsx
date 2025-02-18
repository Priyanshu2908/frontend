'use client'
import axios from 'axios'
import React, { useEffect } from 'react'

const ManageUser = () => {
    const fetchUserData = async () => {
        await axios.get('http://localhost:5000/user/getall');
        console.table(res.Data);
    }
    useEffect(() => {
      fetchUserData()
    }, [])
    
  return (
    <div>
        <div className='max-w-[80%] mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Manage User</h1>
        </div>
    </div>
  )
}

export default ManageUser