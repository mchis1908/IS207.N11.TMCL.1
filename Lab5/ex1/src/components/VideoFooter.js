import React, {useState, useRef } from 'react'
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const VideoFooter=({channel, description, song}) =>{
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter__icon"/>
                </div>
            </div>
            <img className="videoFooter__record" src="your-video-icon" alt="video footer"/>
        </div>
        
      )
}

  

export default VideoFooter