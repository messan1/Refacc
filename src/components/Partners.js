import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import JfacTalker from './JfacTalker';
import PartnersLogo from './PartnersLogo';
const Partners = () => {
  return (
    <div className="w-full  pb-8 pt-8">
      <div className="flex items-center mr-2 justify-center">
        <FontAwesomeIcon icon={faCommentAlt} color="#a0aec0" size="4x" />
        <h1 className="font-bold text-3xl ml-4">ILS PARLENTS DES JFAC</h1>
      </div>
      <div className="bg-grefacc h-1 w-16 m-auto" />
      <div className="w-2 h-1 bg-red" />
      <div className="flex justify-center flex-wrap">
        <JfacTalker />
        <JfacTalker />
      </div>
      <div className="flex items-center mr-2 justify-center">

        <h1 className="font-bold text-3xl ml-4  mt-8">NOS PARTENAIRES</h1>
      </div>
      <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
      <div className="flex items-center flex-wrap justify-center">
        <PartnersLogo />
        <PartnersLogo />
        <PartnersLogo />
        <PartnersLogo />
        <PartnersLogo />
        <PartnersLogo />
        <PartnersLogo />
        <PartnersLogo />
      </div>
    </div>
  );
};
export default Partners;
