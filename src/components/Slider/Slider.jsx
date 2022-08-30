import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className="slider">
      <div className="line"></div>
      <Carousel>
        <div
          className="carousel-item"
          style={{ backgroundImage: "url(https://www.serbia.travel/files/1-40_VODOPAD_VRELO-0-1280x768.jpg)" }}
        >
          <p className="legend">Legend</p>
        </div>

        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(https://www.nestle.com/sites/default/files/styles/da_vinci_header_hero_desktop/public/2022-02/sustainability-nature-forest-river-article-header-fw.jpg?h=a612ed85&itok=1mqqgg1L)",
          }}
        ></div>
      </Carousel>
    </div>
  );
};

export default Slider;
