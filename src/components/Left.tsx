import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Left({
  isFullScreen,
  setIsFullScreen,
  imageFullScreen,
  setImageFullScreen,
  windowSize,
  fadeInAnimation,
}: {
  isFullScreen: any;
  setIsFullScreen: any;
  imageFullScreen: any;
  setImageFullScreen: any;
  windowSize: any;
  fadeInAnimation: any;
}) {
  const imageUrls = [
    "../src/product.png",
    "../src/product-2.png",
    "../src/product-3.png",
    "../src/product-4.png",
  ];
  const [mainImage, setMainImage] = useState("../src/product.png");

  return (
    <>
      <animated.div className="left-col" style={fadeInAnimation}>
        {isFullScreen ? (
          <img
            src="../src/x-white.svg"
            className="x-white"
            onClick={() => {
              setIsFullScreen(!isFullScreen);
            }}
          />
        ) : null}
        {isFullScreen ? (
          <animated.div className="arrows" style={fadeInAnimation}>
            <img
              src="../src/left-arrow.svg"
              className="left-arrow"
              onClick={() => {
                if (imageUrls.indexOf(mainImage) === 0) {
                  setMainImage(imageUrls[0]);
                  return;
                }
                setMainImage(imageUrls[imageUrls.indexOf(mainImage) - 1]);
              }}
            />
            <img
              src="../src/right-arrow.svg"
              className="right-arrow"
              onClick={() => {
                if (imageUrls.indexOf(mainImage) === imageUrls.length - 1) {
                  setMainImage(imageUrls[imageUrls.length-1]);
                  return;
                }
                setMainImage(imageUrls[imageUrls.indexOf(mainImage) + 1]);
              }}
            />
          </animated.div>
        ) : null}

        {mainImage ? (
          <img
            src={mainImage}
            style={fadeInAnimation}
            width="375px"
            height="300px"
            className="product"
            onClick={() => {
              setIsFullScreen(!isFullScreen);
            }}
          />
        ) : null}
        <animated.div
          style={fadeInAnimation}
          className={windowSize.width < 768 ? "display-none" : "small-products"}
        >
          {imageUrls.map((imageUrls, index) => {
            return (
              <img
                key={index}
                src={imageUrls}
                width="88px"
                height="88px"
                onClick={() => {
                  setMainImage(imageUrls);
                }}
              />
            );
          })}
        </animated.div>
      </animated.div>
    </>
  );
}
