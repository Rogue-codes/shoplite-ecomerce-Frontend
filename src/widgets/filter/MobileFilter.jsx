import React, { useState } from "react";
import { BsFillFilterCircleFill } from "react-icons/bs";
import styled from "styled-components";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
function MobileFilter() {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(!showFilter);

  const [selectedOption, setSelectedOption] = useState(null);

  // Create a state variable for each checkbox
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  //   price slider
  const [range, setRange] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);

  const handleChange = (e) => {
    setRange(e.target.value);
  };

  function handleCheckbox1Change(event) {
    // Set the state of checkbox1 to the opposite of its current value
    setCheckbox1(!checkbox1);
    // Uncheck checkbox2 if checkbox1 is checked
    if (event.target.checked) {
      setCheckbox2(false);
    }
  }

  function handleCheckbox2Change(event) {
    // Set the state of checkbox2 to the opposite of its current value
    setCheckbox2(!checkbox2);
    // Uncheck checkbox1 if checkbox2 is checked
    if (event.target.checked) {
      setCheckbox1(false);
    }
  }
  return (
    <Container hgt={showFilter ? "auto" : "8vh"}>
      <header onClick={toggleFilter}>
        <BsFillFilterCircleFill size="2rem" /> <p>FILTER</p>
      </header>
      <FilterContainer>
        <p>Gender:</p>
        <Select
          options={options}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          className="select"
        />
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
            Checkbox 1
          </label>{" "}
          <br />
          <label>
            <input
              type="checkbox"
              checked={checkbox2}
              onChange={handleCheckbox2Change}
            />
            Checkbox 2
          </label>
        </div>{" "}
        <br />
        <p>Brand:</p>
        <Select
          options={options}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          className="select"
        />
        <br />
        <p>price range: {range}</p>
        <div className="range">
          <div className="field">
            <div className="left">{min}</div>
            <input
              type="range"
              min={min}
              max={max}
              value={range}
              step="10000"
              onChange={handleChange}
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
