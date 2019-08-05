import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function isEmpty (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty (key)) return false;
  }
  return true;
}

const Formik = ({touched, errors, isSubmitting}) => {
  const [send, setSend] = useState (false);
  useEffect (() =>{
    if (isEmpty (errors) && isSubmitting ) {
      setSend (true)
    }
  });
  return (
    <div className="md:ml-0 lg:ml-4 max-w-md">
      <Form>
        <div className="">
          {send &&
            <p className="text-green-700 text-lg mb-4">
              Merci de participer au JFAC 2020.
              <br />
              Nous vous invitons à consultez votre adresse email
            </p>}
          <p className="text-red-700 text-lg mb-4">{errors.sendingExpert}</p>
          {touched.nom &&
            errors.nom &&
            <p className="text-red-700 mb-4">{errors.nom}</p>}

          <Field
            type="text"
            name="nom"
            placeholder="Votre nom et prénoms"
            className="w-full  h-16 border border-gray-300 mb-6 "
          />
        </div>
        <div className="">

          <Field
            className="w-full h-16 mb-6 border-2"
            name="atelier"
            component="select"
          >
            <option value="Atelier 1">
              Atelier 1 : Rôle des collectivités territoriales et du secteur privé dans la production décentralisée d’énergies renouvelables : solaire, biomasse, petite hydroélectricité.
            </option>
            <option value="Atelier 2">
              Atelier 2 : Villes durables - défis urbains dans les villes africaines et Accès aux financements climatiques
            </option>
            <option value="Atelier 3">
              Atelier 3 : Rôle de la recherche et de la Formation dans la transition vers l'économie verte
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
          </Field>
        </div>
        <div className="">
          {touched.email &&
            errors.email &&
            <p className="text-red-700 mb-4">{errors.email}</p>}

          <Field
            type="text"
            name="email"
            placeholder="Votre Email"
            className="w-full  h-16 border border-gray-300 mb-6 "
          />
        </div>
        <div className="">
          {touched.contact &&
            errors.contact &&
            <p className="text-red-700 mb-4">{errors.contact}</p>}

          <Field
            type="text"
            name="contact"
            placeholder="Votre Contact "
            className="w-full border border-gray-300  mb-6 h-16"
          />
        </div>

        <button
        disabled={isSubmitting}
        className="bg-grefacc p-4 text-white font-bold"
        type="submit"
      >
        {isSubmitting && 'Envoye en cours'}
        {!isSubmitting && 'Envoyer'}
      </button>{' '}
      </Form>
    </div>
  );
};

const Experts = withFormik ({
  mapPropsToValues({nom, email, contact, atelier}) {
    return {
      nom: nom || '',
      email: email || '',
      contact: contact || '',
      atelier: atelier ||
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
    nom: yup.string ().required ('Votre nom est obligatoire'),
    contact: yup.string (),
  }),
  handleSubmit (values, {resetForm, setErrors, setSubmitting}) {
    axios
      .post ('https://refaccapi.herokuapp.com/api/jfac20/experts', values, {
        headers: {Accept: 'application/json'},
      })
      .then (function (res) {
        setSubmitting (true);
        resetForm ();
      })
      .catch (function (errors) {
        setErrors ({
          sendingExpert: 'Vous etes déjà inscrit avec cet email',
        });
        setSubmitting (false);
      });
  },
}) (Formik);

export default Experts;
