import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantityInCart,
  deleteCartItem,
  getTotal,
  increaseQuantityInCart,
} from "../../redux/cartSlice";

function Cart({ showCart, setShowCart }) {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const cartTotalPrice = useSelector((state) => state.cart.cartTotal);
  const dispatch = useDispatch();
  const variants = {
    open: { opacity: 1, x: "0%" },
    closed: { opacity: 0, x: "100%", transition: { delay: 0.5 } },
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItem, dispatch]);

  const deleteItemFromCart = (item) => {
    dispatch(deleteCartItem(item));
  };

  const increaseCartItem = (item) => {
    dispatch(increaseQuantityInCart(item));
  };

  const decreaseCartItem = (item) => {
    dispatch(decreaseQuantityInCart(item));
  };

  const [showTextBox, setShowTextBox] = useState(false);

  return (
    <Container
      initial={false}
      animate={showCart ? "open" : "closed"}
      variants={variants}
    >
      <div className="header">
        <GrClose
          size="1.2rem"
          cursor="pointer"
          onClick={() => setShowCart(false)}
        />
        <h2>Cart</h2>
        <p>{cartItem.length} item(s)</p>
      </div>
      {cartItem.length === 0 ? (
        <p className="empty">cart is empty</p>
      ) : (
        cartItem.map((item) => (
          <div className="cart_Item" key={item._id}>
            <div className="delete" onClick={() => deleteItemFromCart(item)}>
              <MdDelete color="red" size="1.2rem" />
            </div>
            <div className="left">
              <img src={item.coverImage} alt="" />
            </div>
            <div className="right">
              <div className="top">
                <h2 className="title">{item.title}</h2>
                <p>Size: {item.activeSize}</p>
              </div>
              <div className="bottom">
                <div className="quantity">
                  <button onClick={() => decreaseCartItem(item)}>-</button>
                  <span>{item.itemQuantityInCart}</span>
                  <button onClick={() => increaseCartItem(item)}>+</button>
                </div>
                <div className="price">
                  <p>
                    ₦
                    {(item.itemQuantityInCart * item.price)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {cartItem.length > 0 && (
        <>
          <div className="add__note">
            <div className="head" onClick={() => setShowTextBox(!showTextBox)}>
              <p>Leave a note with your order</p>
              <span>
                {showTextBox ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
            </div>
            {showTextBox && (
              <textarea name="" id="" cols="30" rows="10"></textarea>
            )}
          </div>

          <div className="card">
            <span>
              You are only ₦156,142.00 away from Free Domestic Shipping!
              (Excludes International)
            </span>
          </div>

          <div className="total">
            <div className="sub__total">
              <p>subtotal</p>
              <p>
                {cartTotalPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
            <div className="shipping">
              <p>shipping</p>
              <p>Calculated at checkout</p>
            </div>
            <br />
            <hr />
            <div className="total_pay">
              <p>Total</p>
              <p>
                {cartTotalPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          </div>

          <div className="cart__checkout">
            <button>View Cart</button>
            <button>Checkout</button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;

const Container = styled(motion.div)`
  @media (max-width: 768px) {
    width: 90%;
  }
  width: 35%;
  padding: 1% 0%;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: #fff;
  z-index: 999999999;
  &::-webkit-scrollbar {
    display: none;
  }
  .header {
    display: flex;
    border-bottom: 1px solid lightgrey;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
  }
  .cart_Item {
    width: 100%;
    height: 25vh;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .left {
      width: 30%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .right {
      width: 70%;
      height: 100%;
      padding: 2%;
      .top {
        width: 100%;
        height: 70%;
        padding: 2%;
        .title {
          @media (max-width: 768px) {
            font-size: 1rem;
          }
          font-size: 1vw;
          font-weight: 500;
        }
        p {
          @media (max-width: 768px) {
            font-size: 1rem;
          }
          font-size: 1vw;
          margin-top: 5%;
        }
      }
      .bottom {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-between;
        padding: 2%;
        align-items: center;
        gap: 5%;
        .quantity {
          width: 50%;
          display: flex;
          justify-content: space-between;
          button {
            @media (max-width: 768px) {
              font-size: 1rem;
            }
            width: 20%;
            font-size: 1.5vw;
            background: transparent;
            border: none;
            cursor: pointer;
          }
        }
      }
    }
    .delete {
      position: absolute;
      right: 10%;
      top: 50%;
      cursor: pointer;
    }
  }
  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50%;
  }
  .add__note {
    width: 90%;
    margin: auto;
    margin-top: 5%;
    overflow: hidden;
    .head {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2%;
      cursor: pointer;
      p {
        @media (max-width: 768px) {
          font-size: 0.7rem;
        }
        font-size: 1vw;
      }
    }
    textarea {
      width: 100%;
      margin-top: 2%;
      padding: 2%;
    }
  }
  .card {
    width: 90%;
    margin: auto;
    height: 25vh;
    background: #333;
    margin-top: 5%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      @media (max-width: 768px) {
        font-size: 1rem;
        width: 70%;
      }
      text-align: center;
    }
  }
  .total {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    width: 90%;
    margin: auto;
    height: 25vh;
    margin-top: 5%;
    font-size: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5%;
    .sub__total {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .shipping {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .total_pay {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .cart__checkout {
    width: 90%;
    margin: auto;
    margin-top: 2%;
    display: flex;
    justify-content: flex-end;
    gap: 5%;
    padding: 2%;
    button {
      width: 40%;
      height: 8vh;
      background: lightgrey;
      border: none;
      cursor: pointer;
      &:nth-child(2) {
        background: black;
        color: white;
      }
    }
  }
`;
