import React from "react";
import NewMovieApp from "../app/NewMovieApp";
import ListMovieApp from "../app/ListMovieApp";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
export default function Menu(props) {
  return (
    <div id="navigation_page">
      <div class="menu">
        <ul>
          <li>
            <Link className="navbarBrand" href="#">
              <b>
                <h6>Movie App</h6>
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
                    to="/create-movie"
                    onClick={props.addButtonHandler}
                  >
                    Add new movie
                  </Link>
                </li>
                <li className="navItem">
                  <Link
                    className="nav-link active"
                    ariaCurrent="page"
                    to="/view-movies"
                  >
                    View all movie
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
            <Link className="navLink active" aria-current="page" href="#">
              logout
            </Link>
          </li>

          <li className="search_menu">
            <input type="text" /> <button> Search</button>
          </li>
          <li className="favorite_movie">
            <input type="text" value={props.favCounter} />{" "}
            <button onClick={props.myFavoriteButtonHandler}>
              MyFavoriteMovie
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
