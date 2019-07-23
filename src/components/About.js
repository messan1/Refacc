import React from 'react';
import aboutimg from '../Images/aboutimg.png';

const About = () => {
  return (
    <div className="flex flex-1 justify-around items-start h-auto mb-24 md:flex-no-wrap sm:flex-wrap tiny:flex-wrap">
 
      <img src={aboutimg} className="p-0 object-cover h-auto xl:max-w-sm lg:max-w-sm md:max-w-sm mdi:max-w-sm sm:max-w-xs tiny:max-w-xs p-6 " alt="Mr Marcel Yao" />
      <div className="w-2/4 bg-white md:ml-8 self-start sm:w-full sm:m-0 tiny:w-full">
        <h5 className="font-bold text-sm mb-2 text-grefacc">A propos</h5>
        <h6 className="font-bold text-2xl mb-2">Le REFACC en quelques mots</h6>
        <p className="text-justify text-gray-600">
          Le réseau des Experts africains pour les Forêt l'agriculture,l'énergie et les
          {' '}
          changements climatiques, en abrégé REFACC est une association non
          lucrative créée par un consortion d'expert africains en vue de renforcerle
          {' '}
          dialogue et la coopération avec les acteurs des pays africains. Ce réseau
          {' '}
          apolitique se propose d'apporter une dynamique à la lutte contre les
          changements climatiques dans les collectivités et aider les communautés
          {' '}
          rurales les plus vulnérables.
        </p>
        <div className="mt-8 border-4 border-grefacc flex justify-around items-center">
          <span className="xl:text-7xl font-bold md:text-6xl text-grefacc m-4 tiny:text-5xl lg:text-6xl md:text-4xl lg:m-0">
            2
          </span>
          <p className="xl:text-3xl md:text-2xl text-gray-500 sm:text-md tiny:text-sm lg:text-xl ">
            Années d'expériences <br />
            dans le domaine <br />
            de l'écologie
          </p>
          <a
            href="#google.ci"
            className="p-3 m-3 bg-grefacc text-white font-bold"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
