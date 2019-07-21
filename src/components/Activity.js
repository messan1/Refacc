import React from 'react';
import imgconf from "../Images/Activities/act1.png";
import "../css/animation.css";

const Activity = ({title,content}) =>{
  return(
    <div className="h-auto mr-4 max-w-xs mb-8  hover:shadow-lg transition">
      <div className="relative">
        <div className="h-full w-full absolute  z-10 border-grefacc" />

        <img src={imgconf} alt="" className="object-cover" />
      </div>
      <h1 className="font-bold text-black text-xl">{title}</h1>
      <p className="text-justify text-gray-600">
      {content}</p>
    </div>
  )
}

export default Activity;