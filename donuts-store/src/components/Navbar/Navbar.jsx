import { useState } from "react";
import Logo from "../../assets/img/Logo.svg";
import "../Navbar/Navbar.css";
import { BsCart2 } from "react-icons/bs";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
// import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Navbar = ({ homeRef, aboutRef, workRef, testemonialRef, contactRef }) => {
  const [openMenu, setOpenMenu] = useState(false);

  // Função para rolar suavemente até a seção desejada
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth", // Esse "smooth" faz o scroll ser suave, não abrupto
    });
  };

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, ref: homeRef },
    { text: "Sobre Nós", icon: <InfoIcon />, ref: aboutRef },
    { text: "Nosso Trabalho", icon: <HomeWorkIcon />, ref: workRef },
    { text: "Avaliação", icon: <CommentRoundedIcon />, ref: testemonialRef },
    { text: "Contato", icon: <PhoneRoundedIcon />, ref: contactRef },
    { text: "Carrinho", icon: <ShoppingCartRoundedIcon />, ref: null },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo Donuts" />
      </div>

      <div className="nav-bar-links-container">
        <a onClick={() => scrollToSection(homeRef)}>Home</a>
        <a onClick={() => scrollToSection(aboutRef)}>Sobre Nós</a>
        <a onClick={() => scrollToSection(workRef)}>Nosso Trabalho</a>
        <a onClick={() => scrollToSection(testemonialRef)}>Avaliação</a>
        <a onClick={() => scrollToSection(contactRef)}>Contato</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>

        <button className="primary-button">Reservar Agora</button>
      </div>

      {/* mobile */}
      <div className="nav-bar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => item.ref && scrollToSection(item.ref)}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
