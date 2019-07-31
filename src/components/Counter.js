import React from 'react';
import CounterUp from "react-countup"
const Counter = ({number,text,str}) =>{
  return(
    <div className=" w-auto  h-auto m-8 text-center" >
      {!str && <CounterUp className="font-bold text-3xl" end={number} duration={5} />}
      {str && <CounterUp start className="font-bold text-3xl" end={number} duration={8} /> }
      <h3 className="font-bold text-xl">{text}</h3>
 </div>
  )
}
 export default Counter;