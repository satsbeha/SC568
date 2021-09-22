import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Movie from "./Movie";
import NewMovie from "./NewMovie";
import RandomNumber from "./RandomNumber";
import UpdateMovie from "./UpdateMovie";
import FavoriteMovie from "./FavoriteMovie";
import MoveDetail from "./MoveDetail";

class App extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "sol",
        rating: 5,
        genre: "Action",
        directorName: "kidst",
        yearRelease: "2020-09-09",
        description:
          "nice movie.",
      },
      {
        id: 2,
        name: "Still water",
        rating: 7,
        genre: "Horror",
        directorName: "Tom McCarthy",
        yearRelease: "1992-03-09",
        description:
          "A father travels from Oklahoma to France to help his estranged daughter, who is in prison for a murder she claims she didn't commit.",
      },
      {
        id: 3,
        name: "Spider-Man ",
        rating: 10,
        genre: "Adventure",
        directorName: "Jhon Watts",
        yearRelease: "2021-03-09",
        description:
          "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super",
      },
    ],
    newMovie: {
      id: null,
      name: "",
      rating: 0,
      genre: "",
      directorName: "",
      yearRelease: "",
      description: "",
    },
    addNewMovieButtonClicked: false,
    favorite: [],
    showHideFavorite: true,
    viewMovieDetail: false,
    detailInfo: null,
    updateMovie: null,
    clickedUpdateButton: false,
  };
  displayNewMovieForms = () => {
    this.setState({
      addNewMovieButtonClicked: !this.state.addNewMovieButtonClicked,
    });
  };
  replaceOldValues = (id) => {
    let oldValueIndex = this.state.movies.findIndex((elem) => elem.id === id);
    this.state.movies.splice(oldValueIndex, 1, this.state.updateMovie);
    this.setState({ movies: this.state.movies });
    this.setState({clickedUpdateButton:false})
  };
  updateButtonClicked = (id) => {
    const updateMovie = this.state.movies.find((elem) => elem.id === id);
    this.setState({ updateMovie });
    this.setState({ clickedUpdateButton: !this.state.clickedUpdateButton });
  };
  updateMovieName = (event) => {
    const updateMovie = this.state.updateMovie;
    let copy = { ...updateMovie };
    copy.name = event.target.value;
    this.setState({ updateMovie: copy });
  };
  updateMovieRating = (event) => {
    const updateMovie = this.state.updateMovie;
    let copy = { ...updateMovie };
    copy.rating = event.target.value;
    this.setState({ updateMovie: copy });
  };
  updateMovieGenre = (event) => {
    const updateMovie = this.state.updateMovie;
    let copy = { ...updateMovie };
    copy.genre = event.target.value;
    this.setState({ updateMovie: copy });
  };
  updateMovieDirectorName = (event) => {
    const updateMovie = this.state.updateMovie;
    let copy = { ...updateMovie };
    copy.directorName = event.target.value;
    this.setState({ updateMovie: copy });
  };
  updateMovieYearRelease = (event) => {
    const updateMovie = this.state.updateMovie;
    let copy = { ...updateMovie };
    copy.yearRelease = event.target.value;
    this.setState({ updateMovie: copy });
  };
  updateMovieDescription = (event) => {
    const updateMovie = this.state.updateMovie;
    let copy = { ...updateMovie };
    copy.description = event.target.value;
    this.setState({ updateMovie: copy });
  };

  showMovieDetail = (id) => {
    const detailInfo = this.state.movies.find((elem) => elem.id === id);
    this.setState({ detailInfo });
    this.setState({ viewMovieDetail: !this.state.viewMovieDetail });
  };
  showHideMovieFavorite = () => {
    this.setState({ showHideFavorite: !this.state.showHideFavorite });
  };
  deleteFromFavoriteList = (id) => {
    const favorite = this.state.favorite.filter((elem) => elem.id !== id);
    this.setState({ favorite });
  };
  addToFavorite = (id) => {
    const favMovie = this.state.movies.find((elem) => elem.id === id);
    if (!this.state.favorite.includes(favMovie)) {
      const favorite = this.state.favorite.concat(favMovie);
      this.setState({ favorite });
    }
  };
  newMovieChangeName = (event) => {
    const newMovie = this.state.newMovie;
    newMovie.name = event.target.value;
    this.setState({ newMovie });
  };
  newMovieChangeRating = (event) => {
    const newMovie = this.state.newMovie;
    newMovie.rating = event.target.value;
    this.setState({ newMovie });
  };
  newMovieChangeGenre = (event) => {
    const newMovie = this.state.newMovie;
    newMovie.genre = event.target.value;
    this.setState({ newMovie });
  };
  newMovieChangeDirector = (event) => {
    const newMovie = this.state.newMovie;
    newMovie.directorName = event.target.value;
    this.setState({ newMovie });
  };
  newMovieChangeYearRelease = (event) => {
    const newMovie = this.state.newMovie;
    newMovie.yearRelease = event.target.value;
    this.setState({ newMovie });
  };
  newMovieChangeDescription = (event) => {
    const newMovie = this.state.newMovie;
    newMovie.description = event.target.value;
    this.setState({ newMovie });
  };
  addNewMovie = () => {
    let newInput = { ...this.state.newMovie };
    newInput.id = RandomNumber();
    const movies = this.state.movies.concat(newInput);
    this.setState({ movies });
    this.setState({addNewMovieButtonClicked:false})
  };
  deleteMovie = (id) => {
    const movies = this.state.movies.filter((elem) => elem.id !== id);
    this.setState({ movies });
  };
  changeMovieName = (id, event) => {
    let movies = this.state.movies.map((elem) => {
      if (elem.id === id) {
        let copy = { ...elem };
        copy.name = event.target.value;
        return copy;
      }
      return elem;
    });
    this.setState({ movies });
  };
  changeMovieRating = (id, event) => {
    let movies = this.state.movies.map((elem) => {
      if (elem.id === id) {
        let copy = { ...elem };
        copy.rating = event.target.value;
        return copy;
      }
      return elem;
    });
    this.setState({ movies });
  };
  changeMovieGenre = (id, event) => {
    let movies = this.state.movies.map((elem) => {
      if (elem.id === id) {
        let copy = { ...elem };
        copy.genre = event.target.value;
        return copy;
      }
      return elem;
    });
    this.setState({ movies });
  };
  render() {
    let addNewMovieForms = null;
    if (this.state.addNewMovieButtonClicked) {
      addNewMovieForms = (
        <div>
          <NewMovie
            name={this.state.newMovie.name}
            rating={this.state.newMovie.rating}
            genre={this.state.newMovie.genre}
            directorName={this.state.newMovie.directorName}
            yearRelease={this.state.newMovie.yearRelease}
            description={this.state.newMovie.description}
            nameChanged={(event) => this.newMovieChangeName(event)}
            ratingChanged={(event) => this.newMovieChangeRating(event)}
            genreChanged={(event) => this.newMovieChangeGenre(event)}
            directorNameChanged={(event) => this.newMovieChangeDirector(event)}
            yearReleaseChanged={(event) =>
              this.newMovieChangeYearRelease(event)
            }
            descriptionChanged={(event) =>
              this.newMovieChangeDescription(event)
            }
            saveMovie={this.addNewMovie}
          ></NewMovie>
        </div>
      );
    }
    let updateMovieForms = null;
    if (this.state.clickedUpdateButton) {
      updateMovieForms = (
        <div>
          <UpdateMovie
            key={this.state.updateMovie.id}
            movieName={this.state.updateMovie.name}
            movieRating={this.state.updateMovie.rating}
            movieGenre={this.state.updateMovie.genre}
            directorName={this.state.updateMovie.directorName}
            yearRelease={this.state.updateMovie.yearRelease}
            description={this.state.updateMovie.description}
            updateMovieName={(event) => this.updateMovieName(event)}
            updateMovieRating={(event) => this.updateMovieRating(event)}
            updateMovieGenre={(event) => this.updateMovieGenre(event)}
            updateMovieDirectorName={(event) =>
              this.updateMovieDirectorName(event)
            }
            updateMovieYearRelease={(event) =>
              this.updateMovieYearRelease(event)
            }
            updateMovieDescription={(event) =>
              this.updateMovieDescription(event)
            }
            replaceOldValues={() =>
              this.replaceOldValues(this.state.updateMovie.id)
            }
          ></UpdateMovie>
        </div>
      );
    }
    let favoriteMovie = (
      <div>
        <div>
          <h3>List of my favorite movies </h3>{" "}
        </div>
        {this.state.favorite.map((elem) => {
          return (
            <FavoriteMovie
              key={elem.id}
              movieName={elem.name}
              movieRating={elem.rating}
              movieGenre={elem.genre}
              deleteFromFavoriteList={() =>
                this.deleteFromFavoriteList(elem.id)
              }
            ></FavoriteMovie>
          );
        })}
      </div>
    );
    let movieDetails = null;
    if (this.state.viewMovieDetail) {
      movieDetails = (
        <div>
          <h3>Detail information for {this.state.detailInfo.name} movie</h3>
          <MoveDetail
            directorName={this.state.detailInfo.directorName}
            year={this.state.detailInfo.yearRelease}
            description={this.state.detailInfo.description}
          ></MoveDetail>
        </div>
      );
    }

    return (
      <div className="App">
        <br />
        <br />
        <button onClick={this.displayNewMovieForms}>Add New Movies</button>
        <div>
          <br />
          {addNewMovieForms}
        </div>
        <div>
          {this.state.movies.map((elem) => {
            return (
              <div>
                <Movie
                  key={elem.id}
                  movieName={elem.name}
                  movieRating={elem.rating}
                  movieGenre={elem.genre}
                  deleteMovie={() => this.deleteMovie(elem.id)}
                  // changeMovieName={(event) =>
                  //   this.changeMovieName(elem.id, event)
                  // }
                  // changeMovieRating={(event) =>
                  //   this.changeMovieRating(elem.id, event)
                  // }
                  showMovieDetail={() => this.showMovieDetail(elem.id)}
                  // changeMovieGenre={(event) =>
                  //   this.changeMovieGenre(elem.id, event)
                  // }
                  updateMovie={() => this.updateButtonClicked(elem.id)}
                  addToFavorite={() => this.addToFavorite(elem.id)}
                ></Movie>
              </div>
            );
          })}
          {movieDetails}
        </div>
        <br />
        <div>
          <br />
          <button onClick={this.showHideMovieFavorite}>
            Show/HideMovieFavorite
          </button>
        </div>

        <div>{this.state.showHideFavorite ? favoriteMovie : null}</div>
        <div>{updateMovieForms}</div>
      </div>
    );
  }
}

export default App;
