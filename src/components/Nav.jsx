import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../utils/data";
import { BsFillCartFill } from "react-icons/bs";
import Cart from "./cart/Cart";
import MobileNav from "../Features/navFeatures/MobileNav";

function Nav() {
  const [showCart, setShowCart] = useState(false);

  const cart = () => {
    setShowCart(true);
  };

  const cartItem = useSelector((state) => state.cart.cartItems);
  return (
    <Container>
      <div className="links">
        {navLinks.map((link, i) => (
          <NavLink
            to={link.to}
            key={i}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      <div className="cart" onClick={cart}>
        <span>Cart</span>
        <BsFillCartFill />
        <p>{cartItem.length}</p>
      </div>

      <Cart showCart={showCart} setShowCart={setShowCart} />

      <MobileNav cart={cart} />
    </Container>
  );
}

export default Nav;
const Container = styled.nav`
  height: 8vh;
  width: 100%;
  background: #f0f0f0;
  position: sticky;
  top: 0;
  font-family: "Poppins", sans-serif;
  z-index: 9999999;
  @media (max-width: 768px) {
    display: none;
  }
  width: 100%;
  margin: auto;
  height: 10vh;
  top: 0;
  left: 0;
  z-index: 9999;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  gap: 5%;
  align-items: center;
  .links {
    width: 70%;
    display: flex;
    justify-content: center;
    gap:8%;
    a {
      text-decoration: none;
      font-weight: 600;
      transition: all 0.5 linear;
      &:hover {
        color: red;
      }
    }
  }
  .cart {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.3vw;
    gap: 2%;
    gap: 5%;
    position: absolute;
    width: 9%;
    cursor: pointer;
    position: relative;
    p {
      font-size: 1vw;
      position: absolute;
      top: -10%;
      right: 38%;
    }
  }
`;
