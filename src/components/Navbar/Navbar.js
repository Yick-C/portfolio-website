import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
        <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500} className="menuItem">Home</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="menuItem">Skills</Link>
        <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500} className="menuItem">Projects</Link>
        <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="menuItem">Contact</Link>
      </div>
      <button className="menuBtn">
        <img src={contact} alt="contact" className="menuBtnImg" /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
