import React from 'react';

const Presse = () => {
  return (
    <div className="md:ml-0 lg:ml-4">
      <form name="Presse"  action="//formspree.io/infinity.soft@aol.com"
      method="POST">
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
          <label className="text-xl text-black mb-8">Agence</label>
          <input
            className=" w-full border border-gray-300  h-16 mb-6"
            type="text"
            name="structure"
            placeholder="Structure"
          />

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
        <input
        type="submit"
        value="Envoyer"
        className="bg-grefacc p-4 text-white font-bold"
      />
      </form>
    </div>
  );
};

export default Presse;
