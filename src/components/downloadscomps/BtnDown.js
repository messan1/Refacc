import React from 'react';

const Btn = ({text,link}) =>{
  return(
    <div className=" w-auto mt-8 mb-8">
      <a className="inf_d_btn pt-4 pb-4 pr-8 pl-8 text-white font-bold w-auto" rel="noopener noreferrer" href={link} target="_blank">{text}</a>
    </div>
  )
}
export default Btn;