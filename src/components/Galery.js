import React from 'react';
import "../css/galery.css"
import img1 from "../images/galeries/1.jpg"
import img2 from "../images/galeries/2.jpg"
import img3 from "../images/galeries/3.jpg"
import img4 from "../images/galeries/4.jpg"
import img5 from "../images/galeries/5.jpg"
import img6 from "../images/galeries/6.jpg"
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Galery = () => {
  return (
    <div className="inf-galeryback">
    <div className=" p-2 sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-64 xxl:ml-64">
    <div>
      <a href="#google.ci" className="bg-grefacc p-2 text-white"> Tout</a>
    </div>
    <div className="flex flex-wrap justify-center mt-8 inf-div-galery">
     
        <LazyLoadImage effect="blur" className=" m-2 w-auto h-56 object-cover" src={img1} alt="" />
     
      
        <LazyLoadImage effect="blur" className=" m-2 w-auto  h-56 object-cover" src={img2} alt="" />
      
        <LazyLoadImage effect="blur" className=" m-2 w-auto h-56 object-cover" src={img3} alt="" />
      
        <LazyLoadImage effect="blur" className=" m-2 w-auto h-56 object-cover" src={img4} alt="" />
      
        <LazyLoadImage effect="blur" className=" m-2 w-auto h-56 object-cover" src={img5} alt="" />
      
        <LazyLoadImage effect="blur" className=" m-2 w-auto h-56 object-cover" src={img6} alt="" />
    </div>
  </div>
    </div>
  );
};

export default Galery;
