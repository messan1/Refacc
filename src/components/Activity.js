import React from 'react';
import "../css/animation.css";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import place from '../images/partPlace/placeholder.jpg'
import "../css/Activity.css";

const Activity = ({title,content,img}) =>{
  return(
    <div className="shadow-md p-2 h-auto mr-4 activitycard mb-8  hover:shadow-lg transition">
      <div className="relative">
        <div className="h-full w-full absolute  z-10 border-grefacc" />

        <LazyLoadImage placeholderSrc={place}  effect="blur" src={img} alt="" className="object-cover" />
      </div>
      <h3 className="font-bold text-black text-xl">{title}</h3>
      <p dangerouslySetInnerHTML={{__html:content}} className="text-justify text-gray-600">
      
      </p>
    </div>
  )
}

export default Activity;