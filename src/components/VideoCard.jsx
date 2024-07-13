import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addVideo } from '../redux/videoSlice';

const VideoCard = ({video}) => {

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const url=video?.snippet?.thumbnails?.medium?.url;
    const {channelTitle,channelId,publishedAt}=video?.snippet;
    const {viewCount,}=video?.statistics;
    const views=formatNumber(viewCount);

    function formatNumber(num) {
        if (num >= 1000000) {
            var formattedNum = (num / 1000000).toFixed(1);
            return formattedNum + 'M';
        } else if (num >= 1000) {
            var formattedNum = (num / 1000).toFixed(1);
            return formattedNum + 'K';
        } else {
            return num.toString();
        }
    }

 
    const handelClick=(video)=>{
        dispatch(addVideo(video));

         navigate("/watch/"+video?.id)
    }
    

  return (

    <div className='mx-2'>
        <div onClick={()=> handelClick(video) } className='h-[310px] w-[350px] shadow-xl transition-all duration-150 hover:scale-110 rounded-2xl '>
            <img className=" m-2 p-2 rounded-2xl" src={url} alt="video Poster" />
            <div className='grid grid-flow-col'>
            <p className='my-1 mx-2 font-bold'>{channelTitle}</p>
            <p className='my-1 mx-2 font-bold'>{views} Views</p>
            </div>
            <p className='text-md w-[98%] mx-2  '>{video?.snippet?.title.length>88?video?.snippet?.title.slice(0,88)+"..":video?.snippet?.title}</p>
        </div>
    </div>
  )
}

export default VideoCard;