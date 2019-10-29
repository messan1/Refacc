import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Navbar from "./Navbar"
import Banner from "./Banner"
import "../css/animation.css"

export default () => (
  <StaticQuery
    query={graphql`
    query {
      allMenuJson {
        edges {
          node {
            id
            link
            nom
          }
        }
      }
    }
    
    `}
    render={data => {
      return (
        <div>
          <Banner />
          <div className="bg-black w-0 h-0 hidden">menu</div>
          <Navbar>
            {data.allMenuJson.edges.map(node => (
              <Link
                className=" text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
                exact
                to={node.link}
                key={node.id}
                activeClassName="active"
              >
                {node.nom}
              </Link>
            ))}
          </Navbar>
        </div>
      )
    }}
  />
)
