import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../utils/data";

function Nav() {
  return (
    <Container>
      {navLinks.map((link, i) => (
        <NavLink
          to={link.to}
          key={i}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          {link.title}
        </NavLink>
      ))}
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
  font-family: 'Poppins', sans-serif;
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
  display: flex;
  justify-content: center;
  gap: 5%;
  align-items: center;
  a {
    text-decoration: none;
    font-weight: 600;
    transition: all 0.5 linear;
    &:hover {
      color: red;
    }
  }
`;
