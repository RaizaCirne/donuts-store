import "../Footer/Footer.css";
import Logo from "../../assets/img/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo Donuts" />
        </div>

        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Nossa Marca</span>
          <span>Carreira</span>
          <span>Avaliação</span>
          <span>Nosso Trabalho</span>
        </div>

        <div className="footer-section-columns">
          <span>11-3322-1234</span>
          <span>oladonuts@food.com</span>
          <span>midia.donuts@food.com</span>
          <span>contato@food.com</span>
        </div>

        <div className="footer-section-columns">
          <span>Termos & Condições</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
