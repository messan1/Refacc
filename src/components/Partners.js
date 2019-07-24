import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import JfacTalker from './JfacTalker';

import partlogo from '../images/l.png';
import partlog2 from '../images/h.jpg';


//Query
import {StaticQuery, graphql} from 'gatsby';

//slider
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
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
            text="Lancement à Abidjan des 2èmes Journées africaines de l’écologie et des changements climatiques prévues du 18 au 22 mars 2019 au palais de la culture de Treichville..."
          />
        </div>
        <div className="flex items-center mr-2 justify-center">

          <h1 className="font-bold text-3xl ml-4  mt-8">NOS PARTENAIRES</h1>
        </div>
        <div className="bg-grefacc h-1 w-16 m-auto mb-8" />
        <div className="flex items-center flex-wrap justify-center">
          <AliceCarousel
            responsive={{
              0: {items: 2},
              355: {items: 3},
              552: {items: 3},
              956: {items: 5},
              1024: {items: 9},
            }}
            autoPlayInterval={1000}
            autoPlayDirection="rtl"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseDragEnabled={false}
            playButtonEnabled={false}
            disableAutoPlayOnAction={true}
            dotsDisabled={true}
            buttonsDisabled={true}
          >
          
          {data.Refacc.partnerses.map(function(item){
            return <PartnersLogo img={item.img.url} alt="" />
          })}
          </AliceCarousel>

        </div>
      </div>
    )}
  />
);

export default Partners;
