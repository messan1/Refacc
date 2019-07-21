import React from 'react';
import CounterUp from "react-countup"
const Counter = ({number,text,details}) =>{
  return(
    <div className=" md:w-1/4 sm:max-w-xs h-auto text-center" >
      <CounterUp className="font-bold text-3xl" end={number} duration={5} />
      <h3 className="font-bold text-xl">{text}</h3>
 </div>
  )
}
 export default Counter;