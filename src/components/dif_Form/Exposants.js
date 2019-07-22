import React from 'react';
import {withFormik} from 'formik';
import * as yup from 'yup';




const Formik = ({values,handleChange,errors}) => {
  return (
    <div className="md:ml-0 lg:ml-4">
      <form name="Exposants" action="//formspree.io/messanchristian@hotmail.com"
      method="POST" >
        <div className="">
        <p className="text-red-700 mb-4">{errors.name}</p>
          <label className="text-xl text-black mb-2">Nom & prénoms</label>
          <input
            type="text"
            name="name"
            placeholder="Votre nom et prénoms"
            className="w-full  h-16 border border-gray-300 mb-6 "
            onChange={handleChange}
            value={values.name}
          />
        </div>
        <div className="">
        <p className="text-red-700 mb-4">{errors.structure}</p>
          <label className="text-xl text-black mb-8">Structure</label>
          <input
            className=" w-full border border-gray-300  h-16 mb-6"
            type="text"
            name="structure"
            placeholder="Structure"
            onChange={handleChange}
            value={values.structure}
          />

        </div>
        <div className="">
        <p className="text-red-700 mb-4">{errors.email}</p>
          <label className="text-xl text-black mb-2">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Votre Email"
            className="w-full  h-16 border border-gray-300 mb-6 "
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="">
        <p className="text-red-700 mb-4">{errors.contact}</p>
          <label className="text-xl text-black mb-8">Contact</label>
          <input
            type="text"
            name="contact"
            placeholder="Votre Contact "
            className="w-full border border-gray-300  mb-6 h-16"
            onChange={handleChange}
            value={values.contact}
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

const Exposant = withFormik ({
  mapPropsToValues({name, email, contact, structure}) {
    return {
      name: name || '',
      email: email || '',
      contact: contact || '',
      structure: structure || '',
  };
},
  validationSchema: yup.object ().shape ({
    email: yup
      .string ()
      .email ('Entrez une adresse valide')
      .required ("L'email est obligatoire"),
    name: yup.string ().required ('Votre nom est obligatoire'),
    contact: yup.string (),
    structure: yup.string ("Entrez votre structure"),
  }),
  handleSubmit (values) {
    console.log (values);
  },
}) (Formik);



export default Exposant;
