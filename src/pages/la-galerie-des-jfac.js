import React from 'react';
import '../css/galery.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SEO from './../components/seo';
import Layout from '../components/layout';
import GaleryPage from '../components/GaleryPage';

const Galery = ({scrollPosition}) => {
  return (
    <Layout>
      <div className="flex justify-around items-center mt-16 flex-wrap sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-56 xxl:ml-56">
        <SEO title="Les images des JFAC" />
       <GaleryPage/>
      </div>
    </Layout>
  );
};
export default Galery;
