import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { motion } from "framer-motion";
import { navLinks } from "../../utils/data";
import { NavLink } from "react-router-dom";
function MobileNav() {
  const [menuWrapper, setMenuWrapper] = useState(false);
  const variants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
    transition: { duration: 1, delay: 0.5 },
    slideIn: { x: "0%" },
    slideOut: { x: "-100%" },
  };
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
          <h1>ShopLite</h1>
        </div>

        <div className="cart">
          <BsFillCartPlusFill size="2rem" />
        </div>
      </div>
      {menuWrapper && (
        <Wrapper
          initial={false}
          animate={menuWrapper ? "show" : "hide"}
          variants={variants}
        >
          <motion.div
            className="menu-wrapper"
            initial={false}
            animate={menuWrapper ? "slideIn" : "slideOut"}
            variants={variants}
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
                >
                  {link.title}
                </NavLink>
              ))}
            </ul>
            <div className="login">
              <button>login</button>
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
        padding: 5%;
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
