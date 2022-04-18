import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import bunnerImg1 from "../../../images/banner/banner1.jpg";
import bunnerImg2 from "../../../images/banner/banner2.png";
import bunnerImg3 from "../../../images/banner/banner3.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={bunnerImg1} alt="First slide" />
          <Carousel.Caption>
            <p>Hi This is Naeem</p>
            <h3>
              Gym<strong> Trainer </strong>
            </h3>
            <Link to="/sarvices" className="btns buttons banner-button">
              Sarvices
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={bunnerImg2} alt="Second slide" />
          <Carousel.Caption>
            <p>Join Us Now</p>
            <h3>
              Be <strong>strong</strong> <br /> traning hard
            </h3>
            <Link to="/sarvices" className="btns buttons banner-button">
              Sarvices
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bunnerImg3} alt="Third slide" />
          <Carousel.Caption>
            <p>Shape your body</p>
            <h3>
              PUSH YOUR <br /> <strong>LIMITS</strong> FORWARD
            </h3>
            <Link to="/sarvices" className="btns buttons banner-button">
              Sarvices
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
