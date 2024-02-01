import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from 'react-spring';

import "./App.css";
import Header from "./components/Header";
import Left from "./components/Left";
function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [count, setCount] = useState(1);
  const [showCard, setShowCard] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [imageFullScreen, setImageFullScreen] = useState(false);
  const[showProduct, setShowProduct] = useState(false)

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,  
  });

  const fadeInAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })

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
    <animated.div className="wrapper" style={fadeInAnimation}>
      <Header
        windowSize={windowSize}
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
        showCard={showCard}
        setShowCard={setShowCard}
        count={count}
        showProduct={showProduct}
        setShowProduct={setShowProduct}
      />

      <main>

        <Left
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
          imageFullScreen={imageFullScreen}
          setImageFullScreen={setImageFullScreen}
          windowSize={windowSize}
          fadeInAnimation={fadeInAnimation}
        />
        
        {isFullScreen ? (
          <>
            <div className="slider-wrapper">
              <Left
                isFullScreen={isFullScreen}
                setIsFullScreen={setIsFullScreen}
                imageFullScreen={imageFullScreen}
                setImageFullScreen={setImageFullScreen}
                windowSize={windowSize}
                fadeInAnimation={fadeInAnimation}
              />
            </div>
            <div className="background-col" onClick={() => {
              //  setIsFullScreen(!isFullScreen)
            }}>
              
            </div>
          </>
        ) : null}

        <div className="right-col" >
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

            <button onClick={()=>{
              // setShowCard(!showCard)
              setShowProduct(true)  
            }}>
              <img src="../src/whiteShape.svg" />
              Add to card
            </button>
          </div>
        </div>
      </main>
    </animated.div>
  );

  return page;
}

export default App;