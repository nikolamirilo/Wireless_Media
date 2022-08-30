import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useGlobalState } from "./../../GlobalState";

const Slider = () => {
  const { width } = useGlobalState();
  return (
    <div className="slider">
      <Carousel autoPlay infiniteLoop showArrows emulateTouch>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(https://th.bing.com/th/id/R.ef99528fe6485e0fe578a568ed19c538?rik=YoV6fCIa3B65mw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f0%2fd%2f820810-full-hd-nature-wallpapers-2560x1600-screen.jpg&ehk=vIysebK27uH7%2bAO1A5rcQ1tRNlaayL98VI%2b1tyfJCAE%3d&risl=&pid=ImgRaw&r=0)",
          }}
        ></div>

        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(https://th.bing.com/th/id/R.53449fa87702af80374c45b87080c639?rik=a%2bjmkDp49CIBMQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fNature-wallpapers-Full-HD-backgroud.jpg&ehk=2CjYMG528OFuEMrzc%2bCNmTfQR9WPzT4GP5fwmHMh54I%3d&risl=&pid=ImgRaw&r=0)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg)",
          }}
        ></div>
      </Carousel>
      {width <= 320 && <div className="navigation">Lorem Ipsum</div>}
    </div>
  );
};

export default Slider;
