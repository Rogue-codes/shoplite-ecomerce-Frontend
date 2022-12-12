import React from "react";
import styled from "styled-components";
import Filter from "../components/filter/Filter";
import AccessoriesWrapper from "../Features/accesoriesFeatures/AccessoriesWrapper";
import MobileFilter from "../widgets/filter/MobileFilter";

function Accesories() {
  return <Container>
    <MobileFilter/>
    <Filter/>
    <AccessoriesWrapper/>
  </Container>;
}

export default Accesories;
const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
