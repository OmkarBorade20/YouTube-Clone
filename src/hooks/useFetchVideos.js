import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addVideoList } from '../redux/videoSlice';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const useFetchVideos = (limit) => {
    const dispatch=useDispatch();
 

    const getVideos=async()=>{
        const url=YOUTUBE_VIDEOS_API.replace("{limit}",limit);
        const data=await fetch(url);
        const json=await data.json();
        console.log("Fetch Videos",json)
        dispatch(addVideoList(json.items));
    }

    useEffect(()=>{
          getVideos();
      
    },[])
}

export default useFetchVideos;