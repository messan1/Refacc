import React from 'react';
import img from '../images/slide/slide1.jpeg';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const SlideShow = () => {
  const images = [
    {
      original: img,
    },
  ]

  return (
    <ImageGallery lazyLoad={true} items={images}  showThumbnails={false} showPlayButton={false}  />
  );
};
export default SlideShow;
