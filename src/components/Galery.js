import React from 'react';
import "../css/galery.css"
import img1 from "../Images/galeries/1.jpg"
import img2 from "../Images/galeries/2.jpg"
import img3 from "../Images/galeries/3.jpg"
import img4 from "../Images/galeries/4.jpg"
import img5 from "../Images/galeries/5.jpg"
import img6 from "../Images/galeries/6.jpg"

const Galery = () => {
  return (
    <div className="inf-galeryback">
    <div className=" p-2 sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-64 xxl:ml-64">
    <div>
      <a href="#google.ci" className="bg-grefacc p-2 text-white"> Tout</a>
    </div>
    <div className="flex flex-wrap justify-center mt-8 inf-div-galery">
     
        <img className=" m-2 w-auto h-56 object-cover" src={img1} alt="" />
     
      
        <img className=" m-2 w-auto  h-56 object-cover" src={img2} alt="" />
      
        <img className=" m-2 w-auto h-56 object-cover" src={img3} alt="" />
      
        <img className=" m-2 w-auto h-56 object-cover" src={img4} alt="" />
      
        <img className=" m-2 w-auto h-56 object-cover" src={img5} alt="" />
      
        <img className=" m-2 w-auto h-56 object-cover" src={img6} alt="" />
    </div>
  </div>
    </div>
  );
};

export default Galery;
