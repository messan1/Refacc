import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import Columns from "react-columns"
import img from '../Images/slide/slide1.jpeg';

class Galery extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  
  render () {
  
    return (
      <div className="flex justify-around items-center flex-wrap sm:ml-16 sm:mr-16 tiny:ml-6 tiny:mr-6 md:mr-16 md:ml-16 lg:mr-40 lg:ml-40 xl:mr-56 xl:ml-56 xxl:mr-56 xxl:ml-56">
        <Helmet>
          <title>Refacc - La Galerie</title>
        </Helmet>
        <div className=" h-auto">
        <Columns columns="3">
        <img src={img} alt="" className="m-2 mr-2" />
        <img src={img} alt="" className="m-2" />
        <img src={img} alt="" className="m-2" />
        <img src={img} alt="" className="m-2" />
        <img src={img} alt="" className="m-2" />
        <img src={img} alt="" className="m-2" />
        <img src={img} alt="" className="m-2" />
        <img src={img} alt="" className="m-2" />
        <img src={img}  alt="" className="m-2" />
        <img src={img}  alt="" className="m-2" />
      </Columns>
      );
        </div>
      </div>
    );
  }
}


export default Galery;
