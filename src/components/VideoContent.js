import React from 'react';
import cp from '../Images/cp.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

const VideoContent = ({url}) => {
  return (
    
      <ReactPlayer url={url} playing={false} style={{margin:"10px"}}/>
   
  );
};

export default VideoContent;
