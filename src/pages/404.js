import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import img404 from '../images/computer_404.png';
import { Link } from 'gatsby';


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex justify-center items-center flex-col">
      <img src={img404} alt="" />
      <p className="font-bold text-4xl text-center">Oups la page n'exste pas</p>
     <Link to="/" className="text-grefacc mt-4">Les JFAC 2020</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
