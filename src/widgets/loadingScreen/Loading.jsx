import React from "react";
import styled from "styled-components";
import { loader } from "../../assets/data";

function Loading() {
  return (
    <Container>
      <img
        src={loader}
        alt=""
      />
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 20%;
    height: 20%;
    object-fit: contain;
  }
`;
