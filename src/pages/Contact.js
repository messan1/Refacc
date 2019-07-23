import React, {Component} from 'react';
import {faMailBulk,faPhone,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import ContactBox from '../components/ContactBox';

//Seo
import {Helmet} from 'react-helmet'

class Contact extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <div>
      <Helmet>
      <title>Refacc - Nous contacter</title>
    </Helmet>
        <section className="flex justify-center items-start mb-20 mt-20 flex-wrap p-8 ">
          <div className="max-w-md mb-16 ">
            <h1 className="font-bold text-5xl">
              <span className="font-bold text-grefacc  md:text-4xl lg:text-5xl">Nous</span>
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
              content={['Phone: +225 09536206','Fixe: 22460814']}
            />
              <ContactBox
                icon={faAddressBook}
                title="Adresse"
                content={['503 BP514 Abidjan LWP503']}
              />


            </div>
          </div>

          <div className="md:ml-0 lg:ml-16">
            <form name="Formulaire de contact" action="//formspree.io/infinity.soft@aol.com"
            method="POST">
            <input type='hidden' name='form-name' value='contact-form' />
            <input type='hidden' name='bot-field'/>
          
              <div className="max-w-lg">
                <label className="text-xl text-black mb-2">Nom</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre Nom"
                  className="w-full  h-16 border border-gray-300 mb-6 "
                />
              </div>
              <div className="max-w-lg">
                <label className="text-xl text-black mb-8">Email</label>
                <input
                  className=" w-full border border-gray-300  h-16 mb-6"
                  type="text"
                  name="email"
                  placeholder="Votre Email"
                />

              </div>
              <div className="max-w-lg">
                <label className="text-xl text-black mb-8">Objet</label>
                <input
                  type="text"
                  name="object"
                  placeholder="Objet du message "
                  className="w-full border border-gray-300  mb-6 h-16"
                />
                <label className="text-xl text-black mb-8">Votre Message</label>
                <textarea
                  rows="4"
                  cols="54"
                  className="mb-8 border border-gray-300 mb-6 w-full"
                />
                <input
                type="submit"
                value="Envoyer"
                className="bg-grefacc p-4 text-white font-bold"
              />
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
