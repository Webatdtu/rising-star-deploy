import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='animate-pulse text-center text-5xl font-bold mb-4 p-14 bg-gradient-to-tr from-red-400 via-yellow-500 to-blue-500 bg-clip-text text-transparent'>Rising Star Academy</h1>
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500'></div>
    </div>
  )
}

export default Spinner