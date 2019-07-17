import React from 'react';
import logo from '../Images/logorefacc.png';
import "../css/Navbar.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex flex-1  justify-center">
        <a href="#google.ci">
          <img src={logo} alt="Le logo du refacc" />
        </a>
        <label
        for="menu-toggle"
        className="pointer-cursor lg:hidden block self-center"
      >
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
        <div class="hidden lg:flex lg:items-center lg:justify-center lg:w-auto w-full" id="menu">
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
                href="#google.ci"
              >
                Acceuil
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
                href="#google.ci"
              >
                Refacc
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold"
                href="#google.ci"
              >
              Zoom sur
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold lg:mb-0 mb-2"
                href="#google.ci"
              >
                Jfac
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold lg:mb-0 mb-2"
                href="#google.ci"
              >
                Vidéos
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold lg:mb-0 mb-2"
                href="#google.ci"
              >
                Galerie
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold lg:mb-0 mb-2"
                href="#google.ci"
              >
                Nous contacter
              </a>
            </li>
            <li  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold lg:mb-0 mb-2">
            <FontAwesomeIcon icon={faPhone} color="#3F9F42" className="mr-4"/>
              +225 49 87 69 50
          
          </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};
export default Navbar;
