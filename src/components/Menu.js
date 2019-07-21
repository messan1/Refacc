import React from "react";
import {NavLink} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}><NavLink exact to="/">Acceuil</NavLink></li>
      <li onClick={close}><NavLink exact to="/">Refacc</NavLink></li>
      <li onClick={close}><NavLink exact to="/">Zoom sur</NavLink></li>
      <li onClick={close}><NavLink exact to="/jfac">JFAC</NavLink></li>
      <li onClick={close}><NavLink exact to="/nous-contacter">Nous contacter</NavLink></li>
      <li onClick={close}><NavLink exact to="/galerie">Galerie</NavLink></li>
      <li onClick={close}><NavLink exact to="/">Vidéotèque</NavLink></li>
      <li  className="flex justify-center items-center"> <FontAwesomeIcon icon={faPhone}  color="#3F9F42"
      className="mr-2 " /> +225 09 53 62 06 </li>
      <li onClick={close}>Fermer</li>
    </ul>
  </div>
);
