import "./cart.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "./emptyCart";
import api from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function Cart() {
  const navigate = useNavigate();
  const {
    productState: { cart },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    addCart();
  }, [cart]);

  const total = () => {
    let sum = 0;
    cart.forEach((element) => {
      sum = sum + element.price * element.qty;
    });
    return sum;
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

  const addCart = async () => {
    const body = { cart };
    const response = await api.addCart(body);

    if (response.request.status != 200) {
      toast.error(response.response.data.err.message, "error");
    } else {
      if (response.data.err?.message == "user not login") {
        navigate("/register");
      }
    }
  };

  const product = (val, id) => {
    return (
      <div className="cartItems" key={id}>
        <img src={val.image} style={{ height: "80px", width: "80px" }} />
        <div className="cartAbout">
          <h1 className="cartTitle">{val.name}</h1>
          <h3 className="cartSubtitle">₹ {val.price}</h3>
        </div>
        <div className="cartCounter">
          <div
            className="cartBtn"
            onClick={() => {
              dispatch({ type: "addToCart", payload: { val } });
            }}
          >
            +
          </div>
          <div className="cartCount">{val.qty}</div>
          <div
            className="cartBtn"
            onClick={() => {
              dispatch({ type: "decreaseQty", payload: { id } });
            }}
          >
            -
          </div>
        </div>
        <div className="cartPrices">₹ {val.price * val.qty}</div>
        <div
          className="cartRemove"
          onClick={async () => {
            await dispatch({ type: "remove", payload: { id } });
          }}
        >
          Remove
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="cart-table ">
        <div className="cart-list  ">
          {cart.length > 0 ? (
            cart.map((val, id) => product(val, id))
          ) : (
            <EmptyCart />
          )}
          <hr />
          <div className="cartCheckout">
            <div className="cartTotal">
              <div>
                <div className="cartTotalAmount">₹ {total()}</div>
                <div className="cartSubItems">{cart.length} items</div>
              </div>
              <div className="cartSubtotal">(Sub-Total)</div>
            </div>
            <button className="cartButton">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
