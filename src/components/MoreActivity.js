import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
const MoreActivity = () =>{
  return(
    <div className=" max-w-xs border-4 border-grefacc p-8">
      <h3 className="font-bold text-3xl text-black mb-4">En savoir plus <br/>
      sur les activités</h3>
      <div className="h-1 bg-grefacc w-24 mb-4"/>
      <p className="text-justify mb-8 text-gray-600">Morbi iaculis, tortor id tincidunt luctus, est mi dapibus lectus, sed efficitur tellus lacus sit amet ligula. Aenean aliquam quam velit, sed bibendum tortor</p>
      <a href="#google.ci" className="text-gray-700"> 
        En savoir plus
        <FontAwesomeIcon icon={faChevronRight} color="#3F9F42" className="ml-2"/>
      </a>
      </div>
  )
}

export default MoreActivity