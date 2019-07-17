import React, {Component} from 'react';
import Banner from './../components/Banner';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

class Layout extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <div className="h-screen">
        <Banner />
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
