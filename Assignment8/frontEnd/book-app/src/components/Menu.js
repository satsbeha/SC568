import React from "react";
import { Link } from "react-router-dom";
export default function Menu(props) {
  return (
    <div id="navigation_page">
      <div className="menu">
        <ul>
          <li>
            <Link className="navbarBrand" >
              <b>
                <h6>Book App</h6>
              </b>
            </Link>
          </li>
          <li className="active">
            <Link to="/">Home</Link>
            <div className="sub-menu2">
              <ul>
                <li className="navItem">
                  <Link
                    className="navLink active"
                    ariaCurrent="page"
                    to="/create-book"
                    onClick={props.addButtonHandler}
                  >
                    Add new book
                  </Link>
                </li>
                <li className="navItem">
                  <Link
                    className="nav-link active"
                    ariaCurrent="page"
                    to="/view-books"
                  >
                    View all book
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link>About Us </Link>
          </li>
          <li>
            <Link>Contacts</Link>
            <div className="sub-menu2">
              <ul>
                <li>
                  <Link> Email</Link>
                </li>
                <li>
                  <Link> phone</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="navItem">
            <button className="btn btn-danger" aria-current="page"  onClick={props.logOutButtonHandler}>
              logout
            </button>
          </li>
          <li className="search_menu">
            <input type="text" name="bookId"  onChange={props.onChangeSearch}/> <button onClick={props.searchBook}> Search</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
