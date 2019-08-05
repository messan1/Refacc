import React from 'react';

const JfacTalker = ({text,img,name}) => {
  return (
    <div className="bg-gray-100 max-w-lg m-4 p-8">
      <div className="flex items-center mb-4">
      <img src={img} alt="" className="rounded-5xl" />
        <h3 className="font-bold text-lg ml-4">{name}</h3>
        
      </div>
      <p className="text-justify text-gray-600">
        {text}
      </p>
    </div>
  );
};
export default JfacTalker;
