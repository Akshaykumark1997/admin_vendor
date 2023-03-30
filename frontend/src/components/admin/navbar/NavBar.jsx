import React from 'react'

function NavBar() {
  return (
    <>
    <div className='flex'>
      <div className='bg-dark-purple h-screen p-5  pt-8 sm:w-72 w-25 '>
      <div className='sm:pl-6 pl-2 sm:text-2xl text-lg text-white'>
        <h1>Admin</h1>
      </div>
      <ul className='pt-12'>
        <li className='flex rounded-md p-4 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center   justify-center'>
          <img src="/image/Chart.png" alt="text" className='hover:bg-light-white'/><span className='hidden sm:block px-2'>Dashboard</span>
        </li>
        <li className='flex rounded-md p-4 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center  justify-center'>
          <img src="/image/folder.png" alt="text" className='hover:bg-light-white' /><span className='hidden sm:block px-2'>Dashboard</span>
        </li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default NavBar