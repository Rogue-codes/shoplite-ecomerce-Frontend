import React, { useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
  BsFillCartFill,
  BsSearch,
} from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import MobileNav from "../Features/navFeatures/MobileNav";
import { navLinks } from "../utils/data";

function Header() {
  const [scroll, setScroll] = useState(false);

  window.onscroll = () => {
    setScroll(window.pageYOffset < 50 ? false : true);
    return window.onscroll(null);
  };
  return (
    <Container>
      <div className="header-1">
        <div className="icons">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsPinterest />
          <BsYoutube />
        </div>
        <p>Fast delivery with money back guarantee</p>
      </div>

      <div className="header-search">
        <Link to="/" className="logo">
          Shoplite
        </Link>
        <div className="search">
          <input type="search" />
          <button>
            <BsSearch size="1.5rem" />
          </button>
        </div>
        <div className="Account-Container">
          <div className="account">
            <Link to="/">Account</Link>
            <FaUserAlt />
          </div>
          <div className="cart">
            <span>Cart</span>
            <BsFillCartFill />
          </div>
        </div>
      </div>

      <div className={scroll ? "link fixed-link" : "link"}>
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
      <MobileNav />
    </Container>
  );
}

export default Header;
const Container = styled.header`
  padding: 1%;
  position: relative;
  font-family: "Montserrat", sans-serif;
  .header-1 {
    @media (max-width: 768px) {
      display: none;
    }
    width: 100%;
    display: flex;
    align-items: center;
    height: 8vh;
    gap: 15%;
    background: #f2f2f2;
    margin-bottom: 2%;
    .icons {
      display: flex;
      justify-content: space-between;
      width: 20%;
      font-size: 1.2rem;
    }
  }
  .header-search {
    @media (max-width: 768px) {
      display: none;
    }
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    .logo {
      width: 5%;
      height: 100%;
      font-weight: 900;
      font-size: 2vw;
      color: black;
      text-decoration: none;
    }
    .search {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 80%;
        height: 8vh;
        border: none;
        padding: 2%;
        font-size: 1.2rem;
        box-shadow: rgba(235, 236, 237, 0.898) 0px 0px 0px 2px,
          rgba(235, 236, 237, 0.944) 0px 4px 6px -1px,
          rgba(235, 236, 237, 0.886) 0px 1px 0px inset;
        &:focus {
          outline: none;
        }
      }
      button {
        height: 8vh;
        width: 10%;
        margin-left: -10%;
        cursor: pointer;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      }
    }
    .Account-Container {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15%;
      .account {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5%;
        width: 50%;
      }
      .cart {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2%;
        gap: 5%;
        width: 50%;
        text-decoration: none;
      }
    }
  }
  .link {
    @media (max-width: 768px) {
      display: none;
    }
    width: 60%;
    margin: auto;
    height: 10vh;
    margin-top: 2%;
    display: flex;
    justify-content: center;
    gap: 5%;
    align-items: center;
  }
  .fixed-link {
    position: fixed;
    left: 20%;
    top: 0;
    z-index: 9999;
    background: white;
    box-shadow: rgba(122, 123, 125, 0.3) 0px 0px 0px 3px;
  }
`;
