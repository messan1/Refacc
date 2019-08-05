import React from 'react';
import '../../css/downloads.css';
import BtnDown from './BtnDown';
import ScrollAnimation from 'react-animate-on-scroll';

const Slider = ({img}) => {
  return (
    <div className="inf_slider_bg">
      <div className="flex justify-center inf_slide_content items-center p-4 pt-8 pb-8">
        <div className="text-center inf_slider_text max-w-2xl">
          <div className="flex flex-col justify-center items-center">
            <ScrollAnimation
              animateIn="fadeInDown"
              delay="1000"
              duration="3"
              animateOnce={true}
            >
              <p className="font-bold text-start w-full mb-8 lg:text-4xl xl:text-4xl md:text-2xl sm:text-2xl tiny:text-2xl">
                Le Magazine des journées africaines
                {' '}
                <br />
                {' '}
                de l'écologie et des
                <br />
                {' '}
                changements climatiques

              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              delay="1000"
              duration="4"
              animateOnce={true}
            >
              <p className="text_slide text-left">
                La lutte contre le changement climatique étant d'une complexité monstrueuse qui engage l’avenir, pour les experts du REFACC, le vrai problème de la déforestation, des changements climatiques en Afrique, n'est pas l'absence de
                solutions, mais notre capacité à informer et toutes les parties prenantes des solutions et alternatives que nous avons et à leur donner des
                outils et bonnes pratiques pour aller à l'encontredes habitudes qui nuisent au développement de l'Afrique.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="fadeInUp"
            delay="1000"
            duration="5"
            animateOnce={true}
          >
            <BtnDown text="Télécharger" link="https://cdn.filestackcontent.com/wnB0ST8qQ6iyodSnVktY" />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
            <img src={img} alt="Document d'afik ecolo" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Slider;
