import React from 'react';
import Btn from './btn';

const Card = ({img,title,text}) => {
  return (
    <div className="inf_card_bg m-4  p-4 mt-12 pl-8">
      <div className="flex inf_card justify-between relative">
        <img
          src={img}
          alt=""
          className="mr-8"
        />
        <div className="">
          <p className="font-bold text-xl">{title}</p>
          <p>{text}</p>
          <Btn text="Télécharger" />
        </div>
      </div>
    </div>
  );
};

export default Card;
