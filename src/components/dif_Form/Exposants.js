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
    <div className="md:ml-0 lg:ml-4">
      <Form>
        <div className="">
          {send &&
            <p className="text-green-700 text-lg mb-4">
              {' '}
              Merci de participer au JFAC 2020.
              <br />
              Nous vous invitons à consultez votre adresse email
            </p>}
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
          {touched.structure &&
            errors.structure &&
            <p className="text-red-700 mb-4">{errors.structure}</p>}

          <Field
            className=" w-full border border-gray-300  h-16 mb-6"
            type="text"
            name="structure"
            placeholder="Structure"
          />

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
        >
          {isSubmitting && 'Envoye en cours'}
          {!isSubmitting && 'Envoyer'}
        </button>
      </Form>
    </div>
  );
};

const Exposant = withFormik ({
  mapPropsToValues({nom, email, contact, structure}) {
    return {
      nom: nom || '',
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
    nom: yup.string ().required ('Votre nom est obligatoire'),
    contact: yup.string (),
    structure: yup.string ('Entrez votre structure'),
  }),
  handleSubmit (values, {resetForm, setErrors, setSubmitting}) {
    axios
      .post ('https://refaccapi-master-ih9jf28sh.now.sh/api/jfac20/exposants', values, {
        headers: {Accept: 'application/json'},
      })
      .then (function (res) {
        setSubmitting (true);
        resetForm ();
      })
      .catch (function (errors) {
        setErrors ({
          sendingexposants: 'Vous etes déjà inscrit avec cet email',
        });
        setSubmitting (false);
      });
  },
}) (Formik);

export default Exposant;
