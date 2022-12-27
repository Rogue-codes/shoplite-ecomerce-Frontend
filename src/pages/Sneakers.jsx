import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../components/filter/Filter";
import SneakersWrapper from "../Features/sneakersFeatures/SneakersWrapper";
import { useGetAllSneakersQuery } from "../redux/ApiSlice";
import MobileFilter from "../widgets/filter/MobileFilter";

function Sneakers() {
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

//   filter by brand
  let query = `brand=${productBrand}`;
  if (!productBrand) {
    query = "";
  }
  const { isLoading, data, error } = useGetAllSneakersQuery({ query, sortBy, priceVal });
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
      <SneakersWrapper isLoading={isLoading} data={data} error={error} />
    </Container>
  );
}

export default Sneakers;
const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
