import React from 'react';
import cp from "../Images/cp.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons"
const VideoContent = () =>{
  return(
    <div className="h-auto bg-grefacc max-w-xs relative mb-8 mr-4 mt-8">
    <div className="h-full w-full bg-black absolute opacity-50"/>
    <div className="flex justify-center items-center absolute h-full w-full">
    <FontAwesomeIcon icon={faPlayCircle} color="white" size="3x" className="absolute" />
    </div>
    <h1 className="font-bold text-2xl p-2 absolute text-white bottom-0">Lancement des JFACC
    2019 par le Ministre</h1>
    <img src={cp} alt="" className="object-cover" />
    </div>
  )
}

export default VideoContent;