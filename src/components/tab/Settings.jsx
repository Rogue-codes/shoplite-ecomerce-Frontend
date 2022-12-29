import React from "react";
import styled from "styled-components";

function Settings() {
  return (
    <Container>
      <h2>Update Password</h2>

      <form action="">
        <input type="password" placeholder="current password" />
        <input type="password" placeholder="new password" />
        <input type="password" placeholder="confirm new password" />
        <button>Submit</button>
      </form>
    </Container>
  );
}

export default Settings;

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  h2 {
    display: flex;
    justify-content: center;
    margin-top: 5%;
  }
  form {
    @media (max-width: 768px) {
      width: 100%;
      padding: 2%;
    }
    width: 50%;
    margin: 0 auto;
    margin-top: 5%;
    height: auto;
    input {
      width: 100%;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
      height: 8vh;
      margin-top: 5%;
      padding: 2%;
      &:focus {
        outline: none;
      }
      &::placeholder {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        font-size: 1.3vw;
      }
    }
    button {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      width: 100%;
      height: 8vh;
      margin-top: 5%;
      border: none;
      background: #000;
      color: #fff;
      font-size: 1.3vw;
      cursor: pointer;
    }
  }
`;
