import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export const Cart = () => {
  const {
    cartItems,
    getTotalCartAmount,
    allProductData,
    setselectedCartItems,
    selectedCartItems,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  useEffect(() => {
    const getCartItems = () => {
      let result1 = [];
      result1 = allProductData.filter((product) => {
        return cartItems.some((element) => {
          return product.id === element.id;
        });
      });
      setselectedCartItems(result1);
    };
    getCartItems();
  }, []);

  return (
    <>
      {totalAmount > 0 ? (
        <Box
          sx={{
            width: "85%",
            maxHeight: "26rem",
            boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
            margin: "30px auto",
            overflowY: "scroll",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          {selectedCartItems.map((product, index) => {
            if (product.quantity !== 0) {
              return <CartItem data={product} key={product.id} />;
            }
          })}
        </Box>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginTop: "30px" }}>Your cart is empty</h1>
          <button className="checkout" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      )}

      {totalAmount > 0 ? (
        <Box
          sx={{
            width: "100%",
            height: "6rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <p>
            <b>Subtotal: £{getTotalCartAmount()}</b>
          </p>
          <button className="checkout" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </Box>
      ) : (
        " "
      )}
    </>
  );
};
