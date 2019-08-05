import React from 'react';
import Book from './Book';

const Mag = ({img}) => {
  return (
    <div className="inf_mag_bg ">
      <p className="font-bold mag_text text-white">Le magazine des JFAC</p>
      <p className="text-white max-w-xl">
      Le vrai problème de la déforestation, des changements climatiques en Afrique, n'est pas l'absence de solutions, mais notre capacité à informer et toutes les parties prenantes des solutions et alternatives que nous avons et à leur donner des outils et bonnes pratiques pour aller à l'encontredes habitudes qui nuisent au développement de l'Afrique.
      </p>
      <div className="flex inf_mag_container flex-wrap">
        <div className="bg-white card_mag flex flex-col items-center m-8">
          <Book
          img={img}
          title="AfriK Ecolo"
          link="https://cdn.filestackcontent.com/wnB0ST8qQ6iyodSnVktY" 
          />
        </div>
      </div>
    </div>
  );
};
export default Mag;
