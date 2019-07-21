import React from 'react';
import {withFormik} from 'formik';
import * as yup from 'yup';

const Formik = ({values, handleChange,errors}) => {
  return (
    <div className="md:ml-0 lg:ml-4 max-w-md">
      <form className=""  name="Experts" method="POST" data-netlify="true">
        <div className="">
          <p className="text-red-700 mb-4">{errors.name}</p>
          <label className="text-xl text-black mb-2">Nom & prénoms</label>
          <input
            type="text"
            name="name"
            placeholder="Votre nom et prénoms"
            className="w-full  h-16 border border-gray-300 mb-6 "
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label className="text-xl text-black mb-8">Atélier</label>
          <select
            className="w-full h-16 mb-6 border-2"
            name="Atelier"
            onChange={handleChange}
          >
            <option value="Atelier 1">
              Atelier 1 : Rôle des collectivités territoriales et du secteur privé dans la production décentralisée d’énergies renouvelables : solaire, biomasse, petite hydroélectricité.
            </option>
            <option value="Atelier 2">
              Atelier 2 : Villes durables - défis urbains dans les villes africaines et Accès aux financements climatiques
            </option>
            <option value="Atelier 3">
              Atelier 3 : Rôle de la recherche et de la formation dans la transition vers l'économie verte
            </option>
            <option value="Atelier 4">
              Atelier 4 : Bonnes pratiques agroécologiques : partage d’expériences et leçons apprises
            </option>
            <option value="Atelier 5">
              Atelier 5 : Intégration des objectifs CDN et ODD dans les plans nationaux et Régionaux de développement
            </option>
            <option value="Atelier 6">
              Atelier 6 : Environnement, Changement Climatique et Santé
            </option>
          </select>
        </div>
        <div className="">
          <p className="text-red-700 mb-4">{errors.email}</p>
          <label className="text-xl text-black mb-2">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Votre Email"
            className="w-full  h-16 border border-gray-300 mb-6 "
            value={values.email}
            onChange={handleChange}
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
            value={values.contact}
            onChange={handleChange}
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

const Experts = withFormik ({
  mapPropsToValues({name, email, contact, Atelier}) {
    return {
      name: name || '',
      email: email || '',
      contact: contact || '',
      Atelier: Atelier ||
        'Atelier 1' ||
        'Atelier 2' ||
        'Atelier 3' ||
        'Atelier 4' ||
        'Atelier 5' ||
        'Atelier 6',
    };
  },
  validationSchema: yup.object ().shape ({
    email: yup
      .string ()
      .email ('Entrez une adresse valide')
      .required ("L'email est obligatoire"),
    name: yup.string ().required ('Votre nom est obligatoire'),
    contact: yup.string (),
  }),
  handleSubmit (values) {
    console.log (values);
  },
}) (Formik);

export default Experts;
