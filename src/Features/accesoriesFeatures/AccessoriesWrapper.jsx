import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { accesories } from "../../utils/data";
import Modal from "../../widgets/modal/Modal";

function AccessoriesWrapper() {
  const [openModal, setOpenModal] = useState(false);

  const open = () => setOpenModal(true);

  const close = () => {
    setOpenModal(false);
  };
  return (
    <Container>
      {accesories.map((shirt, i) => (
        <>
          <Card>
            <Image>
              <img src={shirt.img} alt="" />
            </Image>
            <Text>
              <p>{shirt.name}</p>
              <Price>
                <span className="red">₦{shirt.newPrice}</span>
                <span>
                  <strike>₦{shirt.oldPrice}</strike>
                </span>
              </Price>

              <Size>
                {shirt.size.map((size, i) => (
                  <span className="circle" key={i}>
                    {size}
                  </span>
                ))}
              </Size>
            </Text>
            <button onClick={open}>Quick Shop</button>
          </Card>

          <AnimatePresence
            initial={false}
            // exitBeforeEnter={true}
            mode="wait"
            onExitComplete={() => null}
          >
            {openModal && <Modal handleClose={close} item={shirt} />}
          </AnimatePresence>
        </>
      ))}
    </Container>
  );
}

export default AccessoriesWrapper;
const Container = styled.section`
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
  width: 75%;
  min-height: 100vh;
  margin-left: 25%;
  display: flex;
  justify-content: space-between;
  padding: 2%;
  flex-wrap: wrap;
`;
const Card = styled.div`
  @media (max-width: 768px) {
    width: 48%;
  }
  width: 33%;
  height: 60vh;
  margin-top: 5%;
  position: relative;
  transition: all 0.5s linear;
  padding-bottom: 5%;
  &:hover {
    button {
      visibility: visible;
      transition: all 0.5s linear;
    }
  }
  button {
    visibility: hidden;
    width: 50%;
    position: absolute;
    top: 40%;
    left: 25%;
    height: 8vh;
    background: #000;
    cursor: pointer;
    color: #fff;
  }
`;
const Image = styled.div`
  width: 100%;
  height: 70%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Text = styled.div`
  width: 100%;
  height: 30%;
  p {
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
    font-size: 1vw;
    text-align: center;
    font-family: "Poppins", sans-serif;
  }
`;
const Price = styled.div`
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  .red {
    color: red;
  }
  font-size: 1.2vw;
`;
const Size = styled.div`
  width: 100%;
  margin-top: 2%;
  height: 5vh;
  display: flex;
  justify-content: center;
  gap: 5%;
  .circle {
    @media (max-width: 768px) {
      font-size: 0.7rem;
      width: 30px;
      height: 30px;
    }
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
  }
`;
