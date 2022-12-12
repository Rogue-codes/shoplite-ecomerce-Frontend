import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Filter() {
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
    <Container>
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
    </Container>
  );
}

export default Filter;
const Container = styled.aside`
@media (max-width: 768px) {
    display: none;
}
  width: 25%;
  padding: 1%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  /* border: 3px solid #000; */
  p {
    padding-bottom: 5%;
  }
  .price {
    margin: 0 auto;

    label {
      display: flex;
      gap: 2%;
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
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
