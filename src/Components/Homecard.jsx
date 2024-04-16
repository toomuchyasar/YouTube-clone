import React from 'react'
import images from '../Assets/images/images'
import moment from 'moment'

export const Homecard = ({video}) => {
  return (
    <div className='w-[300px] m-3 cursor-pointer'>
        <img src={video.snippet.thumbnails.high.url} alt="" />
        <div className='font-bold mt-1'> {(video.snippet.title).substring(0,65)}...</div>
        <div className='text-xs mt-1 tracking-wider text-gray-700'>{video.snippet.channelTitle}</div>
        <div className='text-xs mt-1 tracking-wider text-gray-700'> 
            <span>100K Görüntülenme.</span>
            <span>{moment(video.snippet.publishedAt).startOf('day').fromNow()}</span>
        </div>
    

    </div>
  )
}
