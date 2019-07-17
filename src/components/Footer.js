import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black h-auto flex justify-center xs:flex-wrap sm:flex-no-wrap lg:flex-no-wrap md:flex-no-wrap pt-8 pb-8">
      <div className="flex items-center justify-around w-full">
        <h2 className="text-white font-bold text-2xl">REFACC</h2>

      </div>
      <div className="flex items-start flex-wrap justify-around w-full">
        <div>
          <h2 className="text-white font-bold text-lg">Navigation</h2>
          <div className="h-1 bg-grefacc w-8 mb-4" />
          <ul>
            <li className="mb-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                color="#3F9F42"
                className="mr-2"
              />
              <a href="#google.ci" className="text-white">Acceuil</a>
            </li>
            <li className="mb-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                color="#3F9F42"
                className="mr-2"
              />
              <a href="#google.ci" className="text-white">Acceuil</a>
            </li>
            <li className="mb-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                color="#3F9F42"
                className="mr-2"
              />
              <a href="#google.ci" className="text-white">Acceuil</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold text-lg">Liens</h2>
          <div className="h-1 bg-grefacc w-8 mb-4" />
          <ul>
            <li>
              <a href="#google.ci" className="text-white">Acceuil</a>
              <p className="text-grefacc font-bold">12/05/2019</p>
            </li>
            <li>
              <a href="#google.ci" className="text-white">Acceuil</a>
              <p className="text-grefacc font-bold">12/05/2019</p>
            </li>
            <li>
              <a href="#google.ci" className="text-white">Acceuil</a>
              <p className="text-grefacc font-bold">12/05/2019</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold text-lg">Suivez le Refacc</h2>
          <div className="h-1 bg-grefacc w-8 mb-4" />
        </div>

      </div>
    </footer>
  );
};
export default Footer;
