import React from 'react';
import part1 from "../Images/Partners/part1.png"
import part2 from "../Images/Partners/part2.png"
import part3 from "../Images/Partners/part3.jpeg"
import part4 from "../Images/Partners/part4.jpeg"

const JfacParticipation = () =>{
  return(
    <div className="flex justify-center items-center h-auto">
        <img src={part1} alt="" className="object- w-24 mr-8" />
        <img src={part2} alt="" className="object- w-24 mr-8" />
        <img src={part3} alt="" className="object- w-24 mr-8" />
        <img src={part4} alt="" className="object- w-24 mr-8" />
    </div>
  )
}

export default JfacParticipation;