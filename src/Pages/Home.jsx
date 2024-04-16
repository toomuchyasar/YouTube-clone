import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Filter } from '../Components/Filter'
import { Homecard } from '../Components/Homecard'
import homeAction from '../redux/actions/HomeData'

export const Home = () => {

  const dispatch = useDispatch();
  const {getVideos} = useSelector(state => state.getVideos)

  useEffect(() => {
    dispatch(homeAction('new'))
  },[dispatch])

  console.log("getVideos ", getVideos)

  return (
    <div className='m-3'>
      <Filter/>
      <div className='flex flex-wrap m-2'>
        {
        
        
        getVideos.items?.map((video,i) => ( 
          <Homecard key={i} video={video}/>
          ))
        }
      
      
      </div>
      
    </div>
  )
}
