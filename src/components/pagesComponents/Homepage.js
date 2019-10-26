import React, { Component } from "react"

import About from "../About"
import Activity from "../Activity"
import MoreActivity from "../MoreActivity"
import SmallVideo from "../SmallVideo"

import Galery from "../Galery"
import Counter from "../Counter"
import Partners from "../Partners"
import "../../css/Homepage.css"
import imgconf from "../../images/Activities/act1.png"
import imgconf2 from "../../images/Activities/act2.jpg"
import fomation from "../../images/formation.jpg"
import Home_header from "./sections/Home_header"
//Animation
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      str: false,
    }
  }
  handler = () => {
    this.setState({ str: true })
  }
  render() {
    return (
      <div className="h-auto">
        <Home_header />
        <section className="sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-64 xxl:ml-64">
          <About />

          <h6 className="text-center font-bold text-2xl mt-8 ">
            ACTIVITES DES JFAC 2019
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
          <div className="flex flex-wrap justify-around items-center">
            <Activity
              img={imgconf2}
              title="Conférences"
              content="Deux conférences de haut niveau devront traiter les deux dimensions du thème des Journées. Ces
                deux conférences seront organisées sous forme de panel, avec la possibilité aux participants de poser
                des questions"
            />

            <Activity
              img={fomation}
              title="Ateliers Thématiques"
              content="Les ateliers sont de véritables rencontres de partage d'idées, d'expériences et d'outils professionnels
                en matière d'écologie et de changement climatique. Vu l'engouement et la situation climatique
                préoccupante."
            />

            <Activity
              img={imgconf}
              title="Expositions"
              content="Les innovations technologiques en matière d'écologie sont encouragées à venir présenter
                leurs produits au grand public. Avec une représentation des secteurs :
               Partenaires internationaux,Entreprises, produits bios, élevage bio,Innovations, etc"
            />
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
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            afterAnimatedIn={this.handler}
          >
            {!this.state.str && (
              <div className="flex justify-around m-8 items-center flex-wrap xl:h-64 lg:h-64 h-auto">
                <Counter number={0} text="Visiteurs" />
                <Counter number={0} text="Pays" />
                <Counter number={0} text="Exposants" />
                <Counter number={0} text="Experts" />
              </div>
            )}
            {this.state.str && (
              <div className="flex justify-around m-8 items-center flex-wrap xl:h-64 lg:h-64 h-auto">
                <Counter number={12000} text="Visiteurs" />
                <Counter number={12} text="Pays" />
                <Counter number={41} text="Exposants" />
                <Counter number={50} text="Experts" />
              </div>
            )}
          </ScrollAnimation>
        </section>

        <Partners />
      </div>
    )
  }
}

export default Homepage
