import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { Featured } from "../../utils/data";
import Modal from "../../widgets/modal/Modal";

function Features() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const close = () => setShowModal(false);

  return (
    <Container>
      <header>
        <h2>Featured collection</h2>
      </header>

      <Flex>
        {Featured.map((item, i) => (
          <>
            <Card key={i}>
              <Image>
                <img src={item.img} alt="" />
              </Image>
              <Text>
                <p>{item.name}</p>
                <Price>
                  <span className="red">₦{item.newPrice}</span>
                  <span>
                    <strike>₦{item.oldPrice}</strike>
                  </span>
                </Price>

                <Size>
                  {item.size.map((size, i) => (
                    <span className="circle" key={i}>
                      {size}
                    </span>
                  ))}
                </Size>
              </Text>
              <div className="buttonComponent">
                <button onClick={openModal}>Quick Shop</button>
              </div>
            </Card>
            <AnimatePresence
              initial={false}
              // exitBeforeEnter={true}
              mode='wait'
              onExitComplete={() => null}
            >
              {showModal && <Modal handleClose={close} item={item} />}
            </AnimatePresence>
          </>
        ))}
      </Flex>
    </Container>
  );
}

export default Features;

const Container = styled.div`
    @media (max-width: 768px) {
      padding-bottom: 15%;
    }
  width: 100%;
  min-height: 100vh;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    font-family: "Montserrat", sans-serif;
  }
`;
const Flex = styled.div`
  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
  }
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;
const Card = styled.div`
  @media (max-width: 768px) {
    width: 48%;
  }
  width: 24%;
  height: 70vh;
  position: relative;
  transition: all 0.5s linear;
  &:hover {
    .buttonComponent {
      opacity: 1;
      transition: all 0.5s linear;
    }
  }
  .buttonComponent {
    position: absolute;
    width: 100%;
    height: 70%;
    top: 0;
    left: 0;
    background: #00000053;
    transition: all 0.5s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    z-index: 99;
    button {
      width: 50%;
      height: 8vh;
      background: #000;
      cursor: pointer;
      color: #fff;
    }
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
    }
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
  }
`;
