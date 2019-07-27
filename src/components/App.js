import React from 'react';
import {Link} from "gatsby"
import Navbar from './Navbar';
import Banner from './Banner';
import '../css/animation.css';


function App () {
  return (
    <div>
      <Banner />
      <div className="bg-black w-0 h-0 hidden">
        menu
      </div>
      <Navbar>
        <Link
          className=" text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/"
          activeClassName="active"
        >
          Acceuil
        </Link>
        <Link
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/"
          activeClassName="active"
        >
          Refacc
        </Link>
        <Link
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/"
          activeClassName="active"
        >
          Zoom sur
        </Link>
        <Link
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/les-jfac-20"
          activeClassName="active"
        >
          JFAC
        </Link>
        <Link
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          to="/nous-contacter"
          activeClassName="active"
        >
          Nous contacter
        </Link>
        <Link
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/"
          activeClassName="active"
        >
          Galerie
        </Link>
        <Link
          className="text-lg lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
          exact
          to="/"
          activeClassName="active"
        >
          Vidéos
        </Link>
      </Navbar>
    </div>
  );
}

export default App;
