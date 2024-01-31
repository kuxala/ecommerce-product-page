import React from 'react'
import "../App.css"


function Header(props:any) {
  const ss = {
    marginTop: "20px",
  }
    return (
        <>
        <header>
        <div className="left-side" >
          
          <img
            src="../src/Shape.svg"
            className={props.windowSize.width > 768 ? "display-none" : "none"}
            onClick={() => {
                props.setShowSideMenu(!props.showSideMenu);
            }}
          />
          <img src="../src/Sneakers.svg" className="left-second" />

          <nav className={props.windowSize.width < 768 ? "display-none" : "araferi"}>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        {/* {width > 768 ? "display-none" : "sideMenu" } */}
        <div className={props.showSideMenu ? "sideMenu" : "display-none"}>
          <div className={!props.showSideMenu ? "display-none" : "none"}>
            <img
              src="../src/x.svg"
              onClick={() => {
                props.setShowSideMenu(!props.showSideMenu);
              }}
            />
          </div>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="right-side">
          <img
            src="../src/card.svg"
            className="right-first"
            onClick={() => {
                props.setShowCard(!props.showCard);
            }}
          />

          <img
            src="../src/logo.png"
            width="24px"
            height="24px"
            className="logo"
          />
        </div>

        <div className={!props.showCard ? "display-none" : "card"}>
          <p id="card">Card</p>
          {props.showProduct ? 
          <div id="card-div">
            <img src="../src/product.png" width="50px" height="50px" />
            <p>Fall Limited Edition Sneakers</p>
            <div>
              <p>$125.00</p>x{props.count}
              <p className="total">${125 * props.count}</p>
              <img src="../src/trash.svg" onClick={() => {
                props.setShowProduct(false)
              }}/>
            </div>
          </div>
          : <p style={ss}>Card is Empty</p>}
          <button>Checkout</button>
        </div>
      </header>
        </>
    )
}
export default Header;