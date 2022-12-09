import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Slider({ image }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handleClick = (direction) => {
    if (direction === "left") {
      setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 3);
    } else {
      setActiveIndex(activeIndex < 3 ? activeIndex + 1 : 0);
    }
  };

  console.log(activeIndex);

  //  const goToSlide = (i) => {
  //   setActiveIndex(i);
  // };
  // const left = {
  //   position: "absolute",
  //   left: "2%",
  //   background: "black",
  //   top: "50%",
  //   fontSize: "1.2rem",
  //   cursor: "pointer",
  //   color: "white",
  // };
  // auto play

  let timeOut = null;
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        handleClick();
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
      <Slide
        onMouseEnter={stopAutoPlay}
        onMouseLeave={() => setAutoPlay(true)}
        initial="init"
        animate="apear"
        transition={{ ease: "linear", duration: 5 }}
        variants={variants}
      >
        <Sliders activeIndex={activeIndex}>
          {image.map((image, i) => (
            <div className="sliderImage" key={i}>
              <img src={image.img} alt="" />
              <Text>
                <h2>{image.text}</h2>
                <p>{image.smTxt}</p>
                <Link to={image.link}>Shop Now</Link>
              </Text>
              <button className="left" onClick={() => handleClick("left")}>
                <AiOutlineLeft size="2rem" />
              </button>

              <button className="right" onClick={() => handleClick("right")}>
                <AiOutlineRight size="2rem" />
              </button>
            </div>
          ))}
        </Sliders>
      </Slide>
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
  width: 100%;
  margin: auto;
  height: 100vh;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
`;
const Sliders = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.activeIndex * -100}%);
  transition: all 1s ease;
  .sliderImage {
    min-width: 100vw;
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
    .left {
      position: absolute;
      left: 5%;
      top: 50%;
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }

    .right {
      position: absolute;
      right: 5%;
      top: 50%;
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
`;
// const Circle = styled.div`
//   width: 60%;
//   height: 6vh;
//   background: #00000088;
//   position: absolute;
//   bottom: 0;
//   left: 20%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 5%;
//   .dot {
//     color: grey;
//     font-size: 2rem;
//     cursor: pointer;
//     transition: all 0.2s linear;
//     &:hover {
//       scale: 1.5;
//     }
//   }
//   .activeClass {
//     color: white;
//     font-size: 5rem;
//     cursor: pointer;
//   }
// `;

 const Text = styled.div`
   @media (max-width: 768px) {
     width: 80%;
     height: 60vh;
     left: 10%;
     top: 20%;
   }
   width: 60%;
   margin: auto;
   background: #0000007e;
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
