import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { StaticQuery, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import ReactHtmlParser from 'react-html-parser';


export default () => (
  <StaticQuery
    query={graphql`
    query {
      allPagesJson {
        edges {
          node {
            about {
              contenu_du_a_propos
              image_du_a_propos
              titre_about
            }
          }
        }
      }
    }
    
    `}
    render={data => (
      <div className="flex flex-1 justify-around items-start h-auto mb-24 md:flex-no-wrap sm:flex-wrap tiny:flex-wrap">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <LazyLoadImage
            effect="blur"
            src={"https://res.cloudinary.com/infinityapis/image/upload"+data.allPagesJson.edges[0].node.about.image_du_a_propos}
            className="p-0 object-cover h-auto xl:max-w-sm lg:max-w-sm md:max-w-sm mdi:max-w-sm sm:max-w-xs tiny:max-w-xs p-6 "
            alt={data.allPagesJson.edges[0].node.about.titre_about}
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <div className="w-2/4 bg-white md:ml-8 self-start sm:w-full sm:m-0 tiny:w-full">
            <h5 className="font-bold text-sm mb-2 text-grefacc">A propos</h5>
            <h6 className="font-bold text-2xl mb-2">
              {data.allPagesJson.edges[0].node.about.titre_about}
            </h6>
            <p className="text-justify text-gray-600">
              {ReactHtmlParser(data.allPagesJson.edges[0].node.about.contenu_du_a_propos)}
            </p>
            <div className="mt-8 border-4 border-grefacc flex justify-around items-center">
              <span className="xl:text-7xl font-bold md:text-6xl text-grefacc m-4 tiny:text-5xl lg:text-6xl md:text-4xl lg:m-0">
                9
              </span>
              <p className="xl:text-3xl md:text-2xl text-gray-500 sm:text-md tiny:text-sm lg:text-xl ">
                Années d'expériences <br />
                dans le domaine <br />
                de l'écologie
              </p>
              <a
                href="#google.ci"
                className="p-3 m-3 bg-grefacc text-white font-bold"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    )}
  />
)
