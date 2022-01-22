import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/dokhona";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };


  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div>
      <Navbar />
      <Products products={products}/>
    </div>
  );
};

export default App;
