import React from "react"
import { StaticQuery, graphql } from "gatsby"
import About from "../../About"
import Activity from "../../Activity"
import MoreActivity from "../../MoreActivity"
import SmallVideo from "../../SmallVideo"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allPagesJson {
          edges {
            node {
              activities {
                contenu_de_l_activite
                image_de_l_activite
                titre_de_l_activite
              }
              videos {
                images_de_la_video
                lien_youtube_de_la_video
                tag
                titre_de_la_video
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <section className="sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-64 xxl:ml-64">
          <About />

          <h6 className="text-center font-bold text-2xl mt-8 ">
            ACTIVITES DES JFAC 2019
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
          <div className="flex activityflex items-center">
            {data.allPagesJson.edges.map(
              edge =>
                edge.node.activities &&
                edge.node.videos && (
                  edge.node.activities.map(activity=>(
                    <Activity
                    img={
                      "https://res.cloudinary.com/infinityapis/image/upload" +
                      activity.image_de_l_activite
                    }
                    title={activity.titre_de_l_activite}
                    content={activity.contenu_de_l_activite}
                  />
                  ))
                )
            )}
          </div>

          <h6 className="text-center font-bold text-2xl mt-8 ">
            ACTU VIDEO REFACC
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto mb-4" />
          <div className="flex  items-center flex-wrap justify-center">
            {data.allPagesJson.edges.map(edge => (
              edge.node.videos && edge.node.activities &&
              edge.node.videos.map(video=>(
                <SmallVideo
                link={video.lien_youtube_de_la_video}
                title={video.titre_de_la_video}
                img={video.images_de_la_video}
                tag={video.tag}
              />
              ))
            ))}

            <MoreActivity />
          </div>
          <h6 className="text-center font-bold text-2xl mt-8 ">
            LA GALERIE DES JFAC
          </h6>
          <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
        </section>
      )
    }}
  />
)
