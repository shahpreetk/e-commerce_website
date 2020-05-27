import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SigninandsignupPage from './pages/signinandsignup/signinandsignup';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninandsignupPage} />
      </Switch>
    </div>
  );
}

export default App;
