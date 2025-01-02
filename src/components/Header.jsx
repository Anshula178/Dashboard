import React from 'react'

const Header = ({title}) => {
  return (
    <div className='bg-gray-800 flex justify-between bg-opacity-50 shadow-lg border-b border-gray-700 '  >
      <div className='max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
      </div>
      <div className='px-4 py-4 sm:px-4 lg:px-4 border border-gray-700'>
        <button className='text-2xl font-semibold text-gray-100  '>btn</button>
      </div>
    </div>
  )
}

export default Header
