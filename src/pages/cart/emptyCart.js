import React from "react";
import Cart from "../../assets/cart.png";
import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <>
      <div className="cartEmptyContainer">
        <div className="cartEmpty">
          <img src={Cart} width="130" height="130" />
          <p className="cart-empty-text">Your Cart is Empty</p>
          <p className="cart-add-text">Add something to make me happy 😊😉🤗</p>
          <button
            className="continueShoppingButton"
            onClick={() => navigate("/")}
          >
            continue shopping
          </button>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
