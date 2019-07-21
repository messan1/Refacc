import React from 'react';
import part1 from "../Images/participations/Copie-de-image.png"
import part2 from "../Images/participations/images.png"
import part3 from "../Images/Partners/part3.jpeg"
import part4 from "../Images/Partners/part4.jpeg"

const JfacParticipation = () =>{
  return(
    <div className="flex justify-center items-center h-auto flex-wrap">
        <img src={part1} alt="" className=" w-24 m-8" />
        <img src={part2} alt="" className=" w-24 m-8" />
        <img src={part3} alt="" className=" w-24 m-8" />
        <img src={part4} alt="" className=" w-24 m-8" />
    </div>
  )
}

export default JfacParticipation;