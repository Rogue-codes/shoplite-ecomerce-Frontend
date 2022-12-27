import React from "react";
import styled from "styled-components";

function AddToCartButton({item,handleAddToCart}) {
  return <Container onClick={()=>handleAddToCart(item)}>Add to cart</Container>;
}

export default AddToCartButton;
const Container = styled.button`
  width: 100%;
  height: 8vh;
  border: none;
  margin-top: 7%;
  color: white;
  background: #000;
  cursor: pointer;
`;
