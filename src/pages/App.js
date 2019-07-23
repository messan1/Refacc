import React from 'react';
import {NavLink, Switch, Route,Redirect} from 'react-router-dom';
import Homepage from './Homepage';
import Contact from './Contact';
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import Banner from './../components/Banner';
import '../css/animation.css';
import Galery from './Galery';
import Jfac20 from './Jfac20';
import Thanks from './Thanks';


function App () {
  return (
    <div>
      <Banner />
      <div className="bg-black w-0 h-0 hidden">
        menu
      </div>
      <Navbar>
        <NavLink
          className=" text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/"
          activeClassName="active"
        >
          Acceuil
        </NavLink>
        <NavLink
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/"
          activeClassName="active"
        >
          Refacc
        </NavLink>
        <NavLink
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/"
          activeClassName="active"
        >
          Zoom sur
        </NavLink>
        <NavLink
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/jfac"
          activeClassName="active"
        >
          JFAC
        </NavLink>
        <NavLink
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          to="/nous-contacter"
          activeClassName="active"
        >
          Nous contacter
        </NavLink>
        <NavLink
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/"
          activeClassName="active"
        >
          Galerie
        </NavLink>
        <NavLink
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/"
          activeClassName="active"
        >
          Vidéos
        </NavLink>
      </Navbar>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/nous-contacter" component={Contact} />
          <Route exact path="/galerie" component={Galery} />
          <Route exact path="/jfac" component={Jfac20} />
          <Route exact path="/merci" component={Thanks} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
