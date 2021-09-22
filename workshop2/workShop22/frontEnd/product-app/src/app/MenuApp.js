import React from "react";
import axios from "axios";
import Menu from "../components/Menu";
import { LoginContext } from "../App";
class MenuApp extends React.Component {
  state = {
    product: {},
    productId: {},
  };
  searchBook = () => {
    this.props.history.push("/products/" + this.state.productId);
  };

  onChangeSearch = (event) => {
    const copy = { ...this.state };
    copy.productId = event.target.value;
    this.setState(copy);
  };

  logOutButtonHandler = (status) => {
    localStorage.removeItem("token");
     status.logOut()
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <LoginContext.Consumer>
          {(status) => {
            return (
              <Menu
                onChangeSearch={this.onChangeSearch}
                searchProduct={() => this.searchBook()}
                logOutButtonHandler={()=>this.logOutButtonHandler(status)}
              ></Menu>
            );
          }}
        </LoginContext.Consumer>
      </div>
    );
  }
}

export default MenuApp;
