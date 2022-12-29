import React, { useState } from "react";
import styled from "styled-components";
import { avatar } from "../assets/data";
import Profile from "../components/tab/Profile";
import Settings from "../components/tab/Settings";
function MyAccount() {
  const tab = [
    {
      title: "Profile Details",
    },
    {
      title: "Security Settings",
    },
  ];

  const [active, setActive] = useState(0);

  const selectActive = (i) => {
    setActive(i);
  };
  return (
    <Container>
      <div className="left__pane">
        <div className="headers">
          <div className="circle">
            <img src={avatar} alt="" />
          </div>
          <p>
            Hello <strong>NNamdi</strong>
          </p>
        </div>
        {tab.map((item, i) => (
          <p
            key={i}
            onClick={() => selectActive(i)}
            className={active === i ? "title active" : "title"}
          >
            {item.title}
          </p>
        ))}
      </div>
      <div className="right__pane">
        {active === 0 ? <Profile /> : <Settings />}
      </div>
    </Container>
  );
}

export default MyAccount;

const Container = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 60vh;
  }
  font-family: "Roboto", sans-serif;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left__pane {
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      margin-bottom: 5%;
    }
    width: 25%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5%;
    .headers {
      width: 100%;
      height: 25vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }
      }
      p {
        font-size: 1rem;
      }
    }
    .title {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      color: black;
      font-size: 1.4vw;
      padding: 5%;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
        rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    }
    .active {
      color: red;
    }
  }
  .right__pane {
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 73%;
    height: 100vh;
  }
`;
