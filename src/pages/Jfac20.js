import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import '../css/Jfac20.css';
import JfacParticipation from '../components/JfacParticipation';
import testimg from '../Images/aboutimg.png';
import SpeakerBox from '../components/SpeakerBox';

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
        <header className="inf-j20 flex justify-center flex-row pt-24 pb-24 items-center flex-wrap">

          <div className="mr-16 mdi:mr-0">
            <p className="text-white text-lg">
              Du 16 au 22 Mars 2020 à  Toumodi et Yamoussoukro
            </p>
            <h1 className="text-5xl text-white">
              LANCEMENT DES <br />
              JFAC 2020
            </h1>
            <div className="mt-8">
              <a
                href="#google.ci"
                className="p-4 pl-8 pr-8 text-white bg-jfaccolor font-bold"
              >
                Plus
              </a>
              <a
                href="#google.ci"
                className="p-4 pl-8 pr-8 bg-white text-black ml-8 font-bold"
              >
                Nous contacter
              </a>
            </div>
          </div>
          <div className="ml-8 mdi:ml-0">
            <div className="w-64 h-auto bg-white p-8 m-18">
              <h2 className="text-center font-bold text-2xl">
                ENREGISTRER VOUS
              </h2>
              <h3 className="text-center mt-4">
                How you transform your business as tech consumer, habits industry
              </h3>
              <div className="flex flex-col">
                <label className="mt-8 font-bold">Votre nom et prénoms</label>
                <input
                  className="h-16 w-full border mb-4"
                  type="text"
                  name=""
                  placeholder="Votre Nom et Prénoms"
                />
                <label className="font-bold">Votre adresse email</label>
                <input
                  className="h-16 w-full border mb-4"
                  type="text"
                  name=""
                  placeholder="Votre Email"
                />
                <label className="font-bold">Votre structure</label>
                <input
                  className="h-16 w-full border mb-4"
                  type="text"
                  name=""
                  placeholder="Votre Structure"
                />
                <input
                  className="bg-jfaccolor text-center pt-4 pb-4 text-white font-bold"
                  type="submit"
                  value="Valider"
                />
              </div>
            </div>
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
            <div className="flex h-64 justify-center items-center relative max-w-4xl m-auto">
              <div className="shadow-lg h-64 max-w-lg p-8 absolute left-0 bg-white">
                <h1 className="font-bold text-3xl mb-2">Pourquoi les JFAC</h1>
                <p className="text-justify mr-8">
                  Les Journées africaines de l’écologie et des
                  changements climatiques (JFAC 2019)
                  deviennent un baromètre des actions
                  climatiques et écologiques de la Côte d’Ivoire.
                  «Les JFAC peuvent et doivent, en effet constituerun rendez-vous périodique (peut-être
                  annuel) d’évaluation de nos progrès en matière
                  de lutte contre les changements climatiques et
                  d’atteinte des Objectifs du Développement
                  Durable (ODD). Il est important de se trouver, de
                  dialoguer et d’apprendre l’un de l’autre car
                  l’enjeu climatique nous y oblige», c’est ce qu’a
                  déclaré le ministre ivoirien de l’Environnement
                  et du Développement durable, Séka Séka{' '}
                </p>
              </div>
              <img
                src={testimg}
                alt=""
                className="object-cover max-w-sm absolute"
                style={{left: '490px', bottom: '25px'}}
              />
            </div>
            <div className="mt-16">
              <h1 className="text-center">Pour les JFAC 2019</h1>
              <p className="text-center">Les avis</p>
            </div>
            <div className="w-full flex justify-center flex-wrap flex-row ">
              <SpeakerBox left={true} />
              <div className="bg-green-200 w-full flex justify-center items-center">

                <SpeakerBox right={true} />

              </div>

              <SpeakerBox left={true} />
            </div>
          </section>
          <div />
        </div>
      </div>
    );
  }
}

export default Jfac20;
