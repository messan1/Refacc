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
import Layout from './Layout';
import '../css/Homepage.css';

//Animation
import styled, {keyframes} from 'styled-components';
import {fadeInLeft} from 'react-animations';

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
const BouncyDiv3 = styled.div`
  animation: 1s ${fadeInAnimation};
`;
class Homepage extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <Layout>
        <Slider />
        <section className="sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-64 xxl:ml-64">
          <About />

          <div className="flex flex-wrap justify-center items-center">
            <BouncyDiv>
              <Activity />
            </BouncyDiv>
            <BouncyDiv1>
              <Activity />
            </BouncyDiv1>
            <BouncyDiv2>
              <MoreActivity />
            </BouncyDiv2>

          </div>

          <h6 className="text-center font-bold text-2xl mt-8">
            Actu vidéos du Refacc
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto" />
          <div className="flex items-center flex-wrap justify-center">

            <VideoContent />
            <VideoContent />
            <Plus />
          </div>
          <h6 className="text-center font-bold text-2xl mt-8 ">
            La Galerie des JFAC
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
        </section>
        <Galery />
        <h6 className="text-center font-bold text-2xl mt-8">
          LES CHIFFRES DES JFAC 2019
        </h6>
        <div className="bg-grefacc h-1 w-16 m-auto" />
        <section className="inf-bg-counter justify-center sm:pl-8 sm:pr-8 tiny:pl-4 tiny:pr-4  md:pl-48 md:pr-48 xl:pl-64 xl:pr-64">

          <div className="flex justify-center mt-8 items-center flex-wrap mb-8">
            <BouncyDiv3 className="w-full p-0">
              <Counter number={12000} text="Visiteurs" />
            </BouncyDiv3>
            <BouncyDiv2 className="w-full p-0">
              <Counter number={12} text="Pays" />
            </BouncyDiv2>
            <BouncyDiv1 className="w-full p-0">
              <Counter number={41} text="Exposants" />
            </BouncyDiv1>
            <BouncyDiv className="w-full p-0">
              <Counter number={50} text="Experts" />
            </BouncyDiv>

          </div>

        </section>
        <Partners />
      </Layout>
    );
  }
}

export default Homepage;
