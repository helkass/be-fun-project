import React from "react";
import "./contact.style.css";
import { BsArrow90DegUp } from "react-icons/bs";
import ALert from "../../components/parts/alert/ALert";

const Contact = () => {
   const [alert, setAlert] = React.useState(false);

   const handleSendEmail = () => {
      setAlert(true);

      setTimeout(() => {
         setAlert(false);
      }, 2500);
   };

   return (
      <main id="contact-container">
         <ALert title="Thank you for all" active={alert} />
         <div className="contact-content">
            <h1>Love to hear from you, Get in touch! 👋</h1>
            <div className="contact--form--container">
               <div className="contact--flex">
                  <div className="contact--input--content">
                     <label className="contact--label">Your name</label>
                     <input
                        type="text"
                        placeholder="username"
                        name="name"
                        id="name"
                     />
                  </div>
                  <div className="contact--input--content">
                     <label className="contact--label">Your email</label>
                     <input
                        type="email"
                        placeholder="you email"
                        name="email"
                        id="email"
                     />
                  </div>
               </div>
               <div className="contact--flex">
                  <div className="contact--input--content">
                     <label className="contact--label">
                        What are you interested
                     </label>
                     <input
                        type="select"
                        placeholder="Design & Branding"
                        name="interest"
                        id="interest"
                     />
                  </div>
                  <div className="contact--input--content">
                     <label className="contact--label">Brewing coffee</label>
                     <input
                        type="select"
                        placeholder="select your budget"
                        name="budget"
                        id="budget"
                     />
                  </div>
               </div>
               <div className="contact--input--content">
                  <label>Message</label>
                  <textarea
                     type="text"
                     placeholder="let tell us know your questions from coffee samwayle"
                     className="contact--textarea"
                  />
               </div>
            </div>
            <button onClick={handleSendEmail}>
               Just Send <BsArrow90DegUp />
            </button>
         </div>
      </main>
   );
};

export default Contact;
