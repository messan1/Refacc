import React from 'react';
import ReactPlayer from 'react-player';

const VideoContent = ({url}) => {
  return (
    
      <ReactPlayer url={url} playing={false} style={{margin:"10px"}}/>
   
  );
};

export default VideoContent;
