import React from 'react'
import icons from '../Assets/icons'
import images from '../Assets/images/images'

export const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between h-20 px-3'>
        <div className='w-3/12 flex items-center space-x-4'>
            <icons.menu className='text-xl text-gray-900 cursor-pointer'/>
            <div className='flex'>
            <img className='w-8' src={images.youtube} alt=''/>
            <div className='text-3xl'>YumakTube</div>
            </div>
        </div>

        <div className='w-6/12 flex items-center space-x-4'>
            <div className='w-3/4 flex items-center'>
                <input className='outline-none border p-2 h-10 flex-1' type='text' placeholder='Ara'/>
                <div className='bg-gray-100 h-10 w-20 flex items-center justify-center border'>
                <icons.search className='text-2xl text-gray-900 cursor-pointer'/>
                </div>
            </div>
            <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
            <icons.microphone className='text-2xl text-gray-900 cursor-pointer'/>
            </div>
            
        </div>
        <div className='w-3/12 flex items-center justify-end space-x-5'>
        <icons.video className='text-2xl text-gray-900 cursor-pointer'/>
        <icons.notification className='text-2xl text-gray-900 cursor-pointer'/>
        <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
        </div>
    </div>
  )
}
