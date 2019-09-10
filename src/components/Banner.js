import React from 'react';
import jfac from '../images/2020b.png';

const Banner = () => {
  return (
    <div className="flex justify-center flex-wrap items-center">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-center text-jfaccolor">
          Lancement des <span className="text-grefacc">JFAC 2020</span>
        </h1>
        <p className="font-bold text-center">
          Les Journées africaines de l’écologie et des changements climatiques
        </p>
      </div>
      <img src={jfac} className="block max-w-auto p-4" alt="" />
    </div>
  );
};
export default Banner;
