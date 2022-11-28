import "./ContentArea.css";
import SideBar from "../commons/SideBar";
import Main from "./Main";
import Basket from "../payments/Cart";
// import data from "../data";
import React, { useState, useEffect } from "react";

export default function ContentArea() {
  // const { products } = data;

  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://pos1demo.cyclic.app/api/v1/products").then((result) => {
      result
        .json()
        .then((res) => {
          setproducts(res.products);
        })
        .catch((err) => console.log(err));
    });
  }, []);
  // console.log(products);


  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="contentArea">
      {/* <SideBar /> */}

      {/* <Header countCartItems={cartItems.length}></Header> */}
      <Main products={products} onAdd={onAdd} className="main" />

      <Basket
        className="basket"
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </div>
  );
}
