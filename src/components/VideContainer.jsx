import React from 'react'
import VideoCard from './VideoCard';
import useFetchVideos from '../hooks/useFetchVideos';
import { useSelector } from 'react-redux';

const VideContainer = () => {

  useFetchVideos(50);
  const videos=useSelector(store=>store.videos?.videoList)
  console.log("videos",videos)

  return (
    <div className='m-4 p-4'>
        <div className='flex flex-wrap'>
        {videos?.map(e=>< VideoCard key={e.id}video={e}/>)}
        </div>
    </div>
  )
}

export default VideContainer