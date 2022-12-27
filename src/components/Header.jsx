import { motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Cart from '../components/cart/Cart'
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
  BsFillCartFill,
  BsSearch,
  BsHeartFill,
} from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MobileNav from "../Features/navFeatures/MobileNav";
import { userLogout } from "../redux/authSlice";

function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAdvert, setShowAdvert] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const cart =()=>{
    setShowCart(true);
  }

  const handleLogOut = () => {
    dispatch(userLogout());
    toast.success("logout successful", {
      position: "top-right",
    });
    navigate("/account/login");
  };
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-10%", transition: { delay: 2.5 } },
  };
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <Container>
      {showAdvert && (
        <div className="header-1">
          <div className="icons">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsPinterest />
            <BsYoutube />
          </div>
          <p>Fast delivery with money back guarantee</p>
          <FaTimes
            className="close"
            cursor="pointer"
            onClick={() => setShowAdvert(false)}
          />
        </div>
      )}

      <div className="header-search">
        <Link to="/" className="logo">
          Shoplite
        </Link>
        <div className="search">
          <input type="search" />
          <button>
            <BsSearch size="1rem" />
          </button>
        </div>
        <div
          className="Account-Container"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <div className="account">
            <FaUserAlt size="1rem" />
            {user ? (
              <>
                <div className="auth">
                  <p>Hi, {user}</p>
                </div>

                {showDropDown && (
                  <motion.div
                    className="dropDwn"
                    initial={false}
                    animate={showDropDown ? "open" : "closed"}
                    variants={variants}
                  >
                    <div className="account__details">
                      <FaUserAlt size="1rem" />
                      <Link to="/me">My Account</Link>
                    </div>
                    <div className="account__details">
                      <BsHeartFill size="1rem" />
                      <p>Saved Items</p>
                    </div>
                    <div className="logout">
                      <p onClick={handleLogOut}>logout</p>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <Link to="/account/login">Account</Link>
            )}
          </div>
        </div>

        <div className="cart" onClick={cart}>
          <span>Cart</span>
          <BsFillCartFill />
        </div>
      </div>
      <MobileNav />
      <Cart showCart={showCart} setShowCart={setShowCart}/>

    </Container>
  );
}

export default Header;
const Container = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 1%;
  font-family: "Poppins", sans-serif;
  position: relative;
  .header-1 {
    @media (max-width: 768px) {
      display: none;
    }
    width: 100%;
    position: relative;
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
    .close {
      position: absolute;
      right: 1%;
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
      width: 30%;
      margin-left: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 80%;
        height: 6vh;
        border: none;
        padding: 2%;
        font-size: 1.2rem;
        border: 1px solid #d4caca;
        &:focus {
          outline: none;
        }
      }
      button {
        height: 6vh;
        width: 10%;
        margin-left: -10%;
        cursor: pointer;
        border: 1px solid #000;
        border-left: none;
        background: #000;
        color: white;
      }
    }
    .Account-Container {
      width: 22%;
      padding: 1% 0%;
      cursor: pointer;
      height: 100%;
      margin-left: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      .account {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 1.3vw;
        font-weight: 500;
        a {
          text-decoration: none;
          color: #000;
          margin-left: 5%;
          &:hover {
            text-decoration: underline;
          }
        }
        .auth {
          width: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            color: red;
          }
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
      width: 10%;
      cursor: pointer;
    }
  }
  .dropDwn {
    width: 15%;
    height: 30vh;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
      rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    position: absolute;
    right: 11.5%;
    top: 95%;
    background: white;
    z-index: 9999999999999999;
    .account__details {
      width: 100%;
      height: 10vh;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5%;
      padding: 0% 5%;
    }
    .logout {
      width: 100%;
      height: 10vh;
      border-top: 1px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5%;
      font-weight: 700;
      text-decoration: underline;
      p {
        cursor: pointer;
      }
    }
  }
`;
