import React from "react";
import styled from "styled-components";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
function NewsLetter() {
  return (
    <Container>
      <Left>
        <h2>Subscribe to our newsletter</h2>
        <p>Signup for our newsletter to stay up to date on sales and events.</p>
      </Left>
      <Right>
        <form action="">
          <input type="email" placeholder="Enter your e-mail address" />
          <button>Join</button>
        </form>
        <div className="icons">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsPinterest />
          <BsYoutube />
        </div>
      </Right>
    </Container>
  );
}

export default NewsLetter;
const Container = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 5%;
  }
  width: 100%;
  height: 40vh;
  display: flex;
  background: #3b7ab8;
  font-family: "Poppins", sans-serif;
  color: white;
`;
const Left = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  h2 {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-size: 1.5vw;
  }
  p {
    @media (max-width: 768px) {
      font-size: 0.7rem;
      text-align: center;
    }
    width: 60%;
    text-align: center;
    font-size: 1.2vw;
  }
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10%;
  }
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15%;
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      @media (max-width: 768px) {
        font-size: 0.7rem;
        border-bottom: 1px solid #fff;
      }
      width: 90%;
      height: 8vh;
      border: none;
      border-bottom: 1px solid #fff;
      background: none;
      color: white;
      padding: 2%;
      font-size: 1vw;
      &::placeholder {
        color: white;
      }
      &:focus {
        outline: 1px dashed white;
      }
    }
    button {
      @media (max-width: 768px) {
        font-size: 0.7rem;
      }
      width: 15%;
      height: 8vh;
      background: none;
      margin-left: -15%;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 1.3vw;
    }
  }
  .icons {
    @media (max-width: 768px) {
      font-size: 0.7rem;
      margin-top: 5%;
    }
    width: 90%;
    height: 10vh;
    margin-left: 5%;
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-start;
    gap: 5%;
  }
`;
