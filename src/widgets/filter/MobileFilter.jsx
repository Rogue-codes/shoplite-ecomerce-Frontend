import React, { useState } from "react";
import { BsFillFilterCircleFill } from "react-icons/bs";
import styled from "styled-components";

const options = [
  { value: "nike" },
  { value: "Ross" },
  { value: "prada" },
  { value: "John Foster" },
  { value: "CK" },
  { value: "adidas" },
  { value: "jordan" },
  { value: "john mendson" },
  { value: "polo ralph" },
  { value: "nudie" },
  { value: "Fngeen" },
  { value: "Under Armour" },
  { value: "Carhartt" },
  { value: "LV" },
  { value: "Unavowed" },
  { value: "varsity" },
];
function MobileFilter({
  productBrand,
  setProductBrand,
  setsortBy,
  price,
  setPrice,
}) {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(!showFilter);

  // Create a state variable for each checkbox
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  //   price slider
  const [range, setRange] = useState(price);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);

  const handleChange = (e) => {
    setRange(e.target.value);
  };
  setPrice(range);

  function handleCheckbox1Change(event) {
    // Set the state of checkbox1 to the opposite of its current value
    setCheckbox1(!checkbox1);
    setsortBy("-price");
    // Uncheck checkbox2 if checkbox1 is checked
    if (event.target.checked) {
      setCheckbox2(false);
    }
  }

  function handleCheckbox2Change(event) {
    // Set the state of checkbox2 to the opposite of its current value
    setCheckbox2(!checkbox2);
    setsortBy("price");
    // Uncheck checkbox1 if checkbox2 is checked
    if (event.target.checked) {
      setCheckbox1(false);
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Container hgt={showFilter ? "auto" : "8vh"}>
      <header onClick={toggleFilter}>
        <BsFillFilterCircleFill size="2rem" /> <p>FILTER</p>
      </header>
      <FilterContainer>
        <p>Brand:</p>
        <select
          name=""
          id=""
          value={productBrand}
          onChange={(e) => setProductBrand(e.target.value)}
        >
          <option value="">All</option>
          {options.map((item, i) => (
            <option value={item.value} key={i}>
              {capitalizeFirstLetter(item.value)}
            </option>
          ))}
        </select>
        <br />
        <div className="price">
          <p>Price</p>
          <hr />
          <br />
          <label>
            <input
              type="checkbox"
              checked={checkbox1}
              onChange={handleCheckbox1Change}
            />
            Descending
          </label>{" "}
          <br />
          <label>
            <input
              type="checkbox"
              checked={checkbox2}
              onChange={handleCheckbox2Change}
            />
            Ascending
          </label>
        </div>{" "}
        <br />
        <p>
          price range: ( less than) ₦
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <div className="range">
          <div className="field">
            <div className="left">{min}</div>
            <input
              type="range"
              min={min}
              max={max}
              value={range}
              step="10000"
              onChange={(e) => handleChange(e)}
              oninput="rangeValue.innerText = this.value"
            />
            <div className="right">{max}</div>
          </div>
        </div>
      </FilterContainer>
    </Container>
  );
}

export default MobileFilter;

const Container = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  width: 90%;
  overflow: hidden;
  height: ${(props) => props.hgt};
  margin: auto;
  display: none;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    gap: 5%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
    p {
      font-size: 1rem;
      font-weight: 800;
    }
  }
`;

const FilterContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1%;
  p {
    padding-bottom: 5%;
  }
  select {
    width: 100%;
    height: 8vh;
    margin-bottom: 5%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }
  .price {
    margin: 0 auto;

    label {
      display: flex;
      gap: 2%;
      font-size: 1rem;
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
  }
  .select {
    /* display: none; */
    height: 12vh;
  }
  .range {
    padding: 2%;
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #f0f0f0;
    .field {
      display: flex;
      justify-content: space-between;
      padding: 2%;
      width: 100%;
      input[type="range"] {
        width: 70%;
      }
    }
  }
`;
