import React from "react";
import "./Card.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import GCImg from "../../assets/GC.png";
import ChessIMG from "../../assets/Chess.png";
import feIMG from "../../assets/FE.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Card = () => {
  return (
    <div className="card-container">
      <div className="swiper-container">
        <h1>PROJECTS</h1>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            loop: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <img src={GCImg} className="GCIMAGE" alt="Project" />
              <h2>GEMINI CLONE</h2>
              <button
                className="card-button"
                onClick={() =>
                  window.open("https://github.com/GGcodes2/Gemini-Clone", "_blank")
                }
              >
                Know More
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={ChessIMG} className="GCIMAGE" alt="Project" />
              <h2>Realtime Chess</h2>
              <button
                className="card-button"
                onClick={() =>
                  window.open("https://github.com/GGcodes2/RealtimeChess", "_blank")
                }
              >
                Know More
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={feIMG} className="GCIMAGE" alt="Project" />
              <h2>Food Explorer</h2>
              <button
              className="card-button"
              onClick={()=>window.open("https://github.com/GGcodes2/FoodExplorer", "_blank")}
              >
                Know More
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Card;
