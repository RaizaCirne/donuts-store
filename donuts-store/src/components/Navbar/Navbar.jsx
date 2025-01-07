import Logo from "../../assets/img/Logo.svg";
import "../Navbar/Navbar.css";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo Donuts" />
      </div>

      <div className="nav-bar-links-container">
        <a href="">Home</a>
        <a href="">Sobre Nós</a>
        <a href="">Nosso Trabalho</a>
        <a href="">Avaliação</a>
        <a href="">Contato</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>

        <button className="primary-button">Reservar Agora</button>
      </div>
    </nav>
  );
};

export default Navbar;
