import logo from "./logo.svg";
import "./App.css";
import "../src/style/menu.css";
import "../src/style/newMovie.css";
import "../src/style/favorite.css";
import "../src/style/movie.css";
import "../src/style/userLogin.css";
import React, { Component } from "react";
import NewMovieApp from "./app/NewMovieApp";
import ListMovieApp from "./app/ListMovieApp";
import UpdateMovie from "./app/UpdateMovie";
 import FavoriteMovieApp from "./app/FavoriteMovieApp";
 import ListFavorite from "./app/ListFavoriteMovie";
 import MovieDetailApp from "./app/MovieDetailApp";
import MenuApp from "./app/menuApp";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  state = {
    loginButtonClicked: false,
  };
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={MenuApp}></Route>
        <Route exact path="/create-movie" component={NewMovieApp}></Route>
        <Route exact path="/create-movie/:id" component={UpdateMovie}></Route>
        <Route exact path="/view-movies" component={ListMovieApp}></Route>
        <Route  path="/favorites/:id" component={FavoriteMovieApp}></Route>
        <Route  path="/list-favorite" component={ListFavorite}></Route>
        <Route  path="/movie-detail/:id" component={MovieDetailApp}></Route>
      </BrowserRouter>
    );
  }
}
export default App;
