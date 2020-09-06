import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import UserEntry from "./pages/user-entry/user-entry.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/entry" component={UserEntry} />
        <Route path="/" component={HomePage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
