import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const JerseyPage = (props) => {
  console.log(props);
  return <h1>Jerseys page</h1>;
};

function App() {
  return (
    <div className="App">
      <h1>Sports Shop</h1>
      <Switch>
        <Route path="/jerseys" component={JerseyPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
