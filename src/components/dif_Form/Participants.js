import React from 'react';

const Participants = () => {
  return (
    <div className="md:ml-0 lg:ml-4 max-w-md">
      <form className="" name="Particiapnst" method="POST" data-netlify="true">
        <div className="">
          <label className="text-xl text-black mb-2">Nom & prénoms</label>
          <input
            type="text"
            name="name"
            placeholder="Votre nom et prénoms"
            className="w-full  h-16 border border-gray-300 mb-6 "
          />
        </div>
        <div className="">
        <label className="text-xl text-black mb-2">Pays</label>
        <input
          type="text"
          name="pays"
          placeholder="Votre pays"
          className="w-full  h-16 border border-gray-300 mb-6 "
        />
      </div>
        <div className="">
        <label className="text-xl text-black mb-2">Ville</label>
        <input
          type="text"
          name="vile"
          placeholder="Votre ville"
          className="w-full  h-16 border border-gray-300 mb-6 "
        />
      </div>
        <div className="">
          <label className="text-xl text-black mb-8">Participation</label>
          <select className="w-full border-4 border-grefacc h-16 mb-6">
            <option value="1">
              1 jour de participation
            </option>
            <option value="1 jour">
            1 jour de participation</option>
            <option value="2 jours">
            2 jours de participation</option>
            <option value="3 jours">
            3 jours de participation</option>
            <option value="4 jours">
            4 jours de participation</option>
            <option value="5 jours">
            5 jours de participation</option>
            <option value="6 jours">
            6 jours de participation</option>
           
          </select>
        </div>
        <div className="">
          <label className="text-xl text-black mb-2">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Votre Email"
            className="w-full  h-16 border border-gray-300 mb-6 "
          />
        </div>
        <div className="">
          <label className="text-xl text-black mb-8">Contact</label>
          <input
            type="text"
            name="Contact"
            placeholder="Votre Contact "
            className="w-full border border-gray-300  mb-6 h-16"
          />
        </div>
        <a className="bg-grefacc p-4 text-white font-bold" href="#google">
        Valider
      </a>
      </form>
    </div>
  );
};

export default Participants;
