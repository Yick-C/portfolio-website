import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500} className="menuItem">Home <i class="fa-solid fa-house"></i> </Link> |
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="menuItem">Skills <i class="fa-solid fa-star"></i></Link> |
        <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500} className="menuItem">Projects <i class="fa-solid fa-code"></i></Link> |
        <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="menuItem">Contact <i class="fa-solid fa-at"></i></Link>
    </nav>
  );
};

export default Navbar;
