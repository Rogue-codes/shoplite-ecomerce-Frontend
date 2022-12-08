import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Slider({ image }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const Prev = () => {
    const isActive = activeIndex === 0;
    const newIndex = isActive ? image.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const Next = () => {
    const isActive = activeIndex === image.length - 1;
    const newIndex = isActive ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  const goToSlide = (i) => {
    setActiveIndex(i);
  };
  const slide = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${image[activeIndex].img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };
  const left = {
    position: "absolute",
    left: "2%",
    background:"black",
    top: "50%",
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "white",
  };
  const right = {
    position: "absolute",
    right: "2%",
    background:"black",
    top: "50%",
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "white",
  };
  // auto play

  let timeOut = null;
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        Next();
      }, 3000);
  });

  // pause autoPlay
  const stopAutoPlay = () => {
    setAutoPlay(false);
    clearTimeout(timeOut);
  };

  //   framer motion animation
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%", transition: { delay: 2.5 } },
    init: { opacity: 0, scale: 2, transition: { delay: 1 } },
    apear: { opacity: 1, scale: 1, transition: { delay: 1.5 } },
  };
  return (
    <Container>
      <motion.div
        style={slide}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={() => setAutoPlay(true)}
        initial="init"
        animate="apear"
        transition={{ ease: "linear", duration: 5 }}
        variants={variants}
      >
        <Text>
          <h2>{image[activeIndex].text}</h2>
          <p>{image[activeIndex].smTxt}</p>
          <Link to={image[activeIndex].link}>Shop Now</Link>
        </Text>

        <div style={left} onClick={Prev}>
          <AiOutlineLeft />
        </div>
        <div style={right} onClick={Next}>
          <AiOutlineRight />
        </div>
        <Circle>
          {image.map((item, i) => (
            <span
              className={i === activeIndex ? "activeClass" : "dot"}
              onClick={() => goToSlide(i)}
              key={i}
            >
              •
            </span>
          ))}
        </Circle>
      </motion.div>
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
  width: 80%;
  margin: auto;
  height: 80vh;
`;

const Circle = styled.div`
  width: 60%;
  height: 6vh;
  background: #00000088;
  position: absolute;
  bottom: 0;
  left: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  .dot {
    color: grey;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      scale: 1.5;
    }
  }
  .activeClass {
    color: white;
    font-size: 5rem;
    cursor: pointer;
  }
`;

const Text = styled.div`
  @media (max-width: 768px) {
    width: 80%;
    height: 60vh;
    left: 10%;
    top: 20%;
  }
  width: 60%;
  margin: auto;
  background: #000000ae;
  height: 30vh;
  position: absolute;
  top: 35%;
  left: 20%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  h2 {
    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
    font-size: 3vw;
  }
  p{
    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
      font-weight: 400;
    }
    font-size: 1.2vw;
  }
  a {
    color: white;
  }
`;
