import React from "react";
import styled from "styled-components";
import { error } from "../../assets/data";

function Error() {
  return (
    <Container>
      <img
        src={error}
        alt=""
      />
      <p>An error occurred</p>
    </Container>
  );
}

export default Error;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
  img{
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }
`;
