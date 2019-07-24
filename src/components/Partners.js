import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import JfacTalker from './JfacTalker';
import PartnersLogo from './PartnersLogo';

import partlogo from "../images/l.png"
import partlog2 from "../images/h.jpg"
//images 
import part1 from "../images/Partners/part1.png"
import part2 from "../images/Partners/part2.png"
import part3 from "../images/Partners/part3.jpeg"
import part4 from "../images/Partners/part4.jpeg"
import part5 from "../images/Partners/part5.jpg"
import part6 from "../images/Partners/part8.png"
import part7 from "../images/Partners/part9.png"
import part8 from "../images/Partners/1310dc9e2dd35f0c.png"
import part9 from "../images/Partners/af502c9a96446632.jpg"
import part10 from "../images/Partners/part10.png"
import part11 from "../images/Partners/part11.png"
import part12 from "../images/Partners/part13.png"
import part13 from "../images/Partners/part3.gif"



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
        <JfacTalker
        img={partlogo}
        name="Atoo.ci"
          text="APA-Abidjan (Côte d’Ivoire)- Les deuxièmes Journées africaines de l’écologie et des changements climatiques (JFAC) prévues à Abidjan du 18 au 22 mars 2019 autour du thème, « comment réussir les transitions énergétique et écologique dans les pays d’Afrique ?"
        />
        <JfacTalker 
        img={partlog2}
        name="ABIDJAN EXPRESS"
        text="Lancement à Abidjan des 2èmes Journées africaines de l’écologie et des changements climatiques prévues du 18 au 22 mars 2019 au palais de la culture de Treichville..." />
      </div>
      <div className="flex items-center mr-2 justify-center">

        <h1 className="font-bold text-3xl ml-4  mt-8">NOS PARTENAIRES</h1>
      </div>
      <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
      <div className="flex items-center flex-wrap justify-center">
        
        <PartnersLogo img={part1} />
        <PartnersLogo img={part2} />
        <PartnersLogo img={part3} />
        <PartnersLogo img={part4} />
        <PartnersLogo img={part5} />
        <PartnersLogo img={part6} />
        <PartnersLogo img={part7} />
        <PartnersLogo img={part8} />
        <PartnersLogo img={part9} />
        <PartnersLogo img={part10} />
        <PartnersLogo img={part11} />
        <PartnersLogo img={part12} />
        <PartnersLogo img={part13} />

      </div>
    </div>
  );
};
export default Partners;
