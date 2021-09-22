import { Component } from "react";
import axios from "axios";
import CreateMovie from "../Component/CreateMovie";
class UpdateMovie extends Component {
  state = {
    updateMovie: {
     _id:null,
      name: "",
      rating: 0,
      genre: "",
      director: "",
      yearRelease: "",
      description: "",
    },
  };
  async componentDidMount() {
    const response = await axios.get("/movies/" + this.props.match.params.id);
    let copyState = { ...this.state };
    console.log(response.data);
    copyState.updateMovie = response.data;
    this.setState(copyState);
  }
  updateMovie = async (id) => {
    await axios.put("/movies/" + id, this.state.updateMovie);
    this.props.history.push('/view-movies')
  };
  changeUpdateDate = (event) => {
    let copyState = { ...this.state };
    copyState.updateMovie[event.target.name] = event.target.value;
    console.log(copyState)
    this.setState(copyState);
  };
  render() {
    return (
      <div>
        <CreateMovie
          name={this.state.updateMovie.name}
          rating={this.state.updateMovie.rating}
          genre={this.state.updateMovie.genre}
          director={this.state.updateMovie.director}
          yearRelease={this.state.updateMovie.yearRelease}
          description={this.state.updateMovie.description}
          saveMovie={() => this.updateMovie(this.state.updateMovie._id)}
          newMovieChange={(event) => this.changeUpdateDate(event)}
        ></CreateMovie>
      </div>
    );
  }
}

export default UpdateMovie;
