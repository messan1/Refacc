import React, {useState, useEffect} from 'react';
import '../css/footer.css';
import {Link} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faUser,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import {withFormik, Field, Form} from 'formik';
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
    <footer className="inf_footer p-8">
      <div className="flex flex-center justify-center items-end flex-wrap">
        <Form className="flex flex-col flex-wrap w-auto justify-center items-center mr-8">
          <h6 className="font-bold text-2xl mb-8">Nous contacter:</h6>
          {touched.name &&
            errors.name &&
            <p className="text-red-700 mb-4">{errors.name}</p>}
          {touched.email &&
            errors.email &&
            <p className="text-red-700 mb-4">{errors.email}</p>}
          {touched.message &&
            errors.message &&
            <p className="text-red-700 mb-4">{errors.message}</p>}
          <div className="flex w-full flex-wrap justify-center items-center">
            <Field
              type="text"
              name="name"
              className="inf_footer_input"
              placeholder="Votre Nom"
            />

            <Field
              type="text"
              name="email"
              className="inf_footer_input inf_footer_input2"
              placeholder="Votre Email"
            />
          </div>

          <Field
            className="w-full inf_footer_place mt-4 mb-4"
            placeholder="Votre Message"
            name="message"
            component="textarea"
          />
          <button
            disabled={isSubmitting}
            className="bg-grefacc inf_footer_btn rounded-lg p-4 text-white font-bold"
            type="submit"
          >
            {isSubmitting && 'Envoye en cours'}
            {!isSubmitting && 'Envoyer votre message'}
          </button>{' '}

        </Form>
        <div className="inf_box bg-white mt-4 shadow-xl">
          <h6 className="font-bold text-lg p-2">Liens</h6>
          <div>
            <ul className=" listing">
              <li> <Link to="/">Acceuil</Link></li> <br />
              <li><Link to="/les-jfac-20">JFAC 20</Link></li>
              <li>Refacc</li>
              <li>Zoom sur</li>
              <li><Link to="/videotheque">Vidéothèque</Link></li>
              <li><Link to="/la-galerie-des-jfac">Galerie</Link></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center mt-8 flex-wrap">

        <div className="flex flex-col w-full mt-4">
          <div className="flex">
            {' '}
            <FontAwesomeIcon icon={faAddressBook} color="#3F9F42" size="2x" />
            <p className="font-bold text-xl ml-4">Adresse</p>
          </div>
          <p>503 BP514 Abidjan LWP503</p>
        </div>

      </div>

      <div className="flex flex-col w-full mt-4">
        <div className="flex">
          {' '}<FontAwesomeIcon icon={faPhone} color="#3F9F42" size="2x" />
          <p className="font-bold text-xl ml-4">Contact</p>
        </div>
        <p> Phone: +225 09536206</p>
        <p>Fixe: 22460814</p>
      </div>

      <div className="flex flex-col w-full mt-4">
        <div className="flex">
          {' '}
          <FontAwesomeIcon icon={faEnvelope} color="#3F9F42" size="2x" />
          <p className="font-bold text-xl ml-4">Email</p>
        </div>
        <p>climatrefacc@gmail.com</p>
      </div>

      <div className="flex flex-col w-full mt-4">
        <div className="flex">
          {' '}<FontAwesomeIcon icon={faUser} color="#3F9F42" size="2x" />
          <p className="font-bold text-xl ml-4">Nous suivre</p>
        </div>
        <a href="https://web.facebook.com/refaccclimat/" target="_blank">
          Sur Facebook
        </a>
      </div>

    </footer>
  );
};

const Footer = withFormik ({
  mapPropsToValues({name, email, message}) {
    return {
      name: name || '',
      email: email || '',
      message: message || '',
    };
  },
  validationSchema: yup.object ().shape ({
    email: yup
      .string ()
      .email ('Entrez une adresse valide')
      .required ("L'email est obligatoire"),
    name: yup.string ().required ('Votre nom est obligatoire'),
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

export default Footer;
