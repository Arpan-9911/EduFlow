import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createClassroom } from '../functions/classroomFunctions'
import { toast } from 'react-hot-toast'

const CreateClassBox = ({ setShowCreateClassBox }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const handleSubmit = async () => {
    if(title == '') {
      toast.error('Please enter a title')
      return
    }
    try {
      dispatch(createClassroom({ title }))
      setShowCreateClassBox(false)
    } catch (error) {
      toast.error(error.response?.data?.message || "Classroom Creation Failed")
    }
  }
  return (
    <div className="fixed inset-0 z-10 bg-black/50 flex items-center justify-center">
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-semibold mb-4'>Create a Class</h2>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter Class Title'
          className='w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          onClick={handleSubmit}
          className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition'
        >
          Create Class
        </button>
        <button
          onClick={() => setShowCreateClassBox(false)}
          className='bg-gray-400 w-full p-3 mt-2 rounded-lg hover:bg-gray-500 transition'
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default CreateClassBox