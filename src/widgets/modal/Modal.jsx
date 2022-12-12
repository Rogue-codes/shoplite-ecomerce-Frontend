import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {MdCancel} from "react-icons/md"
function Modal({ handleClose, item }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const switchImages = (direction) => {
    if (direction === "left") {
      setActiveIndex(
        activeIndex === 0 ? item.images.length - 1 : activeIndex - 1
      );
    } else {
      setActiveIndex(
        activeIndex === item.images.length - 1 ? 0 : activeIndex + 1
      );
    }
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => count > 0 && setCount(count - 1);
  const activeBox = (i) => {
    setActive(i);
  };
  return (
    <Backdrop handleClose={handleClose}>
      <ModalDiv
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="left">
          <div className="left__image">
            <button className="btn__left" onClick={() => switchImages("left")}>
              <AiOutlineLeft size="1.2rem" />
            </button>
            <button
              className="btn__right"
              onClick={() => switchImages("right")}
            >
              <AiOutlineRight size="1.2rem" />
            </button>
            <img src={item.images[activeIndex]} alt="" />
          </div>
          <div className="images">
            {item.images.map((image, i) => (
              <div
                onClick={() => setActiveIndex(i)}
                className={activeIndex === i ? "box activeBox" : "box"}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <p>{item.name}</p>
          <div className="price">
            <span className="red">₦{item.newPrice}</span>
            <span>
              <strike>₦{item.oldPrice}</strike>
            </span>
          </div>
          <p>Shipping calculated at checkout.</p>
          <p>size: {item.size[active]}</p>
          <div className="sizes">
            {item.size.map((size, i) => (
              <span
                className={active === i ? "box activeBox" : "box"}
                onClick={() => activeBox(i)}
                key={i}
              >
                {size}
              </span>
            ))}
          </div>
          <div className="quantity">
            <p>Quantity:</p>
            <div className="add-container">
              <button onClick={decreaseCount}>-</button>
              <p>{count}</p>
              <button onClick={increaseCount}>+</button>
            </div>
          </div>
          <button className="add-to-cart">Add to cart</button>
        </div>
        <button className="close" onClick={handleClose}><MdCancel size="2rem"/></button>
      </ModalDiv>
    </Backdrop>
  );
}

export default Modal;

const ModalDiv = styled(motion.div)`
  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    height: 95%;
    position: relative;
  }
  width: 60%;
  height: 80%;
  background: #fff;
  display: flex;
  justify-content: center;
  .close{
    @media (max-width: 768px) {
      display: block;
    }
    display: none;
    position: absolute;
    border: none;
    background: transparent;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 1rem; */
  }
  .left {
    @media (max-width: 768px) {
      width: 100%;
      height: 30%;
    }
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .left__image {
      width: 100%;
      height: 80%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .btn__left {
        position: absolute;
        left: 2%;
        top: 50%;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        transition: all 0.5s linear;
        color: #000;
        cursor: pointer;
        &:hover {
          background: #000;
          color: #fff;
        }
      }
      .btn__right {
        position: absolute;
        right: 2%;
        top: 50%;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s linear;
        border: none;
        color: #000;
        cursor: pointer;
        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
    .images {
      @media (max-width: 768px) {
        display: none;
      }
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2%;
      .box {
        width: 100px;
        height: 100%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .activeBox {
        border: 2px solid red;
      }
    }
  }
  .right {
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
    width: 50%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    padding: 2%;
    p {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      font-size: 1.2vw;
      line-height: 20px;
      margin-top: 5%;
    }
    .price {
      width: 100%;
      height: 5vh;
      margin-top: 2%;
      display: flex;
      justify-content: flex-start;
      gap: 5%;
      .red {
        color: red;
      }
    }
    .sizes {
      width: 100%;
      margin-top: 5%;
      display: flex;
      justify-content: flex-start;
      gap: 5%;
      .box {
        @media (max-width: 768px) {
          width: 40px;
          height: 40px;
          font-size: 0.5rem;
        }
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        align-items: center;
        &:hover {
          background: #000;
          color: white;
        }
      }
      .activeBox {
        background: #000;
        color: #fff;
      }
    }
    .quantity {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      gap: 5%;
      margin-top: 5%;
    }
    .add-container {
      width: 50%;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
      height: 8vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      button {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        width: 20%;
        border: none;
        background: transparent;
        font-size: 1.5vw;
        cursor: pointer;
      }
    }
    .add-to-cart {
      width: 100%;
      height: 8vh;
      border: none;
      margin-top: 7%;
      color: white;
      background: #000;
      cursor: pointer;
    }
  }
`;
