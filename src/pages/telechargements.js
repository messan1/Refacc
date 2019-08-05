import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SliderDown from '../components/downloadscomps/SliderDown';
import CardDown from '../components/downloadscomps/CardDown';
import Book from './../components/downloadscomps/Book';
import Mag from '../components/downloadscomps/Mag';
//card
import book from '../images/down/rezise/1564847033.jpg';
import book2 from '../images/down/rezise/1564847100.jpg';

//book
import book3 from '../images/down/rezise/book/ae.jpg';
import book4 from '../images/down/rezise/book/nc.jpg';
import book5 from '../images/down/rezise/book/r18.jpg';
import book6 from '../images/down/rezise/book/r19.jpg';

//slider
import book7 from '../images/down/rezise/book/ae2.png';

//mag
import book8 from '../images/down/rezise/book/ae2mag.png';

const Telechargements = () => (
  <Layout>
    <SEO title="Refacc - Les téléchargements" />
    <SliderDown img={book7} />
    <div className="flex inf_card_container justify-center items-center">
      <CardDown img={book} title="Rapport des JFAC 2019" link="https://cdn.filestackcontent.com/UF0bTQxTTciVu7XA581b"  />
      <CardDown img={book2} title="Rapport des JFAC 2018" link="https://cdn.filestackcontent.com/uZd18uiJRd2dJlOmEvte" />
    </div>
    <p className="font-bold book_text text-center mt-8">Les documents</p>
    <div className="w-auto mb-8 mt-8 flex justify-center flex-wrap items-center">
      <Book img={book4} title="Note conceptuelle des JFAC 20" link="https://cdn.filestackcontent.com/Tl2dzwGdROaNELHzc45i" />
      <Book img={book3} title="Afrik Ecolo" link="https://cdn.filestackcontent.com/wnB0ST8qQ6iyodSnVktY" />
      <Book img={book6} title="Rapport des JFAC 19" link="https://cdn.filestackcontent.com/UF0bTQxTTciVu7XA581b" />
      <Book img={book5} title="Rapport des JFAC 18" link="https://cdn.filestackcontent.com/uZd18uiJRd2dJlOmEvte" />

    </div>
    <div className="w-screen">
      <Mag img={book8} />
    </div>
  </Layout>
);

export default Telechargements;
