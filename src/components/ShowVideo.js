import React from 'react';
import './ShowVideo.css';

function ShowVideo() {
    //return video to display.
  return (
    <div className="responsive-video-box">
        <video className='video-container' controls>
            <source src="../../../sunset.mp4" type="video/mp4" />
            <track
                kind="subtitles"
                src="../../../sample_subs.vtt"
                srcLang="en"
                label="English Subtitles"
                default
            />
            Your browser does not support the video tag.
        </video>
      </div>
  )
}

export default ShowVideo