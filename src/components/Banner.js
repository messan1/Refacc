import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ReactHtmlParser from "react-html-parser"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allPagesJson {
          edges {
            node {
              banner {
                image_de_la_banniere
                texte_de_la_baniere
                titre_de_la_banniere
              }
            }
          }
        }
      }
    `}
    render={data => <Banner edges={data.allPagesJson.edges} />}
  />
)

const Banner = ({ edges }) => {
  return (
    <div className="flex justify-center flex-wrap items-center">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-center text-jfaccolor">
          {edges.map(
            edge =>
              edge.node.banner &&
              ReactHtmlParser(edge.node.banner.titre_de_la_banniere)
          )}
        </h1>
        <p className="font-bold text-center">
          {edges.map(
            edge =>
              edge.node.banner &&
              ReactHtmlParser(edge.node.banner.texte_de_la_baniere)
          )}
        </p>
      </div>
      {edges.map(
        edge =>
          edge.node.banner && (
            <img
              src={
                "https://res.cloudinary.com/infinityapis/image/upload" +
                edge.node.banner.image_de_la_banniere
              }
              className="block max-w-auto p-4"
              alt={edge.node.banner.titre_de_la_banniere}
              title={edge.node.banner.titre_de_la_banniere}
            />
          )
      )}
    </div>
  )
}
