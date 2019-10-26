import React, { Component } from "react"
import Galery from "../Galery"
import Counter from "../Counter"
import Partners from "../Partners"
import "../../css/Homepage.css"

import Home_header from "./sections/Home_header"
import Home_Section from "./sections/Home_section"
//Animation
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      str: false,
    }
  }
  handler = () => {
    this.setState({ str: true })
  }
  render() {
    return (
      <div className="h-auto">
        <Home_header />
        <Home_Section/>
        <Galery />
        <h6 className="text-center font-bold text-2xl mt-8">
          LES CHIFFRES DES JFAC 2019
        </h6>
        <div className="bg-grefacc h-1 w-16 m-auto" />
        <section className="inf-bg-counter justify-center ">
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            afterAnimatedIn={this.handler}
          >
            {!this.state.str && (
              <div className="flex justify-around m-8 items-center flex-wrap xl:h-64 lg:h-64 h-auto">
                <Counter number={0} text="Visiteurs" />
                <Counter number={0} text="Pays" />
                <Counter number={0} text="Exposants" />
                <Counter number={0} text="Experts" />
              </div>
            )}
            {this.state.str && (
              <div className="flex justify-around m-8 items-center flex-wrap xl:h-64 lg:h-64 h-auto">
                <Counter number={12000} text="Visiteurs" />
                <Counter number={12} text="Pays" />
                <Counter number={41} text="Exposants" />
                <Counter number={50} text="Experts" />
              </div>
            )}
          </ScrollAnimation>
        </section>

        <Partners />
      </div>
    )
  }
}

export default Homepage
