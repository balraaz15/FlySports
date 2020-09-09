import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import UserEntry from "./pages/user-entry/user-entry.component";
import { auth } from "./firebase/firebase-utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
    });
  });

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/entry" component={UserEntry} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
