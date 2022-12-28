import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../components/filter/Filter";
import ShoesWrapper from "../Features/ShoesFeatures/ShoesWrapper";
import { useGetAllShoesQuery } from "../redux/ApiSlice";
import MobileFilter from "../widgets/filter/MobileFilter";

function Shoes() {
  // filter by brand
  const [productBrand, setProductBrand] = useState("");
  // sort
  const [sortBy, setsortBy] = useState("-price");

  // filter by price
  const [price, setPrice] = useState(100000);

  let priceVal = ``;

  if (price < 100000) {
    priceVal = `price[lte]=${price}`;
  }

  // filter by brand
  let query = `brand=${productBrand}`;
  if (!productBrand) {
    query = "";
  }
  const { isLoading, data, error } = useGetAllShoesQuery({
    query,
    sortBy,
    priceVal,
  });
  return (
    <Container>
      <MobileFilter
        productBrand={productBrand}
        setProductBrand={setProductBrand}
        setsortBy={setsortBy}
        setPrice={setPrice}
        price={price}
      />
      <Filter
        productBrand={productBrand}
        setProductBrand={setProductBrand}
        setsortBy={setsortBy}
        setPrice={setPrice}
        price={price}
      />
      <ShoesWrapper isLoading={isLoading} data={data} error={error} />
    </Container>
  );
}

export default Shoes;
const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
