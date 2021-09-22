import React from "react";
import axios from "axios";
import Movie from '../Component/Movie';

class ListMovieApp extends React.Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    const response = await axios.get("/movies");
    let copyState = { ...this.state };
    copyState.movies = response.data;
    this.setState(copyState);
  }
  async componentDidUpdate(){
    const response = await axios.get("/movies");
    let copyState = { ...this.state };
    copyState.movies = response.data;
    this.setState(copyState);
  }
  deleteMovie = async (id) => {
    let response = await axios.delete("/movies/" + id);
    console.log(response);
  };
  updateButtonHandler = async (id) => {
    this.props.history.push('/create-movie/'+id)
  };
  updateMovie = async (id) => {
    await axios.put("/movies/" + id, this.state.updateMovieData);
    this.setState({ updateButtonClicked: false });
  };
  addToFavorite = async (id) => {
    this.props.history.push('/favorites/'+id)
  };
  showMovieDetailed=(id)=>{
    this.props.history.push('/movie-detail/'+id)
  }
  render() {
    return (
      <React.Fragment>
        {this.state.movies.map((elem) => {
          return (
            <div>
              <Movie
                key={elem._id}
                name={elem.name}
                rating={elem.rating}
                genre={elem.genre}
                deleteMovie={() => this.deleteMovie(elem._id)}
                updateButtonHandler={() => this.updateButtonHandler(elem._id)}
                saveMovie={this.updateMovie}
                addToFavorite={() => this.addToFavorite(elem._id)}
                showMovieDetailed={()=>this.showMovieDetailed(elem._id)}
              ></Movie>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default  ListMovieApp;
