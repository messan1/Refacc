import React, {Component} from 'react';
import Slider from './../components/Slider';
import About from '../components/About';
import Activity from '../components/Activity';
import MoreActivity from '../components/MoreActivity';
import VideoContent from './../components/VideoContent';
import Plus from './../components/Plus';
import Galery from '../components/Galery';
import Counter from '../components/Counter';
import Partners from '../components/Partners';
import '../css/Homepage.css';
import imgconf from "../Images/Activities/act1.png";
import fomation from "../Images/formation.jpg"
//Seo
import {Helmet} from 'react-helmet';
//Animation
import styled, {keyframes} from 'styled-components';
import {fadeInLeft} from 'react-animations';
import Awards from '../components/Awards';
import AnimatedSlider from '../components/AnimatedSlider';

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
        
        <AnimatedSlider />
       
        <section className="sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-64 xxl:ml-64">
          <About />

          <div className="flex flex-wrap justify-around items-center">
            <BouncyDiv>
              <Activity
              img={imgconf}
                title="Conférences"
                content="Tables rondes, débats, dédicaces : découvrez les rendez-vous qui rythmeront les cinq jours de l’événement touristique de référence."
              />
            </BouncyDiv>
            <BouncyDiv1>
              <Activity
              img={fomation}
                title="Formations"
                content="Durant les JFAC, les experts dans le domaine de l'écologie offrent des formations aux différents participants. "
              />
            </BouncyDiv1>
            <BouncyDiv2>
              <MoreActivity
               />
            </BouncyDiv2>

          </div>

          <h6 className="text-center font-bold text-2xl mt-8">
            ACTU VIDEO REFACC
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto" />
          <div className="flex  items-center flex-wrap justify-around">

            <VideoContent
              url="https://www.youtube.com/watch?v=_RpGsp9GTCs&t=1s"
            />
            <VideoContent 
              url="https://www.youtube.com/watch?v=-f9FuE5epnY"
            />
    
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
        <section className="inf-bg-counter justify-center sm:pl-8 sm:pr-8 tiny:pl-4 tiny:pr-4  md:pl-48 md:pr-48 xl:pl-64 xl:pr-64">

          <BouncyDiv className="flex justify-center mt-8 items-center flex-wrap mb-8 h-64">

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
