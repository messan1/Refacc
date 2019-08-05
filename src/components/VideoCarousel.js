import React from 'react';
import '../css/video.css';
import {Link} from "gatsby"
const VideoCarousel = () => {
  return (
    <div
      className="relative videocontainer bg-black"
      style={{
        backgroundImage: "url('https://media.graphcms.com/cLrGlWblRPORvQKSMvav')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="filtervideo" />
      <div className="contentvideo">
        <span>Gamming</span>
        <h1 className="">Shooter</h1>
        <div className='line bg-gray-200 w-auto' />
        <div className="videocontantdetails">
        
          <p>11 VIDEOS</p>
          <Link>VOIR PLUS</Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
