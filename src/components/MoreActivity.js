import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
import {Link} from "gatsby"
const MoreActivity = () =>{
  return(
    <div className=" showmorevideotech border-4 border-grefacc p-8">
      <h3 className="font-bold text-xl text-black mb-4">Découvrir la vidéothèque</h3>
      <div className="h-1 bg-grefacc w-24 mb-4"/>
      <p className="text-justify mb-8 text-gray-600"></p>
      <Link to="/videotheque" className="text-gray-700"> 
        Voir plus
        <FontAwesomeIcon icon={faChevronRight} color="#3F9F42" className="ml-2"/>
      </Link>
      </div>
  )
}

export default MoreActivity