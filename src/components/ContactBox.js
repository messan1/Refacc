import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactBox = ({icon,title,content}) => {
  return (
    <div className="flex items-center mt-8">
      <div className="bg-grefacc p-4 w-16">
        <FontAwesomeIcon icon={icon} color="white" size="2x" />
      </div>
      <div className="ml-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        {content.map((element)=> <p> {element}</p> )}
      </div>
    </div>
  );
};
export default ContactBox;
