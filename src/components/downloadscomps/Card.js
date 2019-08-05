import React from 'react';
import Btn from './btn';

const Card = ({img,title,text}) => {
  return (
    <div className="inf_card_bg m-4  p-4 mt-12 pl-8">
      <div className="flex inf_card justify-center items-center  relative">
        <img
          src={img}
          alt=""
          className="m-2"
        />
        <div className="w-full flex justify-center items-center flex-col m-auto">
          <p className="font-bold text-xl">{title}</p>
          <p>{text}</p>
          <Btn text="Télécharger" />
        </div>
      </div>
    </div>
  );
};

export default Card;
