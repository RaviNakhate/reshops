import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import EmptyCart from "./component/emptyCart";
import CartList from "./component/cartList";

function Cart() {
  const {
    productState: { cart },
  } = useSelector((state) => state);

  return <>{cart.length > 0 ? <CartList /> : <EmptyCart />}</>;
}

export default Cart;
