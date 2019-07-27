import React, {Component} from 'react';
import Layout from '../components/layout';
import ReactPlayer from 'react-player';
import SmallVideo from '../components/SmallVideo';

class lecteur_video extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    console.log(this.props.location);
    const info = this.props.location.state;

    return (
      <Layout>
        <div className="flex justify-center items-center  relative playerback">
          <div className="filtervideo2" />
          <div className="z-50 flex justify-center items-center flex-col videobox">
            <ReactPlayer  playing width={'100%'} height={700} />
            <h1 className="m-2 font-bold text-xl xl:text-4xl xl:text-4xl text-center text-white">
              
            </h1>
          </div>

        </div>
        <div className="w-auto justify-center mt-4 xl:mt-4 lg:mt-4 md:mt-4 mdi:mt-4 xl:m-56 lg:m-16 md:m-8 mdi:m-8 mt-8 flex items-center flex-wrap">
          <SmallVideo />
          <SmallVideo />
          <SmallVideo />
          <SmallVideo />
          <SmallVideo />
          <SmallVideo />

        </div>
      </Layout>
    );
  }
}

export default lecteur_video;
