import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { motion } from "framer-motion";
import { navLinks } from "../../utils/data";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function MobileNav({cart}) {
  const [menuWrapper, setMenuWrapper] = useState(false);


  const cartQuantity = useSelector((state)=>state.cart.cartItems)
  return (
    <Container>
      <header>
        <p>Fast delivery with money back guarantee</p>
      </header>
      <div className="mobile-menu">
        <div className="menu">
          <HiMenu size="2rem" onClick={() => setMenuWrapper(!menuWrapper)} />
        </div>

        <div className="logo">
          <Link to='/'>ShopLite</Link>
        </div>

        <div className="cart" onClick={cart}>
          <BsFillCartPlusFill size="2rem" /><p>{cartQuantity.length}</p>
        </div>
      </div>
      {menuWrapper && (
        <Wrapper
          initial={{opacity:0}}
          animate={{opacity:1}}
          onClick={() => setMenuWrapper(false)}
        >
          <motion.div
            className="menu-wrapper"
            initial={{x:'-100vw'}}
            animate={{x:0}}
          >
            <AiOutlineClose
              className="ico"
              size="1.6rem"
              onClick={() => setMenuWrapper(false)}
            />
            <ul>
              {navLinks.map((link, i) => (
                <NavLink
                  to={link.to}
                  key={i}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={() => setMenuWrapper(false)}
                >
                  {link.title}
                </NavLink>
              ))}
            </ul>
            <div className="login">
              <Link to='/account/login' onClick={() => setMenuWrapper(false)}><button>login</button></Link>
            </div>
          </motion.div>
        </Wrapper>
      )}
    </Container>
  );
}

export default MobileNav;
const Container = styled.nav`
  @media (max-width: 768px) {
    display: block;
  }
  display: none;
  position: relative;
  header {
    p {
      font-size: 0.8rem;
    }
    background: grey;
    padding: 5% 0%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mobile-menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
    padding: 2%;
  }
  .cart{
    p{
      position: absolute;
      right: 1%;
      font-weight: 800;
      font-size:1rem;
      top: 55%;
    }
  }
  .logo{
    a{
      font-size: 2rem;
      text-decoration: none;
      font-weight: 800;
      color: black;
    }
  }
`;
const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  background: #131313aa;
  color: white;
  .menu-wrapper {
    width: 80%;
    background: white;
    height: 100vh;
    position: relative;
    padding: 5%;
    .ico {
      position: absolute;
      top: 2%;
      left: 2%;
      color: #2098ee;
      border: 1px solid #2098ee;
      padding: 2%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ul {
      padding-top: 25%;
      a {
        border-bottom: 1px solid #2098ee;
        padding: 3%;
        display: block;
        margin-bottom: 10%;
      }
    }
    .login {
      border-bottom: 1px solid #2098ee;
      padding: 5%;
      button {
        width: 100%;
        height: 8vh;
        border: none;
        background: #2098ee;
        color: white;
        font-size: 1rem;
      }
    }
  }
`;
