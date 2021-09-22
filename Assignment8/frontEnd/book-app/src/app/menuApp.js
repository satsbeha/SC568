import React from "react";
import axios from "axios";
import Menu from "../components/Menu";
class MenuApp extends React.Component {
  state = {
    book: {},
    bookId:{}
  };
  searchBook = () => {
    this.props.history.push("/books/" + this.state.bookId);
  };
  onChangeSearch = (event) => {
    const copy = { ...this.state };
    copy.bookId = event.target.value;
    this.setState(copy);
  };
  logOutButtonHandler = () => {
    sessionStorage.removeItem("token");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Menu
          onChangeSearch={this.onChangeSearch}
          searchBook={() => this.searchBook()}
          logOutButtonHandler={this.logOutButtonHandler}
        ></Menu>
      </div>
    );
  }
}

export default MenuApp;
