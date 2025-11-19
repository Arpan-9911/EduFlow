import React from 'react'

const JoinClassBox = ({ setShowJoinClassBox }) => {
  return (
    <div className='fixed inset-0 z-10 bg-black/50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-semibold mb-4'>Join a Class</h2>
        <input
          type='text'
          placeholder='Enter Class Code'
          className='w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition'>
          Join Class
        </button>
        <button
          onClick={() => setShowJoinClassBox(false)}
          className='bg-gray-400 w-full p-3 mt-2 rounded-lg hover:bg-gray-500 transition'
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default JoinClassBox