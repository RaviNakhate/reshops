import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import filter from "../../methods/filter";
import "./home.css";

function Home() {
  const {
    productState: { product },
    filterState,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const data = filter(product, filterState);
  return (
    <>
      <section className="section">
        {data.map((val, id) => {
          return (
            <div className="content" key={id}>
              <div className="contentTop">
                <img src={val.image} className="img" />
              </div>

              <div className="contentMiddle">
                <h4>{val.name}</h4>
                <div>
                  {[...Array(val.rating)].map((val2, id2) => {
                    return (
                      <i
                        key={id2}
                        className="fa fa-star star-r"
                        aria-hidden="true"
                      ></i>
                    );
                  })}
                </div>
                <span className="freeOrNot">
                  {val.freeDelivery
                    ? "Free delivery by Reshops"
                    : "Not eligible for free delivery"}
                </span>
                <p className="price">
                  <span className="discountPrice">
                    ₹ {val.price}{" "}
                    <span className="originalPrice"> ₹ {val.originPrice} </span>
                  </span>
                </p>
              </div>
              <div className="contentBottom">
                <button
                  className={
                    val.inStock ? "addToCartButton" : "addToCartDisableButton"
                  }
                  onClick={() => {
                    dispatch({ type: "addToCart", payload: { val } });
                  }}
                >
                  <i className="fa fa-shopping-cart mr-2"></i> ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Home;
