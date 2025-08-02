import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import image1 from "./assets/animate1.webp";
import image2 from "./assets/animate2.jpg";
import image3 from "./assets/animate3.png";
import emailjs from "@emailjs/browser";

const App = () => {
  const form = useRef();
  const scrollRef = useRef(); // Ref for scroll-linked marquee

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_il99h7d",
      "template_90q3be6",
      form.current,
      "FQ1vHOxElKJ2yhBKV"
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error.text);
      }
    );
  };

  // Scroll-linked marquee effect
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / maxScroll;
      const moveX = -scrollPercent * 100;

      scrollRef.current.style.transform = `translate(${moveX}%, -50%)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For fade + scale animation
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const opacity = Math.max(0, 1 - scrollY / window.innerHeight);
  const scale = 0.9 + opacity * 0.1;
  const blurAmount = (1 - opacity) * 5;

  return (
    <div className="app">
      {/* 1. Fade + Scale */}
      <section
        className="section fade-scale"
        style={{ opacity, transform: `scale(${scale})` }}
      >
        <div className="head">
          <h1>Gaurav K</h1>
          <a href="/Gaurav-K/know-more">Know More</a>
        </div>
        <h1 className="intro">'I Code, Not Design'</h1>
      </section>

      {/* 2. Parallax */}
      <section className="section parallax">
        <div className="parall-text">
          <h1>Oh! hey,</h1>
          <p>
            I'm Gaurav, a <span className="pune">PUNE</span> based software dev,
          </p>
          <p className="bgWhite">Nice to see you here! :)</p>
        </div>
      </section>

      {/* 3. Sticky Reveal */}
      <section className="section sticky-container">
        <div className="content-sticky">
          <div className="head-sticky">
            <h1>Projects</h1>
          </div>
          <div className="display">
            <div className="display-content" ref={scrollRef}>
              <div>
                <img
                  className="animate1"
                  onClick={() =>
                    window.open("https://github.com/GGcodes2/Gemini-Clone")
                  }
                  src={image1}
                  alt="Gemini Clone"
                />
                <h3>Gemini Clone</h3>
              </div>
              <div>
                <img
                  src={image2}
                  className="animate2"
                  onClick={() =>
                    window.open("https://github.com/GGcodes2/FoodExplorer")
                  }
                  alt="Food Explorer"
                />
                <h3>Food Explorer</h3>
              </div>
              <div>
                <img
                  src={image3}
                  className="animate3"
                  onClick={() =>
                    window.open("https://github.com/GGcodes2/RealtimeChess")
                  }
                  alt="Realtime Chess"
                />
                <h3 className="text-white">Realtime Chess</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Info Boxes */}
      <section className="section multi-box">
        <div className="multi-container">
          <div className="vertical">
            <div className="first">
              <h4>Skills</h4>
              <ul>
                <li>Full-Stack Development: MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                <li>Version Control & Collaboration: Git & GitHub</li>
                <li>Problem Solving: Data Structures and Algorithms (Java)</li>
                <li>Programming Fundamentals: Core C++</li>
              </ul>
            </div>
            <div className="second">
              <h4>Education</h4>
              <p className="p1">MIT ADT UNIVERSITY</p>
              <p className="p2">B.Tech CSE (2028)</p>
            </div>
          </div>
          <div className="third">
            <h4>What I'm currently doing...</h4>
            <p className="p3">
              I'm currently focused on sharpening my front-end development
              skills by building real-world web applications using React.js,
              Tailwind CSS, and modern JavaScript. I'm exploring scroll-based
              animations, responsive UI/UX design, and API integrations to
              create engaging user experiences. Alongside personal projects,
              I'm actively sharing my journey on social media through the
              #100DaysToInternship challenge, where I document daily progress,
              open-source contributions, and technical learnings. My goal is to
              grow as a full-stack developer and contribute to impactful
              projects that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Connect Section */}
      <section className="section connect">
        <div className="connect-box">
          <div className="extended-footer-content">
            <h2 className="lets">Let's connect</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="verticl-contact">
                <input
                  className="from_name"
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="from_email"
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="message-box">
                <textarea
                  className="message"
                  name="message"
                  placeholder="Your Message"
                  required
                />
                <button className="submit" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
