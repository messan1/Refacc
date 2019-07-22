import React from 'react';
import "../css/footer.css"
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer-distributed">

    <div className="footer-left">

        <h3>REFACC</h3>

        <p className="footer-links">
            <Link href="/">Acceuil</Link>
            ·
            <Link href="/jfac">JFAC 2020</Link>
            ·
            <Link href="/nous-contacter">NousContacter</Link>
        </p>

        <p className="footer-company-name">Refacc &copy; 2019</p>
    </div>

    <div className="footer-center">

        <div>
            <i className="fa fa-phone"></i>
            <p>+225 09536206</p>
        </div>

        <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">climatrefacc@gmail.com</a></p>
        </div>

    </div>

    <div className="footer-right">

        <p className="footer-company-about">
            <span>A propos du REFACC</span>
            Le réseau des Experts africains pour les Forêt l'agriculture,l'énergie et les changements climatiques, en abrégé REFACC est une association non lucrative créée par un consortion d'expert africains en vue de renforcerle dialogue et la coopération avec les acteurs des pays africains. Ce réseau apolitique se propose d'apporter une dynamique à la lutte contre les changements climatiques dans les collectivités et aider les communautés rurales les plus vulnérables. </p>

        <div className="footer-icons">

            <a href="https://www.facebook.com/refaccclimat/"><i className="fa fa-facebook"></i></a>
           

        </div>

    </div>

</footer>

   );
};
export default Footer;
