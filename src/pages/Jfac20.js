import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import '../css/Jfac20.css';
import JfacParticipation from '../components/JfacParticipation';
import testimg from '../Images/aboutimg.png';
import SpeakerBox from '../components/SpeakerBox';
import Partners from '../components/Partners';
import Form from '../components/Form';


//speakers
import speak2 from "../Images/speakers/1.png"
import speak3 from "../Images/speakers/2.png"
import speak1 from "../Images/speakers/jp.png"
import lc from "../Images/speakers/lc.png"

class Jfac20 extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <div>
        <Helmet>
          <title>Refac - En route pour les JFAC 2020</title>
        </Helmet>
        <header className="inf-j20 flex justify-center flex-row pt-24 pb-24 items-center flex-wrap p-8">
          <div className="w-full flex flex-wrap justify-center items-center content-center">
            <div className=" mb-8">
              <p className="text-white text-lg max-w-sm">
                Du 16 au 22 Mars 2020 à  Toumodi et Yamoussoukro
              </p>
              <h1 className="text-2xl lg:text-5xl xl:text-4xl md:text-3xl sm:text-3xl mdi:text-2xl text-white">
                LANCEMENT DES <br />
                JFAC 2020
              </h1>
              <div className="mt-8 m-auto flex flex-wrap justify-between items-center">
                <a
                  href="#google.ci"
                  className="p-4 m-4 pl-8 pr-8 bg-white text-black lg:ml-8 font-bold"
                >
                  Nous contacter
                </a>
              </div>
            </div>
            <Form/>
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
            <div className="flex xl:h-64 mdi:h-64 lg:h-64 md:lg:h-64 mb-8 justify-center flex-wrap items-center mdi:flex-col mdi:relative max-w-4xl m-auto">
              <div className="shadow-lg h-auto max-w-lg p-8 mdi:absolute mdi:mb-8  left-0 bg-white">
                <h1 className="font-bold text-3xl mb-2">Pourquoi les JFAC</h1>
                <p className="text-justify m-4">
                  Les Journées africaines de l’écologie et des
                  changements climatiques (JFAC 2019)
                  deviennent un baromètre des actions
                  climatiques et écologiques de la Côte d’Ivoire.
                  «Les JFAC peuvent et doivent, en effet constituerun rendez-vous périodique (peut-être
                  annuel) d’évaluation de nos progrès en matière
                  de lutte contre les changements climatiques et
                  d’atteinte des Objectifs du Développement
                  Durable (ODD). Il est important de se trouver, de
                  l’enjeu climatique nous y oblige», c’est ce qu’a
                  déclaré le ministre ivoirien de l’Environnement
                  et du Développement durable, Séka Séka{' '}
                </p>
              </div>
              <div className="m-2 order-first h-auto max-w-4xl sm:max-w- mdi:max-w-sm ">
                <img
                  src={lc}
                  alt=""
                  className="object-cover max-w-sm h-auto w-full mdi:absolute"
                  style={{left: '490px', bottom: '25px'}}
                />
              </div>

            </div>
            <div className="w-full flex justify-center flex-wrap flex-row ">
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

              left={true} />
              <div className="bg-green-200 w-full flex justify-center items-center">
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
                right={true} />
              </div>
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
              left={true} />
    
            </div>
            <div className="w-screen bg-jfaccolor p-8 flex justify-center flex-wrap items-center ">
              <div className=" xs:w-full sm:w-full p-4 md:w-1/3 mr-8">
                <p className="text-white">PRET?</p>
                <h2 className="text-3xl text-white">
                  INSCRIVEZ-VOUS POUR PARTICIPER
                  AU JFAC 2020
                </h2>
                <p className="text-white">
                  Il faut agit maintenant main dans la main afin de contrer les aléas des changements climatiques qui deviennent
                  {' '}
                  de plus en plus délétères pour nos économies, notre environnement et la santé de nos populations
                </p>
              </div>
                    <Form/>
              </div>

            <Partners />
          </section>
        </div>
      </div>
    );
  }
}

export default Jfac20;
