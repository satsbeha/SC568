import axios from "axios";
import React from "react";
import LoginUser from "../components/LoginUser";
import { LoginContext } from "../App";
class UserApp extends React.Component {
  state = {
    user: {},
  };

  loginButtonHandler = async (status) => {
    let response = await axios.post("/login", this.state.user);
    if (response.data.jwtToken) {
      localStorage.setItem("token", response.data.jwtToken);
      status.login()
      this.props.history.push("/");
    } else {
      alert("Try again");
    }
  };
  newUserButtonHandler = () => {
    this.props.history.push("/signup");
  };
  changeUser = (event) => {
    const copyState = { ...this.state.user };
    copyState[event.target.name] = event.target.value;
    this.setState({ user: copyState });
  };
  render() {
    return (
      <div>
        <LoginContext.Consumer>
          {(status) => {
            return (
              <div>
                <LoginUser
                  loginButtonHandler={()=>this.loginButtonHandler(status)}
                  newUserButtonHandler={this.newUserButtonHandler}
                  changeUser={(event) => this.changeUser(event)}
                ></LoginUser>
              </div>
            );
          }}
        </LoginContext.Consumer>
      </div>
    );
  }
}

export default UserApp;
