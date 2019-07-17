import React from 'react';
import "../css/slider.css"

const Slider = () =>{
  return(
    <div className="sliderbody">
    <div className="slider-container">
    <div className="slider-control left inactive"></div>
    <div className="slider-control right"></div>
    <ul className="slider-pagi"></ul>
    <div className="slider">
      <div className="slide slide-0 active">
        <div className="slide__bg"></div>
        <div className="slide__content">
          <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
            <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
          </svg>
          <div className="slide__text">
            <h2 className="slide__text-heading font-bold">Cérémonie de lancement 
            des JFAC 2019</h2>
            <p className="slide__text-desc">Les objectifs des Journées Africaines de l’Ecologie et des Changements
            Climatiques (JFAC) coïncident avec les missions assignées à mon
            département ministériel et cadrent avec la vision </p>
            <div className="flex flex-row">
              <a href="#gogle.ci" className="p-2 pl-8 pr-8 bg-grefacc text-white text-xl font-bold">Plus</a>
              <a href="#gogle.ci" className="p-2 pl-8 pr-8 bg-white border-2 ml-4 border-grefacc text-grefacc text-xl font-bold">Plus</a>
            </div>
          </div>
        </div>
      </div>
      <div className="slide slide-1 ">
        <div className="slide__bg"></div>
        <div className="slide__content">
          <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
            <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
          </svg>
          <div className="slide__text">
            <h2 className="slide__text-heading">Project name 2</h2>
            <p className="slide__text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.</p>
            <a href="#google.ci" className="slide__text-link">Project link</a>
          </div>
        </div>
      </div>
      <div className="slide slide-2">
        <div className="slide__bg"></div>
        <div className="slide__content">
          <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
            <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
          </svg>
          <div className="slide__text">
            <h2 className="slide__text-heading">Project name 3</h2>
            <p className="slide__text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.</p>
            <a href="#google.ci" className="slide__text-link">Project link</a>
          </div>
        </div>
      </div>
      <div className="slide slide-3">
        <div className="slide__bg"></div>
        <div className="slide__content">
          <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
            <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
          </svg>
          <div className="slide__text">
            <h2 className="slide__text-heading">Project name 4</h2>
            <p className="slide__text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.</p>
            <a href="#google.ci" className="slide__text-link">Project link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Slider;