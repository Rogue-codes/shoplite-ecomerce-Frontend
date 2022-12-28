import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../components/filter/Filter";
import AccessoriesWrapper from "../Features/accesoriesFeatures/AccessoriesWrapper";
import { useGetAllAccesoriesQuery } from "../redux/ApiSlice";
import MobileFilter from "../widgets/filter/MobileFilter";

function Accesories() {
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
  const { isLoading, data, error } = useGetAllAccesoriesQuery({
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
      <AccessoriesWrapper isLoading={isLoading} data={data} error={error} />
    </Container>
  );
}

export default Accesories;
const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
