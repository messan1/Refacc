import React from 'react';
import logo from '../Images/logorefacc.png';
import '../css/Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import BurgerIcon from './burgerIcon';
import Menu from './Menu';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '40px',
};
const contentStyle = {
  background: 'rgba(255,255,255,0',
  width: '80%',
  border: 'none',
};

const Navbar = ({children}) => {
  return (
    <nav className="lg:px-0 px-0 pt-8 pb-8 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex flex-1  lg:justify-center md:justify-around sm:justify-around xs:justify-around tiny:justify-around">
        <a href="#google.ci">
          <img src={logo} alt="Le logo du refacc" />
        </a>
        <label
          for="menu-toggle"
          className="pointer-cursor lg:hidden block self-center hidden"
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
        <div
          class="hidden lg:flex lg:items-center lg:justify-center lg:w-auto w-full"
          id="menu"
        >
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            {children}
            <li className="hidden text-xl lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-grefacc text-black font-bold lg:mb-0 mb-2">
              <FontAwesomeIcon
                icon={faPhone}
                color="#3F9F42"
                className="mr-2 "
              />
              +22522460814

            </li>
          </ul>

        </div>
        <div style={styles} className="lg:hidden">
        <div className="flex justify-center items-center">
        <p className="font-bold">Menu</p>
        <Popup
          modal
          overlayStyle={{background: 'rgba(255,255,255,0.98'}}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>
        </div>
      </div>
      </div>

    </nav>
  );
};
export default Navbar;
