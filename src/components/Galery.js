import React from 'react';
import img from '../Images/cp.jpg';
import "../css/galery.css"

const Galery = () => {
  return (
    <div className="inf-galeryback">
    <div className=" p-2 sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-64 xxl:ml-64">
    <div>
      <a href="#google.ci" className="bg-grefacc p-2 text-white"> Tout</a>
    </div>
    <div className="flex flex-wrap justify-center mt-8">
     
        <img className=" mb-4 w-auto h-56 object-cover" src={img} alt="" />
     
      
        <img className=" mb-4 w-auto h-56 object-cover" src={img} alt="" />
      
        <img className=" mb-4 w-auto h-56 object-cover" src={img} alt="" />
      
        <img className=" mb-4 w-auto h-56 object-cover" src={img} alt="" />
      
        <img className=" mb-4 w-auto h-56 object-cover" src={img} alt="" />
      
        <img className=" mb-4 w-auto h-56 object-cover" src={img} alt="" />
    </div>
  </div>
    </div>
  );
};

export default Galery;
