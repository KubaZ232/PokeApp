import React from 'react'
import './FlamesComponent.css'; 

const FlamesComponent = () => {
  return (
    <div className='cont'>
        <video src='video.mp4' autoPlay muted ></video>
        <div className='text'>
            <span>P</span>
            <span>O</span>
            <span>K</span>
            <span>E</span>
            <span>A</span>
            <span>P</span>
            <span>P</span>
        </div>
    </div>
  )
}

export default FlamesComponent