import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Navbar.scss";
import Button from "../Button/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <h1 className="navbar__header">Bethany Burrows</h1>
      <div className="navbar__menu" onClick={toggleMenu}>
        <BurgerMenu />
      </div>
      <div className={`navbar__buttons navbar__buttons--${menuOpen}`}>
        <a href="#about-me">
          <Button heading="About" variant="menu" />
        </a>
        <a href="#skills">
          <Button heading="Skills" variant="menu" />
        </a>
        <a href="#portfolio">
          <Button heading="Portfolio" variant="menu" />
        </a>
        <a href="#contact-me">
          <Button heading="Contact-Me" variant="menu" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
