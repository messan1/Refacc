import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Exposant from './dif_Form/Exposants';
import Experts from './dif_Form/Experts';
import Presse from './dif_Form/Presses';
import Participants from './dif_Form/Participants';

class Form extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <div className="ml-8 mdi:ml-0 ">
        <div className="lg:ml-8 xl:ml-8 md:ml-8">
          <div className=" h-auto bg-white p-8 m-18">
            <h2 className="text-center font-bold text-2xl">
              ENREGISTRER VOUS
            </h2>
            <h3 className="text-center mt-4 mb-4 text-lg font-bold">
             Participez aux JFAC 2020</h3>
            <Tabs>
              <TabList>
                <Tab>Experts</Tab>
                <Tab>Exposants</Tab>
                <Tab>Participants</Tab>
                <Tab>Presses</Tab>
              </TabList>

              <TabPanel>
                <h2><Experts/></h2>
              </TabPanel>
              <TabPanel>
                <h2><Exposant/></h2>
              </TabPanel>
              <TabPanel>
                <h2><Participants/></h2>
              </TabPanel>
              <TabPanel>
                <h2><Presse/></h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>

      </div>
    );
  }
}

export default Form;
