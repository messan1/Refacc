import React, {Component} from 'react';

import '../../css/Jfac20.css';
import JfacParticipation from '../JfacParticipation';
import SpeakerBox from '../SpeakerBox';
import Partners from '../Partners';
import Form from '../Form';
import {Link} from 'gatsby';

//speakers
import speak2 from '../../images/speakers/1.png';
import speak3 from '../../images/speakers/2.png';
import speak1 from '../../images/speakers/jp.png';
import lc from '../../images/speakers/lc.png';

import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import place from '../../images/partPlace/placeholder.jpg';

//animation
import ScrollAnimation from 'react-animate-on-scroll';

class Jfac20 extends Component {
  render () {
    return (
      <div>
        <header className="inf-j20 flex justify-center flex-row pt-24 pb-24 items-center flex-wrap p-8 relative">
          <div className="absolute bg-black opacity-50 h-full w-full" />
          <div className="w-full flex flex-wrap justify-center items-center content-center relative z-50">
            <div className=" mb-8">
              <p className="text-white text-lg max-w-sm">
                Du 16 au 21 Mars 2020 à  Toumodi et Yamoussoukro
              </p>
              <h1 className="text-4xl lg:text-4xl xl:text-7xl md:text-3xl sm:text-3xl mdi:text-2xl text-white">
                LANCEMENT DES <br />
                JFAC 2020
              </h1>
              <div className="mt-8 m-auto flex flex-wrap justify-between items-center">
                <Link
                  to="/nous-contacter"
                  className="p-4 m-4 pl-8 pr-8 bg-jfaccolor text-white lg:ml-8 font-bold"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            <Form />
          </div>
        </header>
        <div className="mt-8 h-auto w-full">
          <h3 className="text-center text-xl font-bold">
            AVEC LA PARTICIPATION
          </h3>
          <div className="m-auto w-auto h-auto mb-24">
            <JfacParticipation />
          </div>
          <section>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeOut"
              animateOnce={true}
            >
              <div className="flex xl:h-64 mdi:h-64 lg:h-64 md:lg:h-64 mb-8 justify-center flex-wrap items-center mdi:flex-col mdi:relative max-w-4xl m-auto">

                <div className="shadow-lg h-auto max-w-lg p-8 mdi:absolute mdi:mb-8  left-0 bg-white">
                  <h3 className="font-bold text-3xl mb-2">Pourquoi les JFAC</h3>
                  <p className="text-justify m-4">
                    Les Journées africaines de l’écologie et des changements climatiques (JFAC 2019) deviennent un baromètre des actions climatiques et écologiques de la Côte d’Ivoire. «Les JFAC peuvent et doivent, en effet, constituer un rendez-vous périodique (peut-être annuel) d’évaluation de nos progrès en matière de lutte contre les changements climatiques et d’atteinte des Objectifs du Développement Durable (ODD). Il est important de se trouver, de dialoguer et d’apprendre l’un de l’autre car l’enjeu climatique nous y oblige», c’est ce qu’a déclaré le ministre ivoirien de l’Environnement et du Développement durable, Séka Séka.

                  </p>
                </div>

                <div className="m-2 order-first h-auto max-w-4xl sm:max-w- mdi:max-w-sm ">
                  <LazyLoadImage
                    effect="blur"
                    src={lc}
                    alt=""
                    className="object-cover max-w-sm h-auto w-full mdi:absolute"
                    style={{left: '490px', bottom: '25px'}}
                    placeholderSrc={place}
                  />
                </div>

              </div>
            </ScrollAnimation>
            <p className="text-center text-4xl font-bold">
              Pour les JFAC 2019
            </p>
            <p className="text-center text-grefacc mt-2 font-bold text-xl">
              Les avis
            </p>

            <div className="w-full flex justify-center flex-wrap flex-row ">
              <ScrollAnimation
                animateIn="fadeInRight"
                animateOut="fadeOut"
                animateOnce={true}
              >
                <SpeakerBox
                  img={speak1}
                  person="Prof Joseph SEKA
                    SEKA,"
                  content="Nous sommes tous concernés par les
                    conséquences de la dégradation de notre
                    environnement et du changement climatique
                    et aucun pays africain, aucun secteur, aucune
                    couche sociale n'est épargnée. Les enjeux sont
                    réels et palpables. Et heureusement les
                    solutions existent pour proposer de nouveaux
                    modèles économiques plus durables basés sur
                    une croissance intelligente, équitable et
                    soucieuse des défis environnementaux et
                    sociaux. L’institution des journées africaines de
                    l'écologie se présente comme un espace
                    privilégié d’échange entre experts et de "
                  left={true}
                />
              </ScrollAnimation>
              <div className="bg-green-200 w-full flex justify-center items-center">
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOut="fadeOut"
                  animateOnce={true}
                >
                  <SpeakerBox
                    img={speak2}
                    person="SEM Tang WEIBIN"
                    titre="Ambassadeur de la
                République Populaire de Chine
                en Côte d’Ivoire, au nom des
                partenaires des JFAC 2019 :"
                    content="««Les défis restent énormes et variés pour le
                continent. La Chine a déployé une stratégie en
                matière de lutte contre les changements
                climatiques en se fixant un plan de contribution
                en réponse aux changements climatiques à
                travers la réduction de 60 à 65% son émission
                de CO2 par unité de PIB d’ici 2030. Le pays a
                réussi à réduire ses émissions de carbone de
                45% en 2017. La Chine envisage de réaliser 50
                projets d’aide dans le continent africain dans
                les domaines du développement vert, de
                l’écologie et de la protection de l’Environnement.»  "
                    right={true}
                  />
                </ScrollAnimation>
              </div>
              <ScrollAnimation
                animateIn="fadeInRight"
                animateOut="fadeOut"
                animateOnce={true}
              >
                <SpeakerBox
                  img={speak3}
                  person="M. Al-Hamdou DORSOUMA"
                  titre="Responsable de la division Climat et
              Croissance à la BAD :"
                  content="«Ces journées de la transition écologique africaine sont
              une opportunité de formation et de sensibilisation pour
              les acteurs de nos pays. Nous nous tenons aux côtés des
              experts du REFACC, et la BAD ira plus loin avec l'accroissement de 40% ses investissements vers les changements climatiques et la croissance verte, à partir de
              2020. Ce qui va apporter plus de financement dans le
              processus de transition écologique et surtout inverser
              la forte tendance à la déforestation»"
                  left={true}
                />
              </ScrollAnimation>
            </div>
            <p className="text-center font-bold text-4xl mb-8">
              EDITION <span className="text-jfaccolor">JFAC 2020</span>
            </p>
            <div className="w-screen bg-jfaccolor p-8 flex justify-center flex-wrap items-center ">
              <div className=" xs:w-full sm:w-full p-4 md:w-1/3 mr-8">
                <p className="text-white">PRET?</p>
                <ScrollAnimation
                  animateIn="tada"
                  delay={2000}
                  initiallyVisible={true}
                  animateOnce={true}
                >
                  <h2 className="text-3xl text-white">
                    INSCRIVEZ-VOUS POUR PARTICIPER
                    AU JFAC 2020
                  </h2>
                </ScrollAnimation>
                <p className="text-white">
                  Il faut agit maintenant main dans la main afin de contrer les aléas des changements climatiques qui deviennent

                  de plus en plus délétères pour nos économies, notre environnement et la santé de nos populations
                </p>
              </div>
              <Form />
            </div>

            <Partners />
          </section>
        </div>
      </div>
    );
  }
}

export default Jfac20;
