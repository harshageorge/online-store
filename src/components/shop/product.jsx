import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";
import { CounterButton } from "../../styles/counterButton";

export const Product = (props) => {
  const { id, title, price, thumbnail } = props.data;
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    getProductQuantity,
    cartItems,
  } = useContext(ShopContext);
  const quantity = getProductQuantity(id);
  console.log(cartItems);
  return (
    <div className="product">
      <div className="image">
        <img src={thumbnail} />
      </div>
      <div className="description">
        <div className="title">
          <b>{title}</b>
        </div>
        <div className="price">${price}</div>
      </div>
      {quantity === 0 ? (
        <button
          className="addToCartBttn"
          onClick={() => increaseCartQuantity(id)}
        >
          Add To Cart
        </button>
      ) : (
        <div className="countHandler">
          <CounterButton
            className="counterButton"
            variant="contained"
            size="small"
            onClick={() => decreaseCartQuantity(id)}
          >
            -
          </CounterButton>
          <div>In Cart: {quantity} </div>
          <CounterButton
            className="counterButton"
            variant="contained"
            size="small"
            onClick={() => increaseCartQuantity(id)}
          >
            +
          </CounterButton>
        </div>
      )}
    </div>
  );
};
