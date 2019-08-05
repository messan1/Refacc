import React from 'react';
import img from '../images/slide/slide1.jpg';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const SlideShow = () => {
  const images = [
    {
      original: img,
      originalAlt:"Les JFAC 2020"
    },
  ]

  return (
    <ImageGallery lazyLoad={true} items={images}  showThumbnails={false} showPlayButton={false}  />
  );
};
export default SlideShow;
