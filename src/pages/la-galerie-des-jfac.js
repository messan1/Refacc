import React from 'react';
import '../css/galery.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SEO from './../components/seo';
import im1 from '../images/galeries/1.jpg';
import im2 from '../images/galeries/2.jpg';
import im3 from '../images/galeries/3.jpg';
import im4 from '../images/galeries/4.jpg';
import im5 from '../images/galeries/5.jpg';
import Layout from '../components/layout';

const Galery = ({scrollPosition}) => {
  return (
    <Layout>
      <div className="flex justify-around items-center mt-16 flex-wrap sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-56 xxl:ml-56">
        <SEO title="Les images des JFAC" />
        <div className="grid-container">
          <img src={im1} alt="" className="span2col" />
          <img src={im2} alt="" />
          <img src={im3} alt=""  className="span2row" />
          <img src={im4} alt="" />
          <img src={im5} alt="" />
          <img src={im1} alt="" className="span2row" />
          <img src={im2} alt="" />
          <img src={im3} alt="" />
          <img src={im4} alt="" />
          <img src={im5} alt="" className="span2col" />
          <img src={im1} alt="" className="span2col" />
          <img src={im2} alt="" />
          <img src={im3} alt=""  className="span2row" />
          <img src={im4} alt="" />
          <img src={im5} alt="" />
          <img src={im1} alt="" className="span2row" />
          <img src={im2} alt="" />
          <img src={im3} alt="" />
          <img src={im4} alt="" />
          <img src={im5} alt="" className="span2col" />
          <img src={im1} alt="" className="span2col" />
          <img src={im2} alt="" />
          <img src={im3} alt=""  className="span2row" />
          <img src={im4} alt="" />
          <img src={im5} alt="" />
          <img src={im1} alt="" className="span2row" />
          <img src={im2} alt="" />
          <img src={im3} alt="" />
          <img src={im4} alt="" />
          <img src={im5} alt="" className="span2col" />
          <img src={im1} alt="" className="span2col" />
          <img src={im2} alt="" />
          <img src={im3} alt=""  className="span2row" />
          <img src={im4} alt="" />
          <img src={im5} alt="" />
          <img src={im1} alt="" className="span2row" />
          <img src={im2} alt="" />
          <img src={im3} alt="" />
          <img src={im4} alt="" />
          <img src={im5} alt="" className="span2col" />
          <img src={im1} alt="" className="span2col" />
          <img src={im2} alt="" />
          <img src={im3} alt=""  className="span2row" />
          <img src={im4} alt="" />
          <img src={im5} alt="" />
          <img src={im1} alt="" className="span2row" />
          <img src={im2} alt="" />
          <img src={im3} alt="" />
          <img src={im4} alt="" />
          <img src={im5} alt="" className="span2col" />
        </div>
      </div>
    </Layout>
  );
};
export default Galery;
