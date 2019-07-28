import React, {Component} from 'react';

import About from '../About';
import Activity from '../Activity';
import MoreActivity from '../MoreActivity';
import SmallVideo from "../SmallVideo";

import Galery from '../Galery';
import Counter from '../Counter';
import Partners from '../Partners';
import '../../css/Homepage.css';
import imgconf from '../../images/Activities/act1.png';
import imgconf2 from '../../images/Activities/confJfac.jpg';
import fomation from '../../images/formation.jpg';

//Animation
import styled, {keyframes} from 'styled-components';
import {fadeInLeft} from 'react-animations';
import SlideShow from '../SlideShow';

const fadeInAnimation = keyframes`${fadeInLeft}`;

const BouncyDiv = styled.div`
  animation: 4s ${fadeInAnimation};
`;
const BouncyDiv1 = styled.div`
  animation: 3s ${fadeInAnimation};
`;

class Homepage extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {

    return (
      <div className="h-auto">
        <div className="w-full bg-color flex justify-around items-center mt-16 mb-16 mr-4 ">
          <div className="tiny:hidden xs:hidden sm:hidden md:hidden mdi:block h-auto max-w-xl text-black ml-8">
            <h1 className="xl:text-4xl lg:text-4xl md:text-2xl mdi:text-2xl font-bold text-black">
              LANCEMENT DES <span className="text-jfaccolor">JFAC 2020</span>
            </h1>
            <p className="xl:text-xl lg:text-xl md:text-lg w-auto text-black xl:font-bold ">
              Les Journées africaines de l’écologie et des
              changements climatiques (JFAC 2020),qui sont à leur 2ème édition,sont le 1er forum d'échange et de marché Ouest africain pour les bonnes pratiques écologiques et technologies vertes.
            </p>
            <button className="mt-8 bg-grefacc p-4 text-white font-bold">
              En savoir Plus
            </button>
          </div>
          <SlideShow />
        </div>
        <section className="sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-64 xxl:ml-64">
          <About />
          <h6 className="text-center font-bold text-2xl mt-8 ">
            ACTIVITES DES JFAC 2019
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
          <div className="flex flex-wrap justify-around items-center">
            <BouncyDiv>
              <Activity
                img={imgconf2}
                title="Conférences"
                content="Deux conférences de haut niveau devront traiter les deux dimensions du thème des Journées. Ces
                deux conférences seront organisées sous forme de panel, avec la possibilité aux participants de poser
                des questions"
              />
            </BouncyDiv>
            <BouncyDiv1>
              <Activity
                img={fomation}
                title="Ateliers Thématiques"
                content="Les ateliers sont de véritables rencontres de partage d'idées, d'expériences et d'outils professionnels
                en matière d'écologie et de changement climatique. Vu l'engouement et la situation climatique
                préoccupante."
              />
            </BouncyDiv1>
            <BouncyDiv>
              <Activity
                img={imgconf}
                title="Expositions"
                content="Les innovations technologiques en matière d'écologie sont encouragées à venir présenter
                leurs produits au grand public. Avec une représentation des secteurs :
               Partenaires internationaux,Entreprises, produits bios, élevage bio,Innovations, etc"
              />
            </BouncyDiv>
            
          </div>

          <h6 className="text-center font-bold text-2xl mt-8 ">
            ACTU VIDEO REFACC
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto mb-4" />
          <div className="flex  items-center flex-wrap justify-center">

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
        <MoreActivity />
          </div>
          <h6 className="text-center font-bold text-2xl mt-8 ">
            LA GALERIE DES JFAC
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
        </section>
        <Galery />
        <h6 className="text-center font-bold text-2xl mt-8">
          LES CHIFFRES DES JFAC 2019
        </h6>
        <div className="bg-grefacc h-1 w-16 m-auto" />
        <section className="inf-bg-counter justify-center ">

          <BouncyDiv className="flex justify-around m-8 items-center flex-wrap xl:h-64 lg:h-64 h-auto">

            <Counter number={12000} text="Visiteurs" />

            <Counter number={12} text="Pays" />

            <Counter number={41} text="Exposants" />
            <Counter number={50} text="Experts" />

          </BouncyDiv>
        </section>

        <Partners />

      </div>
    );
  }
}

export default Homepage;
