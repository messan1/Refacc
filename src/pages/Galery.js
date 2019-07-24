import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import img from '../Images/slide/slide1.jpeg';
import '../css/galery.css';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Galery = ({scrollPosition}) =>{
  return(
    <div className="flex justify-around items-center flex-wrap sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-56 xxl:ml-56">
        <Helmet>
          <title>Refacc - La Galerie</title>
        </Helmet>
        <div className="grid-container">
         
        </div>
      </div>
  )
}
export default Galery;
