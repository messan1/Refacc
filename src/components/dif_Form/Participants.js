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
          <p className="text-red-700 text-lg mb-4">
            {errors.sendingParticipants}
          </p>
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

          {touched.pays &&
            errors.pays &&
            <p className="text-red-700 mb-4">{errors.pays}</p>}

          <Field
            type="text"
            name="pays"
            placeholder="Votre pays"
            className="w-full  h-16 border border-gray-300 mb-6 "
          />
        </div>
        <div className="">
          {touched.ville &&
            errors.ville &&
            <p className="text-red-700 mb-4">{errors.ville}</p>}

          <Field
            type="text"
            name="ville"
            placeholder="Votre ville"
            className="w-full  h-16 border border-gray-300 mb-6 "
          />
        </div>
        <div className="">

          <Field
            component="select"
            name="participation"
            className="w-full border-2 border-gray-200 h-16 mb-6"
          >
            <option value="1">
              1 jour de participation
            </option>
            <option value="1 jour">
              1 jour de participation
            </option>
            <option value="2 jours">
              2 jours de participation
            </option>
            <option value="3 jours" selected>
              3 jours de participation
            </option>
            <option value="4 jours">
              4 jours de participation
            </option>
            <option value="5 jours">
              5 jours de participation
            </option>
            <option value="6 jours">
              6 jours de participation
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
        >
          {isSubmitting && 'Envoye en cours'}
          {!isSubmitting && 'Envoyer'}
        </button>
      </Form>
    </div>
  );
};

const Participants = withFormik ({
  mapPropsToValues({nom, email, contact, participation, ville, pays}) {
    return {
      nom: nom || '',
      email: email || '',
      contact: contact || '',
      ville: ville || '',
      pays: pays || '',
      participation: participation || '1' || '2' || '3' || '4' || '5' || '6',
    };
  },
  validationSchema: yup.object ().shape ({
    email: yup
      .string ()
      .email ('Entrez une adresse valide')
      .required ("L'email est obligatoire"),
    nom: yup.string ().required ('Votre nom est obligatoire'),
    ville: yup.string ().required ('Votre ville est obligatoire'),
    pays: yup.string ().required ('Votre pays est obligatoire'),
    contact: yup.string (),
  }),
  handleSubmit (values, {resetForm, setErrors, setSubmitting}) {
    axios
      .post ('http://restapi.cogenius.shop/api/jfac20/participants', values, {
        headers: {Accept: 'application/json'},
      })
      .then (function (res) {
        setSubmitting (true);
        resetForm ();
      })
      .catch (function (errors) {
        setErrors ({
          sendingParticipants: 'Vous etes déjà inscrit avec cet email',
        });
        setSubmitting (false);
      });
  },
}) (Formik);

export default Participants;
