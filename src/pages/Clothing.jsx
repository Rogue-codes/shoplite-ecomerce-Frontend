import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../components/filter/Filter";
import ClothingWrapper from "../Features/clothingFeatures/ClothingWrapper";
import { useGetAllShirtsQuery } from "../redux/ApiSlice";
import MobileFilter from "../widgets/filter/MobileFilter";

function Clothing() {
  // filter by brand
  const [productBrand, setProductBrand] = useState("");
  // sort
  const [sortBy, setsortBy] = useState("-price");

  const [price, setPrice] = useState(100000);

  let priceVal = ``;

  if (price < 100000) {
    priceVal = `price[lte]=${price}`;
  }
  let query = `brand=${productBrand}`;
  if (!productBrand) {
    query = "";
  }
  const { isLoading, data, error } = useGetAllShirtsQuery({ query, sortBy, priceVal });

  return (
    <Container>
      <MobileFilter />
      <Filter
        productBrand={productBrand}
        setProductBrand={setProductBrand}
        setsortBy={setsortBy}
        setPrice={setPrice}
        price={price}
      />
      <ClothingWrapper isLoading={isLoading} data={data} error={error} />
    </Container>
  );
}

export default Clothing;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
