import React from 'react';
import jfac from "../Images/lcmjfac20.jpg"

const Banner = () =>{
  return(
    <div className="flex justify-center flex-wrap items-center">
      <h1 className="font-bold text-2xl sm:text-3xl text-center text-red-500">Lancement des <span className="text-grefacc">JFAC 2020</span></h1>
      <img src={jfac} className="block max-w-auto p-4" alt="" />
    </div>
  )
}
export default Banner;