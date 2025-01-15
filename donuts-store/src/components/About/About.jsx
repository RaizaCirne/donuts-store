import "../About/About.css";
import AboutBackground from "../../assets/img/about-background1.jpg";
import AboutBackgroundImage from "../../assets/img/about-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="imagem de donuts empilhados" />
      </div>

      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="mão segurando um donuts" />
      </div>
    </div>
  );
};

export default About;
