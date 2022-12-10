import React from "react";
import styled from "styled-components";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container>
      <Top>
        <ul>
          <li>EXPLORE</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Shipping Policy</li>
        </ul>
        <ul>
          <li>EXPLORE</li>
          <li>Search</li>
          <li>Contact us</li>
          <li>News</li>
        </ul>
        <ul>
          <li>ABOUT</li>
          <li>
            ShopLite.com provide you with the best fashion products ranging from
            Clothing, Shoes, Wristwatches, Sunglasses, Colognes, Accessories and
            much more
          </li>
        </ul>
      </Top>
      <Bottom>
        <div className="icons">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsPinterest />
          <BsYoutube />
        </div>
        <div className="date">© {year} ShopLite.com •</div>
      </Bottom>
    </Container>
  );
}

export default Footer;
const Container = styled.footer`
  width: 100%;
  
  font-family: "Poppins", sans-serif;
  padding: 2%;
`;
const Top = styled.div`
  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
  }
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  ul {
    @media (max-width: 768px) {
      width: 48%;
    }
    width: 30%;
    list-style-type: none;
    li {
      @media (max-width: 768px) {
        font-size: 0.5rem;
      }
      margin-bottom: 2%;
      font-size: 1vw;
      &:nth-child(1) {
        @media (max-width: 768px) {
          font-size: 0.7rem;
        }
        font-size: 1.3vw;
        margin-bottom: 5%;
        font-weight: 600;
      }
    }
  }
`;
const Bottom = styled.div`
  width: 100%;
  margin-top: 5%;
  .icons {
    @media (max-width: 768px) {
      font-size: .7rem;
    }
    width: 90%;
    margin-bottom: 2%;
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-start;
    gap: 2%;
  }
  .date{
    @media (max-width: 768px) {
      font-size: .7rem;
    }
  }
`;
