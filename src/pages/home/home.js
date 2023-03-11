import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import filter from "../../methods/filter";
import "./home.css";
import api from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const {
    productState: { product },
    productState: { cart },
    filterState,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const data = filter(product, filterState);

  const addCart = async () => {
    const body = { cart };
    const response = await api.addCart(body);

    if (response.request.status != 200) {
      toast.error(response.response.data.err.message, "error");
    }
  };

  const getCart = async () => {
    const response = await api.getCart();

    if (response.request.status != 200) {
      toast.error(response.response.data.err.message, "error");
    } else {
      if (response.data.err?.message == "user not login") {
        navigate("/register");
      } else {
        dispatch({ type: "updateCart", payload: { cart: response.data.cart } });
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      getCart();
    }
  }, []);

  useEffect(() => {
    addCart();
  }, [cart]);

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
