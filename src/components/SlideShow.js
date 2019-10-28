import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const SlideShow = ({url}) => {
  const images = [
    {
      original: "https://res.cloudinary.com/infinityapis/image/upload"+url,
      originalAlt:url.altText
    },
  ]

  return (
    <ImageGallery lazyLoad={true} items={images}  showThumbnails={false} showPlayButton={false}  />
  );
};
export default SlideShow;
