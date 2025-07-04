import React, { useRef } from 'react';
import './Footer.css';
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import emailjs from '@emailjs/browser';

const Footer = ({ extended }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_il99h7d',     // 🔁 Replace this with your actual EmailJS service ID
      'template_90q3be6',    // ✅ Your actual template ID
      form.current,
      'FQ1vHOxElKJ2yhBKV'    // ✅ Your actual public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset(); // optional: clear form
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error.text);
      }
    );
  };

  return (
    <div className={`footer-container ${extended ? 'expand' : ''}`}>
      <div className="footer">
        <div className="foot-content">
          <LuGithub className="logo" onClick={() => window.open("https://github.com/GGcodes2", "_blank")} />
          <FiTwitter className="logo" onClick={() => window.open("https://x.com/KGaurav_GG", "_blank")} />
          <CiLinkedin className="logo" onClick={() => window.open("https://www.linkedin.com/in/gaurav-katare/", "_blank")} />
        </div>
      </div>

      {extended && (
        <div className="extended-footer-content">
          <h2>Contact Me</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Footer;
