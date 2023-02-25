import "./hero.css";
import image from "../../assets/hero-image.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
   return (
      <section className="container" id="hero">
         <main className="flex">
            <div className="right">
               <p className="title">Drink coffee, enjoy with Samwyle</p>
               <h1>Coffee Shop</h1>
               <Link to="/products">
                  <button className="btn-order">Order here</button>
               </Link>
            </div>
            <div className="left">
               <button className="btn-arrow">
                  <HiOutlineArrowNarrowRight size={28} />
               </button>
               <div className="image-container">
                  <img className="hero-image" src={image} alt="hero image" />
               </div>
               <ul className="list-icons">
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
                  <li className="follow">Follow Us</li>
               </ul>
            </div>
         </main>
      </section>
   );
};

export default Hero;
