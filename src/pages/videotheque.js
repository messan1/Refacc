import React, {Component} from 'react';
import Layout from './../components/layout';
import 'react-alice-carousel/lib/alice-carousel.css';
import SmallVideo from '../components/SmallVideo';

import {Link} from 'gatsby';

class videotheque extends Component {

  render () {
    return (
      <Layout>
        <div className="flex items-center justify-center mt-8">
          <p className="font-bold  lg:text-4xl xl:text-4xl text-xl md:text-3xl mdi:text-3xl">
            Nouvelles Vidéos
          </p>
          <Link className=" text-grefacc ml-4 font-bold  lg:text-2xl xl:text-2xl text-lg">
            Voir Toutes les vidéos
          </Link>
        </div>
        <div className="w-auto justify-center mt-4 xl:mt-4 lg:mt-4 md:mt-4 mdi:mt-4 xl:m-56 lg:m-16 md:m-8 mdi:m-8 mt-8 flex items-center flex-wrap">
          <SmallVideo link="{}" title="{}" img="{}" />
          <SmallVideo link="{}" title="{}" img="{}" />
          <SmallVideo link="{}" title="{}" img="{}" />
          <SmallVideo link="{}" title="{}" img="{}" />
          <SmallVideo link="{}" title="{}" img="{}" />
          <SmallVideo link="{}" title="{}" img="{}" />

        </div>
      </Layout>
    );
  }
}

export default videotheque;
