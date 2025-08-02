import React, { useEffect } from 'react';
import './KnowMore.css';
import hiking from '../../assets/hiking.jpg';
import Chess from '../../assets/chess.avif';
import poetry from '../../assets/poetry.avif';
import music from '../../assets/music.avif';

const KnowMore = () => {
  useEffect(() => {
    const handleScroll = () => {
      const marquee = document.getElementById("marquee");
      if (!marquee) return;

      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / maxScroll;
      const moveX = -scrollPercent * 100;

      marquee.style.transform = `translate(${moveX}%, -50%)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const marquee = document.getElementById("socials-marquee");
      if (!marquee) return;

      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / maxScroll;
      const moveX = scrollPercent * 20;

      marquee.style.transform = `translate(${moveX}%, 0%)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section>
        <div className="intrests">
          <h1 className="cursive">
            Here's What I do <br />
            <span className='Boldie'>When I’m not coding…</span>
          </h1>

          <div className="display-marquee">
            <div className="marquee-content" id="marquee">
              <div className="d1">
                <h1>Hiking</h1>
                <img className="Krsna" src={hiking} alt="Hiking" />
              </div>
              <div className="d1">
                <h1>Chess</h1>
                <img className="sheldon" src={Chess} alt="Chess" />
              </div>
              <div className="d1">
                <h1>Poetry</h1>
                <img className="sheldon" src={poetry} alt="Poetry" />
              </div>
              <div className="d1">
                <h1>Jamming?</h1>
                <img className="sheldon" src={music} alt="Music" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-hai">
        <div className="socials-container">
        <div className="socials-marquee" id="socials-marquee">
          {[...Array(20)].map((_, i) => (
            <h1 key={i}>Socials.</h1>
          ))}
        </div>
        </div>
        <div className="social-box">
          <div onClick={()=>window.open("https://www.linkedin.com/in/gaurav-katare/", "_blank")} className="linkedIn">
            LinkedIn
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default KnowMore;
