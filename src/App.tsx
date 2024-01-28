import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [count, setCount] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [imageFullScreen, setImageFullScreen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  
  const styles = {
    position: "absolute",
    top: "10%",
    left: "0",
    width: "750px",
    height: "750px",
    marginLeft: "auto",
    marginRight: "auto",
    right: "0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
  };
  const nothing = {};

  const MyComponent = () => {
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  };
  MyComponent();

  const page = (
    <div className="wrapper">
      <Header
        windowSize={windowSize}
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
        showCard={showCard}
        setShowCard={setShowCard}
        count={count}
      />

      <main>
        <div className="left-col">
          {/* <div className="arrows">
          <img src="../src/left-arrow.svg" className="left-arrow" />
          <img src="../src/right-arrow.svg" className="right-arrow" />
        </div> */}
          <img
            src="../src/product.png"
            width="375px"
            height="300px"
            style={isFullScreen ? styles : nothing}
            className="product"
            onClick={() => {
              setIsFullScreen(!isFullScreen);
            }}
          />
          <div
            className={
              windowSize.width < 768 ? "display-none" : "small-products"
            }
          >
            <img
              src="../src/product.png"
              width="88px"
              height="88px"
              style={imageFullScreen ? styles : nothing}
              onClick={() => {
                setImageFullScreen(!imageFullScreen);
              }}
            />
            <img
              src="../src/product-2.png"
              width="88px"
              height="88px"
              style={imageFullScreen ? styles : nothing}
              onClick={() => {
                setImageFullScreen(!imageFullScreen);
              }}
            />
            <img
              src="../src/product-3.png"
              width="88px"
              height="88px"
              style={imageFullScreen ? styles : nothing}
              onClick={() => {
                setImageFullScreen(!imageFullScreen);
              }}
            />
            <img
              src="../src/product-4.png"
              width="88px"
              height="88px"
              style={imageFullScreen ? styles : nothing}
              onClick={() => {
                setImageFullScreen(!imageFullScreen);
              }}
            />
          </div>
        </div>

        <div className="right-col">
          <div className="product-text">
            <p className="first-p">Sneaker Company</p>
            <h1 className="product-name">Fall Limited Edition Sneakers</h1>
            <p className="product-description">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="product-price">
            <div>
              <h1>$125.00</h1>
              <p className="percent">50%</p>
            </div>
            <del>
              <p>$250.00</p>
            </del>
          </div>

          <div className="box-btn">
            <div className="box">
              <img
                src="../src/minus.svg"
                className="minus"
                onClick={() => {
                  setCount(count - 1);
                }}
              />
              <p>{count}</p>
              <img
                src="../src/plus.svg"
                className="plus"
                onClick={() => {
                  setCount(count + 1);
                }}
              />
            </div>

            <button>
              <img src="../src/whiteShape.svg" />
              Add to card
            </button>
          </div>
        </div>
      </main>
    </div>
  );

  return page;
}

export default App;
