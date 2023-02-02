import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";
import logo_text from "../../assets/logo_text.png";
import { links } from "../../constants/navbar";
import { FaFacebookF, FaBars } from "react-icons/fa";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
   const [bar, setBar] = useState(false);

   return (
      <nav className="container">
         <div className={`nav-logo ${bar && "nav-logo-on-click"}`}>
            <button onClick={() => setBar(!bar)} className="bar">
               {bar ? <AiOutlineClose size={30} /> : <FaBars size={30} />}
            </button>
            <div className="logo">
               <img className="logo-img" src={logo} />
               <img className="logo-text" src={logo_text} />
            </div>
            <span></span>
         </div>
         <div className={`nav-links ${bar && "remove-left"}`}>
            {links.map((link, i) => (
               <Link to={link.link} key={i}>
                  <button className="btn-nav">{link.title}</button>
               </Link>
            ))}
            <Link to="/">
               <button className="btn-contact">Contact Us</button>
            </Link>
            {/* mobile only */}
            <div className="list-icons-nav">
               <li className="social-icon">
                  <a href="www.google.com">
                     <IoLogoTwitter size={20} />
                  </a>
               </li>
               <li className="social-icon">
                  <a href="www.google.com">
                     <IoLogoInstagram size={20} />
                  </a>
               </li>
               <li className="social-icon">
                  <a href="www.google.com">
                     <FaFacebookF size={20} />
                  </a>
               </li>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
