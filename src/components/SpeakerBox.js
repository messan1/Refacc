import React from 'react';
import testimg from '../Images/aboutimg.png';

const SpeakerBox = ({right,left}) => {
  return (
    <div className="shadow-lg flex p-8 max-w-4xl mdi:max-w-4xl md:max-w-2xl xl:max-w-4xl lg:max-w-4xl justify-around items-center mt-8 mb-12 bg-white md:flex-wrap tiny:flex-wrap sm:flex-wrap xs:flex-wrap mdi:flex-no-wrap lg:flex-no-wrap">
    {right && <img src={testimg} alt="" className="object-cover max-w-sm"/>}
      <div className="m-10" >
        <h1 className="font-bold text-3xl mb-2 " >
          Prof Joseph SEKA
          SEKA,
        </h1>
        <h3 className="italic  mb-4">Ministre de l'environnemnet et du developpement durable</h3>
        <p className="text-justify">
          "Nous sommes tous concernés par les
          conséquences de la dégradation de notre
          environnement et du changement climatique
          et aucun pays africain, aucun secteur, aucune
          couche sociale n'est épargnée. Les enjeux sont
          réels et palpables. Et heureusement les
          solutions existent pour proposer de nouveaux
          modèles économiques plus durables basés sur
          une croissance intelligente, équitable et
          soucieuse des dés environnementaux et
          sociaux. L’institution des journées africaines de
          l'écologie se présente comme un espace
          privilégié d’échange entre experts et de{' '}
        </p>
      </div>
      {left && <img src={testimg} alt="" className="object-cover max-w-sm"/>}
    </div>
  );
};
export default SpeakerBox;
