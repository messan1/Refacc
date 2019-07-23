import React, {Component} from 'react';

import About from '../components/About';
import Activity from '../components/Activity';
import MoreActivity from '../components/MoreActivity';
import VideoContent from './../components/VideoContent';

import Galery from '../components/Galery';
import Counter from '../components/Counter';
import Partners from '../components/Partners';
import '../css/Homepage.css';
import imgconf from '../Images/Activities/act1.png';
import imgconf2 from '../Images/Activities/confJfac.jpg';
import fomation from '../Images/formation.jpg';
//Seo
import {Helmet} from 'react-helmet';
//Animation
import styled, {keyframes} from 'styled-components';
import {fadeInLeft} from 'react-animations';
import SlideShow from '../components/SlideShow';

const fadeInAnimation = keyframes`${fadeInLeft}`;

const BouncyDiv = styled.div`
  animation: 4s ${fadeInAnimation};
`;
const BouncyDiv1 = styled.div`
  animation: 3s ${fadeInAnimation};
`;
const BouncyDiv2 = styled.div`
  animation: 2s ${fadeInAnimation};
`;

class Homepage extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <div className="h-auto">
        <Helmet>
          <title>Refacc - Lancement des JFAC 2020</title>
        </Helmet>
        <div className="w-full bg-color flex justify-around items-center mt-16 mb-16 mr-4 ">
        <div className="tiny:hidden xs:hidden sm:hidden md:hidden mdi:block h-auto max-w-xl text-black ml-8">
          <h1 className="xl:text-4xl lg:text-4xl md:text-2xl mdi:text-2xl font-bold text-black">LANCEMENT DES <span className="text-jfaccolor">JFAC 2020</span></h1>
          <p className="xl:text-xl lg:text-xl md:text-lg w-auto text-black xl:font-bold ">
          Les Journées africaines de l’écologie et des
changements climatiques (JFAC 2019),qui sont à leur 2ème édition,sont le 1er forum d'échange et de marché Ouest africain pour les bonnes pratiques écologiques et technologies vertes.
          </p>
          <button className="mt-8 bg-grefacc p-4 text-white font-bold">En savoir Plus</button>
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
               />
            </BouncyDiv>
            <BouncyDiv1>
              <Activity
                img={fomation}
                title="Formations"
              />
            </BouncyDiv1>
            <BouncyDiv>
              <Activity
                img={imgconf}
                title="Stands d'expositions"
               />
            </BouncyDiv>
                   <MoreActivity/>
          </div>

          <h6 className="text-center font-bold text-2xl mt-8">
            ACTU VIDEO REFACC
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto" />
          <div className="flex  items-center flex-wrap justify-around">

            <VideoContent url="https://www.youtube.com/watch?v=_RpGsp9GTCs&t=1s" />
            <VideoContent url="https://www.youtube.com/watch?v=-f9FuE5epnY" />

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
