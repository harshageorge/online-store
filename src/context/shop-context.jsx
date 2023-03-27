import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          console.log(res);
          if (res.data.products.length > 0) {
            setAllProductData(res.data.products);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchPosts();
  }, []);
  const [search, setSearch] = useState("");
  const [allProductData, setAllProductData] = useState([]);
  const [selectedCartItems, setselectedCartItems] = useState([]);

  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("MyCartItems"));
  });

  useEffect(() => {
    localStorage.setItem("MyCartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // const deleteFromCart = (id) => {
  //   setCartItems((products) =>
  //     products.filter((product) => {
  //       return product.id !== id;
  //     })
  //   );
  // };
  const deleteSelectedCartItems = (id) => {
    setselectedCartItems((products) =>
      products.filter((product) => {
        return product.id !== id;
      })
    );
  };
  const getProductQuantity = (id) => {
    return cartItems.find((product) => product.id === id)?.quantity || 0; // eslint-disable-line
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        deleteSelectedCartItems(id);
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartItems.forEach(item => { // eslint-disable-line
      let itemInfo = allProductData.find((product) => product.id === item.id);
        totalAmount += item.quantity * itemInfo.price;
    });
    // cartItems.map((item) => {
    //   let itemInfo = allProductData.find((product) => product.id === item.id);
    //   totalAmount += item.quantity * itemInfo.price;
    // });
    return totalAmount;
  };
  const getTotalCartItem = () => {
    let totalItem = 0;
    cartItems.forEach(item=>{ // eslint-disable-line
      totalItem = item.quantity + totalItem;
    });
    // cartItems.map((item) => {
    //   totalItem = item.quantity + totalItem;
    // });
    // console.log(totalItem);
    return totalItem;
  };
  const contextValue = {
    cartItems,
    selectedCartItems,
    setselectedCartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    getProductQuantity,
    getTotalCartAmount,
    getTotalCartItem,
    search,
    setSearch,
    allProductData,
    setAllProductData,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
