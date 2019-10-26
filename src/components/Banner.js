import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ReactHtmlParser from 'react-html-parser';


export default () => (
  <StaticQuery
    query={graphql`
    query {
      ApisRefacc {
        postBy(slug: "banner") {
          enTTe {
            headertitle
            texteSecond
            imageDeLenTete {
              altText
              title
              sourceUrl
            }
          }
        }
      }
    }
    
    `}
    render={data => <Banner data={data.ApisRefacc.postBy.enTTe} />}
  />
)

const Banner = ({ data }) => {
  return (
    <div className="flex justify-center flex-wrap items-center">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-center text-jfaccolor">
          {ReactHtmlParser(data.headertitle)}
        </h1>
        <p className="font-bold text-center">{data.texteSecond}</p>
      </div>
      <img
        src={data.imageDeLenTete.sourceUrl}
        className="block max-w-auto p-4"
        alt={data.imageDeLenTete.altText}
        title={data.imageDeLenTete.title}
      />
    </div>
  )
}
