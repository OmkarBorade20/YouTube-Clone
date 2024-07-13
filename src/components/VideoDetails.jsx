import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import useFetchVideos from "../hooks/useFetchVideos";
import VideoCard from "./VideoCard";

const VideoDetails = () => {

  const { id } = useParams();
  const [moreClick,setMoreClick]=useState(false);

  useFetchVideos(5);

  const videoDetails = useSelector((store) => store?.videos?.videoDetails);
  const menu=useSelector(store=>store.configurations?.toggleMenu);
  const list=useSelector(store=>store.videos?.videoList);

  if(!videoDetails) return null;

  const { description, channelTitle, publishedAt, title } =
    videoDetails?.snippet;

  const { likeCount, viewCount } = videoDetails?.statistics;

  const Views = formatNumber(viewCount);

  function formatNumber(num) {
    if (num >= 1000000) {
      var formattedNum = (num / 1000000).toFixed(1);
      return formattedNum + "M";
    } else if (num >= 1000) {
      var formattedNum = (num / 1000).toFixed(1);
      return formattedNum + "K";
    } else {
      return num.toString();
    }
  }

  const handleMore=()=>{
    console.log("more clicked")
    setMoreClick(!moreClick)
  }
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <div className="col-span-10 my-10 mx-10  w-[1450px]">
        <iframe
          className="w-[1400px] h-[800px] m-4 rounded-lg"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=0"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {/* Video Details */}
          <div className="m-4 w-[80%] p-2 mx-10">
          <h1 className="text-lg my-2">{title}</h1>
          <p className="text-2xl my-2">Year : {publishedAt.split("-")[0]} </p>
          <div className="flex justify-between">
            <p className="text-2xl font-bold my-2">{channelTitle}</p>
            <p className="text-2xl font-bold my-2">{Views} Views</p>
            </div>
              <p onClick={()=>handleMore()} className="text-md my-2 " > {description.length>200 && !moreClick ?description.slice(0,200)+"... More":description}</p>
            </div>
            
      </div>

      {/* more yt Cards */}
      {!menu &&
      <div className="col-span-1 my-4 -ml-5">
      {list?.map(e=><VideoCard key={e.id} video={e} />)}
      </div>
      }
      
    </div>
  );
};

export default VideoDetails;
