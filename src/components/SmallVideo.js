import React from 'react';
import '../css/video.css';
import {Link} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';

const SmallVideo = ({link,title,img,tag}) => {
  return (
    <Link
      className="relative bg-black mb-24 m-4"
      style={{
        height: '200px',
        width: '300px',
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      state={{
        link:link,
        title:title
      }}
      to="/lecteur-video"
    >
      <div className="filtervideo" />
      <div className="iconblock flex justify-center items-center">
        <FontAwesomeIcon icon={faPlayCircle} color="white" size="2x" className="z-50" />
      </div>
      <div className="contentvideo">
        <span>{tag}</span>
        <div className="mt-4" />
      </div>
      <p className="font-bold text-lg ">{title}</p>
    </Link>
  );
};

export default SmallVideo;
