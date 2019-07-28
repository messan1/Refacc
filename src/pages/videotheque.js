import React, {Component} from 'react';
import Layout from './../components/layout';
import 'react-alice-carousel/lib/alice-carousel.css';
import SmallVideo from '../components/SmallVideo';
import {Link} from 'gatsby';
import SEO from '../components/seo';

class videotheque extends Component {
  render () {
    return (
      <Layout>
      <SEO
        title="REFACC - La vidéothèque"
        description="Parcourez les vidéo du REFACC"
      />
        <div className="flex items-center justify-center mt-8">
          <p className="font-bold  lg:text-4xl xl:text-4xl text-xl md:text-3xl mdi:text-3xl">
            Nouvelles Vidéos
          </p>
          <Link className=" text-grefacc ml-4 font-bold  lg:text-2xl xl:text-2xl text-lg">
            Voir Toutes les vidéos
          </Link>
        </div>
        <div className="w-auto justify-center mt-4 xl:mt-4 lg:mt-4 md:mt-4 mdi:mt-4 xl:m-56 lg:m-16 md:m-8 mdi:m-8 mt-8 flex items-center flex-wrap">
          <SmallVideo
            link="https://www.youtube.com/watch?v=_RpGsp9GTCs"
            title="Mot du ministre de l'environnement et du développement durable lors des JFAC 2019"
            img="https://media.graphcms.com/FGu9UeQeRHiLC4VlnpB3"
            tag="JFAC 2019"
          />
          <SmallVideo
            link="https://www.youtube.com/embed/WX7f919zODg"
            title="DEVELOPPEMENT DURABLE | Comment réussir la transition écologique ?"
            img="https://img.youtube.com/vi/WX7f919zODg/hqdefault.jpg"
            tag="Ecologie"
          />
          <SmallVideo
            link="https://www.youtube.com/embed/m4g2z5UQv58"
            title="Côte d'ivoire, LUTTE CONTRE LA DÉFORESTATION"
            img="https://www.independent.co.ug/wp-content/uploads/2016/09/No-forests.jpg"
            tag="Ecologie"
          />
          <SmallVideo
            link="https://www.youtube.com/embed/DN4_oy_HeO4"
            title="Developpement durable | Transition écologique : restitution des journées africaines"
            tag="JFAC 2019"
            img="https://media.graphcms.com/W3fj0j7QQQKJOe73EDYp"
          />
          <SmallVideo
            link="https://www.youtube.com/embed/-f9FuE5epnY"
            title="Participez au JFAC 2019"
            img="https://img.youtube.com/vi/-f9FuE5epnY/hqdefault.jpg"
            tag="JFAC 2019"
          />
          <SmallVideo
            link="https://www.youtube.com/embed/m4g2z5UQv58"
            title="Reportage d'Afrque 24 Côte d'ivoire, LUTTE CONTRE LA DÉFORESTATION"
            img="https://cdnuploads.aa.com.tr/uploads/Contents/2014/08/19/thumbs_b_c_35e749ba53560142c5610d6d64088ba2.jpg"
            tag="Réportage"
          />
          <SmallVideo
            link="https://www.youtube.com/embed/2riK96yS8Aw"
            title="Une Lutte contre le réchauffement climatique"
            img="https://img.youtube.com/vi/2riK96yS8Aw/maxresdefault.jpg"
            tag="JFAC 2019"
          />

        </div>
      </Layout>
    );
  }
}

export default videotheque;
