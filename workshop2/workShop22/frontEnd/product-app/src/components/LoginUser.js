
export default function LoginUser(props) {
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
                        Welcome to product buy
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
                              name="userName"
                              placeholder="user name"
                              required
                              onChange={props.changeUser}
                            />
                          </p>
                          <p>
                            <input
                              type="password"
                              id="password"
                              class="fadeIn third"
                              name="password"
                              placeholder="password"
                              required
                              onChange={props.changeUser}
                            />
                          </p>
                          <p>
                            <button className="btn btn-success"  onClick={props.loginButtonHandler}>
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
                          class="btn btn-primary"
                          onClick={props.newUserButtonHandler}
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

