import React, {useState, useRef } from 'react'
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video=({url, channel, description, song, likes, shares, messages}) =>{
    const [playing, setPLaying]= useState(false)
    const videoRef=useRef(null)
    const handleVideoPress= () => {
        if(playing){
            videoRef.current.pause()
            setPLaying(false)
        }else{
            videoRef.current.play()
            setPLaying(true)
        }
    }

    return (
        <div className='video'>
            <video
                src={url}
                className="video__player"
                loop
                ref={videoRef}
                onClick={handleVideoPress}
            ></video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
        
      )
}

  

export default Video