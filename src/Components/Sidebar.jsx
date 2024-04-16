import React from 'react'
import dataSide from '../Assets/data/dataSide'
export const Sidebar = () => {


  return (

    <div className='w-[270px] p-2 space-y-3 border-r h-screen'>
        {
            dataSide.map((data,i) => (
                <div className='flex w-[270px] items-center space-x-5 p-2 hover:bg-gray-200 cursor-pointer'>
                <span >{data.icon}</span>
                <span >{data.name}</span>
                </div>
                
            
            ))
        }
    </div>
  )
}
