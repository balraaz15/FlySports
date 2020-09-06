import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div className="App">
      <h1>Sports Shop</h1>
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
