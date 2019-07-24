import React from 'react';
import part1 from "../images/participations/Copie-de-image.png"
import part2 from "../images/participations/images.png"
import part3 from "../images/Partners/part3.jpeg"
import part4 from "../images/Partners/part4.jpeg"
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import place from '../images/partPlace/placeholder.jpg'


const JfacParticipation = () =>{
  return(
    <div className="flex justify-center items-center h-auto flex-wrap">
        <LazyLoadImage effect="blur" placeholderSrc={place}   src={part1} alt="" className=" w-24 m-8" />
        <LazyLoadImage effect="blur" placeholderSrc={place}  src={part2} alt="" className=" w-24 m-8" />
        <LazyLoadImage effect="blur" placeholderSrc={place}  src={part3} alt="" className=" w-24 m-8" />
        <LazyLoadImage effect="blur" placeholderSrc={place}  src={part4} alt="" className=" w-24 m-8" />
    </div>
  )
}

export default JfacParticipation;