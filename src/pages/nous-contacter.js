import React, {useState, useEffect} from 'react';
import {
  faMailBulk,
  faPhone,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import ContactBox from '../components/ContactBox';

//Seo
import {Helmet} from 'react-helmet';
import Layout from './../components/layout';
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
  useEffect (() => {
    if (isEmpty (errors) && isSubmitting) {
      setSend (true);
    }
  });
  return (
    <Layout>
      <Helmet>
        <title>Refacc - Nous contacter</title>
      </Helmet>
      <section className="flex justify-center items-start mb-20 mt-20 flex-wrap p-8 ">
        <div className="max-w-md mb-16 ">
          <h1 className="font-bold text-5xl">
            <span className="font-bold text-grefacc  md:text-4xl lg:text-5xl">
              Nous
            </span>
            {' '}
            Contacter
          </h1>

          <div>
            <ContactBox
              icon={faMailBulk}
              title="Email"
              content={['climatrefacc@gmail.com']}
            />
            <ContactBox
              icon={faPhone}
              title="Email"
              content={['Phone: +225 09536206', 'Fixe: 22460814']}
            />
            <ContactBox
              icon={faAddressBook}
              title="Adresse"
              content={['503 BP514 Abidjan LWP503']}
            />

          </div>
        </div>

        <div className="md:ml-0 lg:ml-16">
          <Form>
            <div className="max-w-lg">
              {send &&
                <p className="text-green-700 text-lg mb-4">
                  {' '}
                  Votre message à été envoyé
                </p>}

              {touched.name &&
                errors.name &&
                <p className="text-red-700 mb-4">{errors.name}</p>}

              <label className="text-xl text-black mb-2">Nom</label>
              <Field
                type="text"
                name="name"
                placeholder="Votre Nom"
                className="w-full  h-16 border border-gray-300 mb-6 "
              />
            </div>
            <div className="max-w-lg">
              {touched.email &&
                errors.email &&
                <p className="text-red-700 mb-4">{errors.email}</p>}

              <label className="text-xl text-black mb-8">Email</label>
              <Field
                className=" w-full border border-gray-300  h-16 mb-6"
                type="text"
                name="email"
                placeholder="Votre Email"
              />

            </div>
            <div className="max-w-lg">
              {touched.object &&
                errors.object &&
                <p className="text-red-700 mb-4">{errors.object}</p>}

              <label className="text-xl text-black mb-8">Objet</label>
              <Field
                type="text"
                name="object"
                placeholder="Objet du message "
                className="w-full border border-gray-300  mb-6 h-16"
              />
              {touched.message &&
                errors.message &&
                <p className="text-red-700 mb-4">{errors.message}</p>}

              <label className="text-xl text-black mb-8">Votre Message</label>
              <Field
                component="textarea"
                rows="4"
                cols="54"
                className="mb-8 border border-gray-300 mb-6 w-full"
                name="message"
              />

              <button
              disabled={isSubmitting}
              className="bg-grefacc p-4 text-white font-bold"
              type="submit"
            >
              {isSubmitting && 'Envoye en cours'}
              {!isSubmitting && 'Envoyer'}
            </button>{' '}
            </div>
          </Form>
        </div>
      </section>
    </Layout>
  );
};

const Contact = withFormik ({
  mapPropsToValues({name, email, object, message}) {
    return {
      name: name || '',
      email: email || '',
      object: object || '',
      message: message || '',
    };
  },
  validationSchema: yup.object ().shape ({
    email: yup
      .string ()
      .email ('Entrez une adresse valide')
      .required ("L'email est obligatoire"),
    name: yup.string ().required ('Votre nom est obligatoire'),
    object: yup.string ().required ('Entrez un message'),
    message: yup.string ().required ('Entrez un message'),
  }),
  handleSubmit (values, {resetForm, setErrors, setSubmitting}) {
    axios
      .post ('https://refaccapi.herokuapp.com/api/jfac20/contact', values, {
        headers: {Accept: 'application/json'},
      })
      .then (function (res) {
        setSubmitting (true);
        resetForm ();
      })
      .catch (function (errors) {
        setSubmitting (false);
      });
  },
}) (Formik);

export default Contact;
