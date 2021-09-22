import React, { Component } from 'react';

export default class UserLogin extends Component{
    componentWillUnmount(){
     this.setState({loginButtonClicked:!this.props.loginButtonClicked})
    }
    render(){
        return (
            <div>
              <div class="login_style">
                <div class="login_form" id="login_form_id">
                  <div class="wrapper fadeInDown">
                    <div id="formContent">
                      <h1
                        style={{
                          color: "blue",
                          "text-align": "center",
                          "font-style": "italic",
                        }}
                      >
                        Movie
                      </h1>
                      <div className="fadeIn first">
                        <img src="./image/key.jpeg" id="icon" alt="User Icon" />
                      </div>
                      <div >
                        <div className="form_login">
                          <p>
                            <input
                              type="text"
                              id="user_name"
                              class="fadeIn second"
                              name="user_name"
                              placeholder="user name"
                              required
                            />
                          </p>
                          <p>
                            <input
                              type="password"
                              id="password"
                              class="fadeIn third"
                              name="login"
                              placeholder="password"
                              required
                            />
                          </p>
                          <p>
                            <button className="btn btn-success" id="login" onClick={this.props.loginButtonHandler}>
                              Log in
                            </button>
                          </p>
                          <div className="eror_display" id="error_div">
                            <p></p>
                          </div>
                        </div>
                      </div>
                      <div id="formFooter">
                        <button
                          type="button"
                          class="btn btn-primary"
                          id="create_new_account"
                        >
                          Create new account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}
