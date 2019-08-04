import React from 'react';
import '../../css/downloads.css';
import Btn from './Btn';
import ScrollAnimation from 'react-animate-on-scroll';

const Slider = ({img}) => {
  return (
    <div className="inf_slider_bg">
      <div className="flex justify-center inf_slide_content items-center p-4 pt-8 pb-8">
        <div className="text-center inf_slider_text">
          <div>
          <ScrollAnimation
            animateIn="fadeInDown"
            delay="1000"
            duration="3"
            animateOnce={true}
          >
            <p className="font-bold mb-8 lg:text-4xl xl:text-4xl md:text-2xl sm:text-2xl tiny:text-2xl">
              The Books That Critics Say You <br />
              Should Read This Summer.{' '}
            </p>
            </ScrollAnimation>
            <ScrollAnimation
            animateIn="fadeInUp"
            delay="1000"
            duration="4"
            animateOnce={true}
            >
            <p className="text_slide">
              Byron Kelly is a bestselling author, illustrator, and thinker. His books
              {' '}
              <br />

              demonstrate a 'learn by doing approach', and are being used all over the world
              {' '}
              <br />

              as a way of fostering non-traditional methods of exploration.{' '}
            </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="fadeInUp"
            delay="1000"
            duration="5"
            animateOnce={true}
            >
          <Btn text="Télécharger" />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation
            animateIn="zoomIn"
            animateOnce={true}
          >
            <img  src={img} alt="" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Slider;
