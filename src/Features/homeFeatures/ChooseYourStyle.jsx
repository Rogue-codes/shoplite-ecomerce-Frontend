import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { img5 } from "../../assets/data";

function ChooseYourStyle() {
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  const scrollRef = useRef(null);
  const variants = {
    hide: {
      x: {
        // x: "-100%",
        opacity: 0,
      },
    },
    slideIn: {
      //   x: "0%",
      opacity: 1,
    },
    transition: { delay: 0.5, duration: 1 },
  };
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Container
        initial={false}
        whileInView={
          isLoaded
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        ref={scrollRef}
      >
        <img src={img5} alt="" onLoad={() => setIsLoaded(true)} />
        <Text variants={variants} initial="hide" animate="slideIn">
          <h2>Choose you, Choose your Style</h2>
          <p>Enhancing the personality of every character</p>
          <button>Shop</button>
        </Text>
      </Container>
      <WhatsApp>
        <div className="left">
          <h2>WHATSAPP</h2>
          <a href="tel:+44-785-7895">+44-785-7895</a>
        </div>

        <div className="right">
          <h2>PAY ON DELIVERY</h2>
          <p>Nationwide Cash on Delivery</p>
        </div>
      </WhatsApp>
    </>
  );
}

export default ChooseYourStyle;

const Container = styled(motion.div)`
  @media (max-width: 768px) {
    height: 70vh;
  }
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const Text = styled(motion.div)`
  @media (max-width: 768px) {
    height: 50vh;
    width: 80%;
  }
  width: 50%;
  height: 40vh;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999999999;
  gap: 5%;
  color: white;
  background: #00000086;
  h2 {
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }
    font-size: 2vw;
  }
  p {
    @media (max-width: 768px) {
      font-size: 0.7rem;
      text-align: center;
    }
    font-size: 1vw;
  }
  button {
    @media (max-width: 768px) {
      width: 50%;
    }
    width: 20%;
    height: 8vh;
    font-family: "Montserrat", sans-serif;
    margin-top: 2%;
    border: none;
    background: #3b7ab8;
    color: white;
    cursor: pointer;
  }
`;
const WhatsApp = styled.div`
  @media (max-width: 768px) {
    height: 15vh;
  }
  width: 100%;
  height: 25vh;
  background: #3b7ab8;
  font-family: "Montserrat", sans-serif;
  color: white;
  padding: 3%;
  display: flex;
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: solid 3px white;
    h2 {
      @media (max-width: 768px) {
        font-size: 0.7rem;
        text-align: center;
      }
      font-size: 3vw;
    }
    a {
      @media (max-width: 768px) {
        font-size: 0.5rem;
        text-align: center;
      }
      color: white;
    }
  }
  .right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      @media (max-width: 768px) {
        font-size: 0.7rem;
        text-align: center;
      }
    }
    p {
      @media (max-width: 768px) {
        font-size: 0.5rem;
        text-align: center;
      }
    }
  }
`;
