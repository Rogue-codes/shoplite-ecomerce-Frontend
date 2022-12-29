import { AnimatePresence } from "framer-motion";
import React, { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetsearchQuery } from "../redux/ApiSlice";
import Loading from "../widgets/loadingScreen/Loading";
import Modal from "../widgets/modal/Modal";

function SearchPage() {
  const params = useParams();
  const { key } = params;

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const close = () => setShowModal(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleItemClick = (item) => {
    setSelectedItem(item);
    openModal();
  };

  const { isLoading, error, data } = useGetsearchQuery(key);

  let result;
  if (data) {
    result = data.result;
  }
  return (
    <Container>
      <h1>Search our Store {result}</h1>
      <Flex>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : data ? (
          <Fragment>
            {data.searchData.map((item, i) => (
              <Card key={item._id}>
                <>
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
                  <div className="buttonComponent">
                    <button onClick={() => handleItemClick(item)}>
                      Quick Shop
                    </button>
                  </div>
                </>
                <AnimatePresence
                  initial={false}
                  // exitBeforeEnter={true}
                  mode="wait"
                  onExitComplete={() => null}
                >
                  {showModal && (
                    <Modal handleClose={close} item={selectedItem} />
                  )}
                </AnimatePresence>
              </Card>
            ))}
          </Fragment>
        ) : null}
      </Flex>
    </Container>
  );
}

export default SearchPage;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  h1 {
    display: flex;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
    font-family: "Montserrat", sans-serif;
  }
`;

const Flex = styled.div`
  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
  }
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2%;
  position: relative;
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
  a {
    text-decoration: none;
    color: #000;
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
