import { Component } from "react";
import axios from "axios";
class FavoriteMovieApp extends Component {
  state = {
    favorite: [],
    newFavorite:{}
  };
  async componentDidMount() {
    const response = await axios.get("/movies/" + this.props.match.params.id); 
    await axios.post("/favorites/",response.data);
    // const result=           
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default FavoriteMovieApp;
