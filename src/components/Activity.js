import React from 'react';
import "../css/animation.css";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Activity = ({title,content,img}) =>{
  return(
    <div className="shadow-md   p-2 h-auto mr-4 max-w-xs mb-8  hover:shadow-lg transition">
      <div className="relative">
        <div className="h-full w-full absolute  z-10 border-grefacc" />

        <LazyLoadImage effect="blur" src={img} alt="" className="object-cover" />
      </div>
      <h1 className="font-bold text-black text-xl">{title}</h1>
      <p className="text-justify text-gray-600">
      {content}</p>
    </div>
  )
}

export default Activity;