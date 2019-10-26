import React from 'react';
import "../css/animation.css";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import place from '../images/partPlace/placeholder.jpg'
import {Markup} from "interweave"

const Activity = ({title,content,img}) =>{
  return(
    <div className="shadow-md   p-2 h-auto mr-4 max-w-xs mb-8  hover:shadow-lg transition">
      <div className="relative">
        <div className="h-full w-full absolute  z-10 border-grefacc" />

        <LazyLoadImage placeholderSrc={place}  effect="blur" src={img} alt="" className="object-cover" />
      </div>
      <h3 className="font-bold text-black text-xl">{title}</h3>
      <p className="text-justify text-gray-600">
      <Markup content= {content} />
      </p>
    </div>
  )
}

export default Activity;