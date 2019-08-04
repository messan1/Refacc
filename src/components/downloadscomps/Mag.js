import React from 'react';
import Book from './Book';

const Mag = ({img}) => {
  return (
    <div className="inf_mag_bg ">
      <p className="font-bold mag_text text-white">Learn From the Best</p>
      <p className="text-white max-w-xl">
        The best books of all-time, best bellers, contemporary books organized by category based on many hours of reading and research. You can be sure that each one is fantastic, interesting and will be worth your time.
      </p>
      <div className="flex inf_mag_container flex-wrap">
        <div className="bg-white card_mag flex flex-col items-center m-8">
          <Book
          img={img}
          />
        </div>
      </div>
    </div>
  );
};
export default Mag;
