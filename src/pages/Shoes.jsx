import React from "react";
import styled from "styled-components";
import Filter from "../components/filter/Filter";
import ShoesWrapper from "../Features/ShoesFeatures/ShoesWrapper";
import MobileFilter from "../widgets/filter/MobileFilter";

function Shoes() {
  return (
    <Container>
      <MobileFilter />
      <Filter />
      <ShoesWrapper />
    </Container>
  );
}

export default Shoes;
const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
