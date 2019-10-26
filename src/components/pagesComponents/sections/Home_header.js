import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SlideShow from "../../SlideShow"
import ReactHtmlParser from 'react-html-parser';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        ApisRefacc {
          postBy(slug: "haut-de-page") {
            id
            En_Tete_avec_slide {
              contenuDeLenTete
              titreEnTete
              image {
                altText
                content
                sourceUrl
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="w-full bg-color flex justify-around items-center mt-16 mb-16 mr-4 ">
        <div className="tiny:hidden xs:hidden sm:hidden md:hidden mdi:block h-auto max-w-xl text-black ml-8">
          <h1
         
            className="xl:text-4xl lg:text-4xl md:text-2xl mdi:text-2xl font-bold text-black"
          >
            {ReactHtmlParser(data.ApisRefacc.postBy.En_Tete_avec_slide.titreEnTete)}
          </h1>
          <p className="xl:text-xl lg:text-xl md:text-lg w-auto text-black xl:font-bold ">
       {ReactHtmlParser(data.ApisRefacc.postBy.En_Tete_avec_slide.contenuDeLenTete)}
          </p>
          <button className="mt-8 bg-grefacc p-4 text-white font-bold">
            En savoir Plus
          </button>
        </div>
        <SlideShow url={data.ApisRefacc.postBy.En_Tete_avec_slide.image} />
      </div>
    )}
  />
)
