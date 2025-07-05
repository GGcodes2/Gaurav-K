import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/cards/Card";

const App = () => {
  return (
    <>
    
      <Navbar />
      <div className="brown">
        <h1>
          <span className="hollow">'</span>I CODE.
        </h1>
        <p>
          NOT DESIGN <span className="fill">'</span>
        </p>
      </div>
      <div className="section1-container">
        <div className="section1">
          <h1> Hi! I'm Gaurav,</h1>
          <p>
            I’m a computer science student who loves building things with code.
            Over time, I’ve found myself especially drawn to web development —
            from crafting smooth UIs with React to figuring out how everything
            connects on the backend with Node.js. What started as curiosity
            turned into a full-on passion. I enjoy taking ideas and turning them
            into real, working products — whether it’s a dashboard, a tool, or
            something completely experimental. I like challenges, especially the
            ones that keep me up until 3 AM debugging and learning in the
            process. I work mostly with JavaScript, React, Next.js, Tailwind,
            and Node.js, but I’m always exploring new tools and trying to level
            up. I'm currently documenting my journey through a series I started
            called #100DaysToInternship where I share what I build, learn, and
            struggle with — all to keep growing as a developer. Outside of
            coding, I love connecting with other devs, experimenting with design
            (even though I still say “I code, not design”), and finding new ways
            to push my limits. Thanks for stopping by — feel free to explore my
            work, or just say hi!
          </p>
          <p className="ps-text">
            P.S scroll down to see my projects!
          </p>
        </div>
      </div>
      <Card />
      
    </>
  );
};

export default App;
