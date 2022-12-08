import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import AddToCartButton from "../../widgets/buttons/AddToCartButton";
function FeaturedCollection() {
  const product = [
    {
      name: "AD Lightweight Lemon Running Sneakers",
      newPrice: 42118.0,
      oldPrice: 46798.8,
      size: [42, 43, 44, 45],
      images: [
        "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/nn_0009_img_6950_1080x.jpg?v=1658979524",
        "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/nn_0011_img_6947_1080x.jpg?v=1658979525",
        "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/nn_0012_img_6946_1080x.jpg?v=1658979525",
        "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/nn_0010_img_6948_1080x.jpg?v=1658979524",
      ],
    },
  ];
  //   image slider
  const [activeIndex, setActiveIndex] = useState(0);

  //   decrease activeIndex to navigate between images in the left direction
  const prevImage = (images) => {
    // create a constant to hold activeIndex
    const currentIndex = activeIndex === 0;
    // create a constant (newIndex), check if newIndex = currentIndex(0),
    // if newIndex = currentIndex(0), move to the last index in the array
    // else if the newIndex > currentIndex(0),
    // subtract 1 from activeIndex.
    let newIndex = currentIndex ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  //   increase activeIndex to navigate between images in right direction
  const nextImage = (images) => {
    // create a constant to hold activeIndex and
    // set it's value to be = Array.length - 1 (last index in the array)
    const currentIndex = activeIndex === images.length - 1;
    // if we're on the last index of our array i.e images.length - 1,
    // set active index to the index of the first element in the array i.e 0
    // else increase the array index by 1
    let newIndex = currentIndex ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  // select activeIndex
  const selectActive = (i) => {
    setActiveIndex(i);
  };

  //   size
  const [activeSize, setActiveSize] = useState(0);
  //   selectSize
  const selectSize = (i) => setActiveSize(i);
  const [count, setCount] = useState(1);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => count > 1 && setCount(count - 1);
  return (
    <>
      <h2 className="featured-product">Featured Product</h2>
      {product.map((item, i) => (
        <Container key={i}>
          <div className="left">
            <div className="active-image">
              <img src={item.images[activeIndex]} alt="" />
              <AiOutlineRight
                className="icon-right"
                onClick={() => nextImage(item.images)}
              />
              <AiOutlineLeft
                className="icon-left"
                onClick={() => prevImage(item.images)}
              />
            </div>
            <div className="image-array">
              {item.images.map((img, i) => (
                <div
                  className={
                    activeIndex === i ? "image-box active" : "image-box"
                  }
                  onClick={() => selectActive(i)}
                  key={i}
                >
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <p>{item.name}</p>
            <div className="price">
              <span className="red">₦{item.newPrice}</span>
              <span>₦{item.oldPrice}</span>
            </div>
            <span className="ship">
              <a href="#">Shipping</a> calculated at checkout.
            </span>
            <div className="size">
              <p>Size: {item.size[activeSize]}</p>
              <div className="flex">
                {item.size.map((size, i) => (
                  <div
                    className={activeSize === i ? "box active" : "box"}
                    onClick={() => selectSize(i)}
                    key={i}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="quantity">
              <p>Quantity:</p>
              <div className="add-container">
                <button onClick={decreaseCount}>-</button>
                <p>{count}</p>
                <button onClick={increaseCount}>+</button>
              </div>
            </div>
            <br />
            <AddToCartButton />
            <div className="other-details">
              <ul>
                <li>Exquisite and Durable. </li>
                <li>Comfy Sneakers</li>
                <li>Classy and Trendy</li>
                <li>Nationwide Delivery</li>
              </ul>
            </div>
          </div>
        </Container>
      ))}
    </>
  );
}

export default FeaturedCollection;

const Container = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 2%;
  .left {
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 50%;
    height: 80%;
    display: flex;
    gap: 2%;
    .active-image {
      width: 78%;
      height: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .icon-right {
        position: absolute;
        top: 50%;
        right: 5%;
        font-size: 2rem;
        cursor: pointer;
      }
      .icon-left {
        position: absolute;
        top: 50%;
        left: 5%;
        font-size: 2rem;
        cursor: pointer;
      }
    }
    .image-array {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 2%;
      .image-box {
        @media (max-width: 768px) {
          height: 15vh;
          margin-top: 2%;
        }
        width: 100%;
        height: 18vh;
        &:hover {
          box-shadow: rgba(255, 255, 255, 0.838) 0px 0px 0px 1px inset,
            rgba(232, 230, 230, 0.9) 0px 0px 0px 1px;
        }
        img {
          @media (max-width: 768px) {
            object-fit: contain;
          }
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .active {
        box-shadow: rgba(255, 255, 255, 0.838) 0px 0px 0px 1px inset,
          rgba(232, 230, 230, 0.9) 0px 0px 0px 1px;
      }
    }
  }
  .right {
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 45%;
    height: 100%;
    font-family: "Poppins", sans-serif;
    padding: 0% 2%;
    p {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      font-size: 1.3vw;
      font-weight: 700;
      margin-bottom: 2%;
    }
    .price {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 2%;
      gap: 2%;
      .red {
        color: red;
      }
    }
    .ship {
      a {
        font-family: "Poppins", sans-serif;
        color: #000;
      }
    }
    .size {
      width: 100%;
      margin-top: 15%;
      p {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        font-size: 1vw;
      }
      .flex {
        display: flex;
        justify-content: flex-start;
        gap: 2%;
        .box {
          @media (max-width: 768px) {
            font-size: 0.7rem;
          }
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          font-size: 1vw;
          align-items: center;
          cursor: pointer;
          box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
            rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
          transition: all 0.2s linear;
          &:hover {
            background: #000;
            color: #fff;
          }
        }
        .active {
          background: #000;
          color: #fff;
        }
      }
    }
    .quantity {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      gap: 5%;
      margin-top: 15%;
      align-items: center;
      p {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        font-size: 1vw;
      }
    }
    .add-container {
      width: 40%;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
      height: 8vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      p {
        @media (max-width: 768px) {
          font-size: 0.7rem;
        }
        font-size: 1vw;
      }
      button {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        width: 20%;
        border: none;
        background: transparent;
        font-size: 1.5vw;
        cursor: pointer;
      }
    }
    .other-details {
      width: 100%;
      height: auto;
      margin-top: 5%;
      border-top: 0.5px solid grey;
      border-bottom: 0.5px solid grey;
      padding: 2%;
      ul {
        li {
          @media (max-width: 768px) {
            font-size: .7rem;
          }
          margin-top: 2%;
          display: block;
          font-size: 1vw;
        }
      }
    }
  }
`;
