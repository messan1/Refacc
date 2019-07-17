import React from 'react';
import imgconf from "../Images/Activities/act1.png";
import "../css/animation.css";

const Activity = () =>{
  return(
    <div className="h-auto mr-4 max-w-xs mb-8">
      <div className="relative">
        <div className="h-full w-full absolute  opacity-50 z-10 inf-width border-grefacc" />

        <img src={imgconf} alt="" className="object-cover" />
      </div>
      <h1 className="font-bold text-black text-xl">Conférences</h1>
      <p className="text-justify text-gray-600">
      Tables rondes, débats, dédicaces : découvrez les rendez-vous qui rythmeront les cinq jours de l’événement touristique de référence.
      </p>
    </div>
  )
}

export default Activity;