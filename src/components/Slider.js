import React from 'react';
import '../css/slider.css';

const Slider = () => {
  return (
    <div className=" mb-8 sliderbody">
      <div className="slider-container">
        <div className="slider-control left inactive" />
        <div className="slider-control right" />
        <ul className="slider-pagi" />
        <div className="slider">
          <div className="slide slide-0 active">
            <div className="slide__bg" />
            <div className="slide__content">
              <svg
                className="slide__overlay"
                viewBox="0 0 720 405"
                preserveAspectRatio="xMaxYMax slice"
              >
                <path
                  className="slide__overlay-path"
                  d="M0,0 150,0 500,405 0,405"
                />
              </svg>
              <div className="slide__text">
                <h2 className="slide__text-heading font-bold">
                  Mot du Ministres pour les <br/> JFAC 2019
                </h2>
                <p className="slide__text-desc mb-4">
                Les Journées africaines de l’écologie et des
                changements climatiques (JFAC 2019)
                deviennent un baromètre des actions
                climatiques et écologiques de la Côte d’Ivoire.
                «Les JFAC peuvent et doivent, en eet, constituer un rendez-vous périodique (peut-être
                annuel) d’évaluation de nos progrès en matière
                de lutte contre les changements climatiques et
                d’atteinte des Objectifs du Développement
                Durable (ODD){' '}
                </p>
                <div className="flex flex-row mt-4">
                  <a
                    href="#gogle.ci"
                    className="p-2 pl-8 pr-8 bg-grefacc text-white text-xl font-bold"
                  >
                    Plus
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide slide-1 ">
            <div className="slide__bg" />
            <div className="slide__content">
              <svg
                className="slide__overlay"
                viewBox="0 0 720 405"
                preserveAspectRatio="xMaxYMax slice"
              >
                <path
                  className="slide__overlay-path"
                  d="M0,0 150,0 500,405 0,405"
                />
              </svg>
              <div className="slide__text">
                <h2 className="slide__text-heading font-bold">
                  Lancement
                  des JFAC 2019
                </h2>
                <p className="slide__text-desc mb-4">
                  Les objectifs des Journées Africaines de l’Ecologie et des Changements
                  Climatiques (JFAC) coïncident avec les missions assignées à mon
                  département ministériel et cadrent avec la vision{' '}
                </p>
                <div className="flex flex-row mt-4">
                  <a
                    href="#gogle.ci"
                    className="p-2 pl-8 pr-8 bg-grefacc text-white text-xl font-bold"
                  >
                    A propos
                  </a>
                  <a
                    href="#gogle.ci"
                    className="p-2 pl-8 pr-8 bg-white border-2 ml-4 border-grefacc text-grefacc text-xl font-bold"
                  >
                    Nous Contacter
                  </a>
                </div>
              </div>
            </div>
          </div>{' '}
          </div>
      </div>
    </div>
  );
};

export default Slider;
