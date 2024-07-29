import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <h1 className="navbar__header">Bethany Burrows</h1>
      <div onClick={toggleMenu}>
        <BurgerMenu />
      </div>
      <div className={`navbar__buttons navbar__buttons--${menuOpen}`}>
        {/* Replace with custom button components */}
        <button>About</button>
        <button>Skills</button>
        <button>Portfolio</button>
        <button>Contact-Me</button>
      </div>
    </div>
  );
};

export default Navbar;
