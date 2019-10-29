import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SlideShow from "../../SlideShow"
import ReactHtmlParser from "react-html-parser"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allPagesJson {
          edges {
            node {
              header {
                contenu_de_l_en_tete
                cta
                image_de_l_en_tete
                titre_de_l_en_tete
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="w-full bg-color flex justify-around items-center mt-16 mb-16 mr-4 ">
        <div className="tiny:hidden xs:hidden sm:hidden md:hidden mdi:block h-auto max-w-xl text-black ml-8">
          <h1 className="xl:text-4xl lg:text-4xl md:text-2xl mdi:text-2xl font-bold text-black">
            {data.allPagesJson.edges.map(
              edge =>
                edge.node.header &&
                ReactHtmlParser(edge.node.header.titre_de_l_en_tete)
            )}
          </h1>
          <p className="xl:text-xl lg:text-xl md:text-lg w-auto text-black xl:font-bold ">
            {data.allPagesJson.edges.map(
              edge =>
                edge.node.header &&
                ReactHtmlParser(edge.node.header.contenu_de_l_en_tete)
            )}
          </p>
          <button className="mt-8 bg-grefacc p-4 text-white font-bold">
            {data.allPagesJson.edges.map(
              edge => edge.node.header && edge.node.header.cta
            )}
          </button>
        </div>
        {data.allPagesJson.edges.map(
          edge =>
            edge.node.header && (
              <SlideShow url={edge.node.header.image_de_l_en_tete} />
            )
        )}
      </div>
    )}
  />
)
