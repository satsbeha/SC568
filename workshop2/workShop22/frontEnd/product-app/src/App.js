import logo from "./logo.svg";
import "./App.css";
import MenuApp from "./app/MenuApp";
import LoginApp from "./app/LoginApp";
import NewUserApp from "./app/NewUserApp";
import ProductApp from "./app/ProductsApp";
import NewProductApp from "./app/NewProductApp";
import AProduct from "./app/AProduct";
import updateProduct from "./app/UpdateProductApp";
import ProductDetailApp from "./app/ProductDetailApp";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React from "react";
export const LoginContext = React.createContext();
class App extends React.Component {
  login = () => {
    let copy = { ...this.state };
    copy.isLogin = true;
    this.setState(copy);
  };
  logOut = () => {
    let copy = { ...this.state };
    copy.isLogin = false;
    this.setState(copy);
  };
  state = {
    isLogin: false,
    login: this.login,
    logOut: this.logOut,
  };
  render() {
    return (
      <BrowserRouter>
        <LoginContext.Provider value={this.state}>
          {this.state.isLogin ? (
            <Route path="/" component={MenuApp}></Route>
          ) : (
            <Route exact path="/" component={LoginApp}></Route>
          )}
        </LoginContext.Provider>

        <Route exact path="/signup" component={NewUserApp}></Route>

        {this.state.isLogin ? (
          <Route exact path="/view-products" component={ProductApp}></Route>
        ) : null}
        {this.state.isLogin ? (
          <Route exact path="/view-products/:id" component={AProduct}></Route>
        ) : null}
        {this.state.isLogin ? (
          <Route exact path="/create-product" component={NewProductApp}></Route>
        ) : null}
        {this.state.isLogin ? (
          <Route
            exact
            path="/create-product/:id"
            component={updateProduct}
          ></Route>
        ) : null}
        {this.state.isLogin ? (
          <Route
            exact
            path="/product-detail/:id"
            component={ProductDetailApp}
          ></Route>
        ) : null}
      </BrowserRouter>
    );
  }
}

export default App;
