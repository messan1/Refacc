import React from "react";
import {Link} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}><Link exact to="/">Acceuil</Link></li>
      <li onClick={close}><Link exact to="/">Refacc</Link></li>
      <li onClick={close}><Link exact to="/">Zoom sur</Link></li>
      <li onClick={close}><Link exact to="/jfac">JFAC</Link></li>
      <li onClick={close}><Link exact to="/nous-contacter">Nous contacter</Link></li>
      <li onClick={close}><Link exact to="/">Galerie</Link></li>
      <li onClick={close}><Link exact to="/">Vidéotèque</Link></li>
      <li  className="flex justify-center items-center"> <FontAwesomeIcon icon={faPhone}  color="#3F9F42"
      className="mr-2 " /> +225 09 53 62 06 </li>
      <li onClick={close}>Fermer</li>
    </ul>
  </div>
);
