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
        ApisRefacc {
          page(id: "cGFnZToxNA==") {
            jfacactivities1 {
              contentone
              titleone
              imageone {
                altText
                title
                sourceUrl
              }
            }
            jfacactivities2 {
              contenttwo
              titletwo
              imagetwo {
                altText
                title
                sourceUrl
              }
            }
            jfacactivities3 {
                contentthree
                titlethree
                imagethree {
                  altText
                  title
                  sourceUrl
                }
              }
            video1 {
              tagvideoone
              titlevideoone
              urlvideoone
              imagevideoone {
                altText
                title
                sourceUrl
              }
            }
            video2 {
              tagvideotwo
              titlevideotwo
              urlvideotwo
              imagevideotwo {
                altText
                title
                sourceUrl
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section className="sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-64 xxl:ml-64">
        <About />

        <h6 className="text-center font-bold text-2xl mt-8 ">
          ACTIVITES DES JFAC 2019
        </h6>
        <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
        <div className="flex activityflex items-center">
          <Activity
            img={data.ApisRefacc.page.jfacactivities1.imageone.sourceUrl}
            title={data.ApisRefacc.page.jfacactivities1.titleone}
            content={data.ApisRefacc.page.jfacactivities1.contentone}
          />

          <Activity
            img={data.ApisRefacc.page.jfacactivities2.imagetwo.sourceUrl}
            title={data.ApisRefacc.page.jfacactivities2.titletwo}
            content={data.ApisRefacc.page.jfacactivities2.contenttwo}
          />

          <Activity
            img={data.ApisRefacc.page.jfacactivities3.imagethree.sourceUrl}
            title={data.ApisRefacc.page.jfacactivities3.titlethree}
            content={data.ApisRefacc.page.jfacactivities3.contentthree}
          />
        </div>

        <h6 className="text-center font-bold text-2xl mt-8 ">
          ACTU VIDEO REFACC
        </h6>
        <div className="bg-grefacc h-1 w-16 m-auto mb-4" />
        <div className="flex  items-center flex-wrap justify-center">
          <SmallVideo
            link={data.ApisRefacc.page.video1.urlvideoone}
            title={data.ApisRefacc.page.video1.titlevideoone}
            img={data.ApisRefacc.page.video1.imagevideoone.sourceUrl}
            tag={data.ApisRefacc.page.video1.tagvideoone}
          />
          <SmallVideo
            link={data.ApisRefacc.page.video2.urlvideotwo}
            title={data.ApisRefacc.page.video2.titlevideotwo}
            img={data.ApisRefacc.page.video2.imagevideotwo.sourceUrl}
            tag={data.ApisRefacc.page.video2.tagvideotwo}
          />

          <MoreActivity />
        </div>
        <h6 className="text-center font-bold text-2xl mt-8 ">
          LA GALERIE DES JFAC
        </h6>
        <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
      </section>
    )}
  />
)
