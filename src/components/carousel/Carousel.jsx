import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { carouselData } from "../../utils/data";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  // state for autoplay
  const [autoPlay, setAutoPlay] = useState(true);

  // slide show function
  const slideShow = (direction) => {
    if (direction === "left") {
      setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 3);
    } else {
      setActiveIndex(activeIndex < 3 ? activeIndex + 1 : 0);
    }
  };
  
  // auto play
  let timeOut = null;
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideShow();
      }, 3000);
  });

  // // pause autoPlay
  // const stopAutoPlay = () => {
  //   setAutoPlay(false);
  //   clearTimeout(timeOut);
  // };

  return (
    <Container>
      <button className="left" onClick={() => slideShow("left")}>
        <AiOutlineLeft size="2rem" />
      </button>
      <Wrapper activeIndex={activeIndex}>
        {carouselData.map((slide, i) => (
          <Slide key={i}>
            <ImageCont>
              <img src={slide.img} alt="" />
              <div className="text">
                <h1>{slide.text}</h1>
                <p>{slide.smTxt}</p>
                <button>Shop Now</button>
              </div>
            </ImageCont>
          </Slide>
        ))}
      </Wrapper>
      <button className="right" onClick={() => slideShow("right")}>
        <AiOutlineRight size="2rem" />
      </button>
      <div className="dot">
        {carouselData.map((dot, i) => (
          <div
            className={i === activeIndex ? "circle active" : "circle"}
            key={i}
            onClick={() => setActiveIndex(i)}
          >
            •
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  .left {
    width: 50px;
    height: 50px;
    background: #0b0a0a;
    color: white;
    display: flex;
    justify-content: center;
    border: none;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 50;
    margin: auto;
    left: 2%;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.5s linear;
    &:hover {
      opacity: 1;
    }
  }
  .right {
    width: 50px;
    height: 50px;
    background: #0b0a0a;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    border: none;
    top: 0;
    bottom: 0;
    z-index: 50;
    margin: auto;
    right: 2%;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.5s linear;
    &:hover {
      opacity: 1;
    }
  }
  .dot {
    width: 60%;
    position: absolute;
    bottom: 0;
    left: 20%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    .circle {
      border-radius: 50%;
      color: #000;
      font-size: 3rem;
      cursor: pointer;
      transition: all 0.5s linear;
      &:hover {
        transform: scale(1.3);
        color: white;
      }
    }
    .active {
      color: white;
      transform: scale(1.3);
    }
  }
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  background: #000;
  display: flex;
  transition: all 0.5s linear;
  transform: translateX(${(props) => props.activeIndex * -99}vw);
`;
const Slide = styled.div`
  min-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImageCont = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
  }
  .text {
    @media (max-width: 768px) {
      width: 90%;
      left: 5%;
    }
    width: 60%;
    height: 60vh;
    position: absolute;
    background: #00000067;
    left: 20%;
    top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5%;
    align-items: center;
    h1 {
      @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
      }
      font-size: 3vw;
      color: white;
      font-family: "Raleway", sans-serif;
    }
    p {
      @media (max-width: 768px) {
        font-size: 1.2rem;
        text-align: center;
      }
      font-size: 2vw;
      color: white;
      font-family: "Raleway", sans-serif;
    }
    button {
      @media (max-width: 768px) {
        font-size: 1rem;
        width: 50%;
      }
      width: 15%;
      height: 8vh;
      background: #fff;
      color: black;
      cursor: pointer;
      border: none;
      margin-top: 2%;
    }
  }
`;
