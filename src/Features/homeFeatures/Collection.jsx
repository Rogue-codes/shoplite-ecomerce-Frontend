import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { collection } from "../../utils/data";

function Collection() {
  
  return (
    <Container>
      <h1>Collection List</h1>
      <Flex>
        {collection.map((item, i) => (
          <Card key={i}>
            <div className="top">
              <img src={item.img} alt="" />
            </div>
            <div className="bottom">
            <Link to={item.link}>{item.name}</Link>
              <p>{item.quantity}</p>
            </div>
          </Card>
        ))}
      </Flex>
    </Container>
  );
}

export default Collection;

const Container = styled.div`
  width: 100%;
  h1 {
    @media (max-width: 768px) {
      font-size: 1.3rem;
      text-align: center;
    }
    text-align: center;
    font-family: "Montserrat", sans-serif;
    margin: 2%;
    font-size: 2vw;
    text-decoration: underline;
  }
`;
const Flex = styled.div`
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;
const Card = styled.div`
  @media (max-width: 768px) {
    width: 48%;
    height: 40vh;
  }
  width: 23%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  a{
    color: black;
    margin-bottom: 5%;
  }
  .top {
    width: 100%;
    height: 70%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .bottom {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    h2 {
      @media (max-width: 768px) {
        font-size: 1rem;
        font-weight: 500;
      }
      font-size: 1.5vw;
    }
    p {
      @media (max-width: 768px) {
        font-size: 0.7rem;
      }
      font-size: 1vw;
    }
  }
`;
