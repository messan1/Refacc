import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ReactHtmlParser from 'react-html-parser';


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
    render={data => <Banner data={data.allPagesJson.edges[3].node.banner} />}
  />
)

const Banner = ({ data }) => {
  return (
    <div className="flex justify-center flex-wrap items-center">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-center text-jfaccolor">
          {ReactHtmlParser(data.titre_de_la_banniere)}
        </h1>
        <p className="font-bold text-center">{data.texte_de_la_baniere}</p>
      </div>
      <img
        src={"https://res.cloudinary.com/infinityapis/image/upload"+data.image_de_la_banniere}
        className="block max-w-auto p-4"
        alt={data.titre_de_la_banniere}
        title={data.titre_de_la_banniere}
      />
    </div>
  )
}
