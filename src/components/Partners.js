import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import JfacTalker from './JfacTalker';

import partlogo from '../images/l.png';
import partlog2 from '../images/h.jpg';


//Query
import {StaticQuery, graphql} from 'gatsby';

//Mq
import MediaQuery from 'react-responsive';

//slider
import Carousel from "nuka-carousel";
import PartnersLogo from './PartnersLogo';


const Partners = () => (
  <StaticQuery
    query={graphql`
            query {Refacc{
              partnerses{
                img{
                  id
                  url
                  }
                }
              }
            }
          `}

    render={data => (
      <div className="w-full  pb-8 pt-8">
        <div className="flex items-center mr-2 justify-center">
          <FontAwesomeIcon icon={faCommentAlt} color="#a0aec0" size="4x" />
          <h6 className="font-bold text-3xl ml-4">ILS PARLENTS DES JFAC</h6>
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
            text="Lancement à Abidjan des 2èmes Journées africaines de l’écologie et des changements climatiques prévues du 18 au 22 mars 2019 au palais de la culture de Treichville..."
          />
        </div>
        <div className="flex items-center mr-2 justify-center">

          <h6 className="font-bold text-3xl ml-4  mt-8">NOS PARTENAIRES</h6>
        </div>
        
        <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
        <MediaQuery query="(min-width: 1018px)">
        <div className="flex items-center flex-wrap justify-center">
        <Carousel slidesToShow={10} cellSpacing={20} withoutControls="false" autoplay="true">
          {data.Refacc.partnerses.map(function(item){
            return  <PartnersLogo img={item.img.url} />
          })}
          </Carousel>
        </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1018px)">
        <div className="flex items-center flex-wrap justify-center">
        <Carousel slidesToShow={6} cellSpacing={20} withoutControls="false" autoplay="true">
          {data.Refacc.partnerses.map(function(item){
            return  <PartnersLogo img={item.img.url} />
          })}
          </Carousel>
        </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 800px)">
        <div className="flex items-center flex-wrap justify-center">
        <Carousel slidesToShow={5} cellSpacing={20} withoutControls="false" autoplay="true">
          {data.Refacc.partnerses.map(function(item){
            return  <PartnersLogo img={item.img.url} />
          })}
          </Carousel>
        </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 577px)">
        <div className="flex items-center flex-wrap justify-center">
        <Carousel slidesToShow={3} cellSpacing={20} withoutControls="false" autoplay="true">
          {data.Refacc.partnerses.map(function(item){
            return  <PartnersLogo img={item.img.url} />
          })}
          </Carousel>
        </div>
        </MediaQuery>
      </div>
     
    )}
  />
);

export default Partners;