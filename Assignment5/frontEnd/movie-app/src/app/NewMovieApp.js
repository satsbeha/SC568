import { Component } from "react";
import CreateMovie from "../Component/CreateMovie";
import axios from "axios";
class NewMovieApp extends Component {
  state = {
    newMovie: {
      name: "",
      rating: 0,
      genre: "",
      director: "",
      yearRelease: "",
      description: "",
    },
  };
  newMovieChange = (event) => {
    let copy = { ...this.state.newMovie };
    copy[event.target.name] = event.target.value;
    this.setState({ newMovie: copy });
  };
  saveMovie = async () => {
    let response = await axios.post("/movies", this.state.newMovie);
    if (response.data.acknowledged) {
      let copy = {
        name: "",
        rating: 0,
        genre: "",
        director: "",
        yearRelease: "",
        description: "",
      };
      this.setState({ newMovie: copy });
    }
   this.props.history.push('/view-movies')
  };
  render() {
    return (
      <div>
        <CreateMovie
          saveMovie={this.saveMovie}
          newMovieChange={(event) => this.newMovieChange(event)}
        ></CreateMovie>
      </div>
    );
  }
}

export default NewMovieApp;
