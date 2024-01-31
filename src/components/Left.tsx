import React, {useState} from "react";

export default function Left({
  isFullScreen,
  setIsFullScreen,
  imageFullScreen,
  setImageFullScreen,
  windowSize,
}: {
  isFullScreen: any;
  setIsFullScreen: any;
  imageFullScreen: any;
  setImageFullScreen: any;
  windowSize: any;
}) {

const imageUrls = [
  "../src/product.png",
  "../src/product-2.png",
  "../src/product-3.png",
  "../src/product-4.png", 
]
const [mainImage,setMainImage] = useState("../src/product.png")


  return (
    <>
      <div className="left-col">
        {isFullScreen ? (
          <img
            src="../src/x-white.svg"
            className="x-white"
            onClick={() => {
              setIsFullScreen(!isFullScreen);
            }}
          />
        ) : null}
        {/* {isFullScreen ? (
          <div className="arrows">
            <img src="../src/left-arrow.svg" className="left-arrow" />
            <img src="../src/right-arrow.svg" className="right-arrow" />
          </div>
        ) : null} */}

        {mainImage ? 
        <img
          src={mainImage}
          width="375px"
          height="300px"
          className="product"
          onClick={() => {
            setIsFullScreen(!isFullScreen);
          }}
        />
        : null
      }
        <div
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
                  setMainImage(imageUrls)
                }}
              />
            );
          })}
          
        </div>
      </div>
    </>
  );
}
