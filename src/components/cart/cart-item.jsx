import React, { useContext, useEffect } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";
import { CounterButton } from "../../styles/counterButton";

export const CartItem = (props) => {
  const { id, title, price, thumbnail } = props.data;
  const {
    increaseCartQuantity,
    cartItems,
    decreaseCartQuantity,
    getProductQuantity,
  } = useContext(ShopContext);
  const quantity = getProductQuantity(id);
  return (
    <div className="items-info">
      <img src={thumbnail} />
      <div className="productTitle">
        <b>{title}</b>
      </div>
      <div className="price">£{price}</div>
      <div className="description">
        <div className="countHandler">
          <CounterButton
            className="counterButton"
            variant="contained"
            size="small"
            onClick={() => {
              decreaseCartQuantity(id);
            }}
          >
            -
          </CounterButton>
          <div>In Cart: {quantity}</div>
          <CounterButton
            className="counterButton"
            variant="contained"
            size="small"
            onClick={() => increaseCartQuantity(id)}
          >
            +
          </CounterButton>
        </div>
      </div>
    </div>
  );
};
