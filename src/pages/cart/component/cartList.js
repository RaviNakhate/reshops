import React from "react";
import { useSelector, useDispatch } from "react-redux";

function CartList() {
  const {
    productState: { cart },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const total = () => {
    let sum = 0;
    cart.forEach((element) => {
      sum = sum + element.price * element.qty;
    });
    return sum;
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
          onClick={() => {
            dispatch({ type: "remove", payload: { id } });
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
          {cart.map((val, id) => product(val, id))}
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

export default CartList;
