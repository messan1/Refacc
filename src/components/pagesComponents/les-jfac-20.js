import React, { Component } from "react"
import "../../css/Jfac20.css"
import JfacParticipation from "../JfacParticipation"
import SpeakerBox from "../SpeakerBox"
import Partners from "../Partners"
import Form from "../Form"
import { Link } from "gatsby"
import ReactHtmlParser from "react-html-parser"

import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import place from "../../images/partPlace/placeholder.jpg"

//animation
import ScrollAnimation from "react-animate-on-scroll"

//Gatsby graphql
import { graphql, StaticQuery } from "gatsby"


export default () => (
  <StaticQuery
    query={graphql`
      query {
        allPagesJson {
          edges {
            node {
              a {
                animationin
                animationout
                contenu
                le_titre
                left
                nom_prenoms_et_poste
                photo
                right
              }
              a_propos_des_jfac {
                contenu
                le_titre
                image
                title
              }
            }
          }
        }
      }
    `}
    render={data => {
      data=data.allPagesJson.edges[2].node
      return (
        <div>
          <header className="inf-j20 flex justify-center flex-row pt-24 pb-24 items-center flex-wrap p-8 relative">
            <div className="absolute bg-black opacity-50 h-full w-full" />
            <div className="w-full flex flex-wrap justify-center items-center content-center relative z-50">
              <div className=" mb-8">
                <p className="text-white text-lg max-w-sm">
                  Du 16 au 21 Mars 2020 à Toumodi et Yamoussoukro
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
                    <h3 className="font-bold text-3xl mb-2">
                      {data.a_propos_des_jfac.title}
                    </h3>
                    <p className="text-justify m-4">
                      {ReactHtmlParser(
                        data.a_propos_des_jfac.contenu
                      )}
                    </p>
                  </div>

                  <div className="m-2 order-first h-auto max-w-4xl sm:max-w- mdi:max-w-sm ">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        "https://res.cloudinary.com/infinityapis/image/upload" +
                        data.a_propos_des_jfac.image
                      }
                      alt=""
                      className="object-cover max-w-sm h-auto w-full mdi:absolute"
                      style={{ left: "490px", bottom: "25px" }}
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
              {data.a.map(avis => (
                <div className="w-full flex justify-center flex-wrap flex-row ">
                  <ScrollAnimation
                    animateIn={avis.animationin}
                    animateOut={avis.animationout}
                    animateOnce={true}
                  >
                    <SpeakerBox
                      img={avis.photo}
                      person={avis.nom_prenoms_et_poste}
                      titre={avis.le_titre}
                      content={ReactHtmlParser(avis.contenu)}
                      left={avis.left}
                      right={avis.right}
                    />
                  </ScrollAnimation>
                </div>
              ))}

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
                      INSCRIVEZ-VOUS POUR PARTICIPER AU JFAC 2020
                    </h2>
                  </ScrollAnimation>
                  <p className="text-white">
                    Il faut agit maintenant main dans la main afin de contrer
                    les aléas des changements climatiques qui deviennent de plus
                    en plus délétères pour nos économies, notre environnement et
                    la santé de nos populations
                  </p>
                </div>
                <Form />
              </div>

              <Partners />
            </section>
          </div>
        </div>
      )
    }}
  />
)
