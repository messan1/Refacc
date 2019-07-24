import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
const Plus = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <FontAwesomeIcon
        icon={faPlus}
        color="#3F9F42"
        size="3x"
        
      />
      <p className="font-bold text-xl">Voir Plus de vidéo</p>
    </div>
  );
};

export default Plus;
