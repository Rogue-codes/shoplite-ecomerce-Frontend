import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../components/filter/Filter";
import JerseyWrapper from "../Features/jerseyFeatures/JerseyWrapper";
import { useGetAllJerseysQuery } from "../redux/ApiSlice";
import MobileFilter from "../widgets/filter/MobileFilter";

function Jersey() {
  // filter by brand
  const [productBrand, setProductBrand] = useState("");
  // sort
  const [sortBy, setsortBy] = useState("-price");

  // filter by price
  const [price, setPrice] = useState(100000);

  const [priceMobile, setPriceMobile] = useState(100000);

  let priceVal = ``;

  if (price < 100000) {
    priceVal = `price[lte]=${price}`;
  }

  let mobilePriceVal = ``;

  if (priceMobile < 100000) {
    mobilePriceVal = `price[lte]=${priceMobile}`;
  }

  let query = `brand=${productBrand}`;
  if (!productBrand) {
    query = "";
  }
  const { isLoading, data, error } = useGetAllJerseysQuery({
    query,
    sortBy,
    priceVal,
    mobilePriceVal
  });
  return (
    <Container>
      <MobileFilter
        productBrand={productBrand}
        setProductBrand={setProductBrand}
        setsortBy={setsortBy}
        setPriceMobile={setPriceMobile}
        priceMobile={priceMobile}
      />
      <Filter
        productBrand={productBrand}
        setProductBrand={setProductBrand}
        setsortBy={setsortBy}
        setPrice={setPrice}
        price={price}
      />
      <JerseyWrapper isLoading={isLoading} data={data} error={error} />
    </Container>
  );
}

export default Jersey;
const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
