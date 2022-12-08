import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";

function Modal({ handleClose, item }) {
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
  const [count,setCount] = useState(0)
  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => count > 0 && setCount(count - 1)
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
          <img src={item.img} alt="" />
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
          <button className="add-to-cart">
            Add to cart
          </button>
        </div>
      </ModalDiv>
    </Backdrop>
  );
}

export default Modal;

const ModalDiv = styled(motion.div)`
  width: 60%;
  height: 80%;
  background: #fff;
  display: flex;
  justify-content: center;
  .left {
    width: 50%;
    height: 60%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .right {
    width: 50%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    padding: 2%;
    p {
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
        width: 20%;
        border: none;
        background: transparent;
        font-size: 1.5vw;
        cursor: pointer;
      }
    }
    .add-to-cart{
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
