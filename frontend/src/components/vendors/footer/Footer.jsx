import React from 'react'

function Footer() {
  return (
    <div className='max-w-[1500px] mx-auto box-border'>
        <div className='border-t-2 flex flex-col sm:flex-row items-center justify-between px-8 py-8'>
            <div className='flex flex-col sm:flex-row items-center'>
                <span className='font-semibold text-xl mr-2 text-gray-700'>Ideal Vendors</span>
                <span className='text-center text-gray-500'>© ideal vendors all rights reserved. 2023.</span>

            </div>
            <div className='flex text-gray-500'>
                <p>About</p> 
                <p className='px-2'>Contact Us</p>
            </div>

        </div>
    </div>
  )
}

export default Footer