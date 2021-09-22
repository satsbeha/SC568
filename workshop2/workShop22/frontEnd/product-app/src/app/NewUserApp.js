import axios from "axios";
import React from "react";
import SignUp from "../components/SignUp";
const initialValue = {
  firstName: "",
  lastName: "",
  role: "Member",
  userName: "",
  password: "",
  fNameError: "",
  lNameError: "",
  uNameError: "",
  passwordError: "",
};
class NewUserApp extends React.Component {
  state = {
    newUser: initialValue,
  };
  changeUserInput = (event) => {
    let copy = { ...this.state };
    copy.newUser[event.target.name] = event.target.value;
  };
  validate = () => {
    let uNameError = "";
    let passwordError="";
    if (!this.state.newUser.userName.includes("@")) {
      uNameError = "invalid user name example@gmail.com ";
    }
    if (uNameError) {
      let copy = { ...this.state.newUser };
      copy.uNameError = uNameError;
      this.setState({ newUser: copy });
      return false;
    }
    if(this.state.newUser.password.length<=4){
        passwordError="password is  to short"
    }
    if(passwordError){
        let copy = { ...this.state.newUser };
      copy.passwordError = passwordError;
      this.setState({ newUser: copy });
      return false;
    }
    return true;
  };
  signUpButtonHandler = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      axios.post("/users", this.state.newUser);
      this.props.history.push("/");
      this.setState({newUser:initialValue})
    }
  };
  render() {
    return (
      <div>
        <SignUp
          uNameError={this.state.newUser.uNameError}
          passwordError={this.state.newUser.passwordError}
          changeUserInput={(event) => this.changeUserInput(event)}
          signUpButtonHandler={this.signUpButtonHandler}
        ></SignUp>
      </div>
    );
  }
}

export default NewUserApp;
