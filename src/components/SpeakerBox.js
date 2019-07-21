import React from 'react';

const SpeakerBox = ({right,left,img,content,titre,person}) => {
  return (
    <div className="shadow-lg flex p-8 max-w-2xl mdi:max-w-4xl md:max-w-2xl xl:max-w-4xl lg:max-w-4xl justify-around items-center mt-8 mb-12 bg-white md:flex-wrap tiny:flex-wrap sm:flex-wrap xs:flex-wrap mdi:flex-no-wrap lg:flex-no-wrap">
    {right && <div className="m-2 h-auto max-w-lg"> <img src={img} alt="" className="object-cover block h-auto"/> </div>}
      <div className="lg:m-10 xl:m-10 mdi:m-10 sm:m-0 lg:max-w-md xl:max-w-md mdi:max-w-md" >
        <h1 className="font-bold text-3xl mb-2 " >
         {person}
        </h1>
        <h3 className="italic  mb-4">{titre}</h3>
        <p className="text-justify">
       {content}
        </p>
      </div>
      {left && <div className="m-2 h-auto max-w-lg"> <img src={img} alt="" className="object-cover"/> </div>}
    </div>
  );
};
export default SpeakerBox;
