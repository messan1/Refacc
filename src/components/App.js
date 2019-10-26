import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Navbar from "./Navbar"
import Banner from "./Banner"
import "../css/animation.css"

export default () => (
  <StaticQuery
    query={graphql`
    query{
      ApisRefacc {
        menus {
          nodes {
            menuItems {
              edges {
                node {
                  label
                  url
                }
              }
            }
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
            {data.ApisRefacc.menus.nodes[0].menuItems.edges.map(node => (
              <Link
                className=" text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
                exact
                to={node.node.url}
                key={node.node.id}
                activeClassName="active"
              >
                {node.node.label}
              </Link>
            ))}
          </Navbar>
        </div>
      )
    }}
  />
)
