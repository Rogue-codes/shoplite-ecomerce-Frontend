import { AnimatePresence } from "framer-motion";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "../../widgets/errorScreen/Error";
import Loading from "../../widgets/loadingScreen/Loading";
import Modal from "../../widgets/modal/Modal";

function AccessoriesWrapper({ isLoading, error, data }) {
  const [openModal, setOpenModal] = useState(false);

  const open = () => setOpenModal(true);

  const close = () => {
    setOpenModal(false);
  };
  const [selectedItem, setSelectedItem] = useState({});

  const handleModalOpen = (item) => {
    open();
    setSelectedItem(item);
  };
  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : data ? (
        <>
          {data.products.map((item, i) => (
            <Fragment key={item._id}>
              <Card>
                <Image>
                  <img src={item.coverImage} alt="" />
                </Image>

                <Link to={`/products/${item._id}`}>
                  <Text>
                    <p>{item.title}</p>
                    <Price>
                      <span className="red">
                        ₦
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                      <span>
                        <strike>
                          ₦
                          {item.oldPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </strike>
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
                </Link>
                <button onClick={() => handleModalOpen(item)}>
                  Quick Shop
                </button>
              </Card>

              <AnimatePresence
                initial={false}
                // exitBeforeEnter={true}
                mode="wait"
                onExitComplete={() => null}
              >
                {openModal && <Modal handleClose={close} item={selectedItem} />}
              </AnimatePresence>
            </Fragment>
          ))}
        </>
      ) : null}
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
  a {
    text-decoration: none;
    color: black;
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
