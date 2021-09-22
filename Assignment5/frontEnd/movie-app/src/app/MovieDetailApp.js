import React from 'react';
import axios from 'axios';
import MovieDetail from '../Component/MovieDetail';
class MovieDetailApp extends React.Component {
    state={
        movieDetail:{}
    }
   async componentDidMount(){
    const response = await axios.get("/movies/"+this.props.match.params.id);
    let copyState = { ...this.state };
    copyState.movieDetail = response.data;
    this.setState(copyState);
    }
    render() { 
        return <div>
            <MovieDetail
              name={this.state.movieDetail.name}
              rating={this.state.movieDetail.rating}
              genre={this.state.movieDetail.genre}
              director={this.state.movieDetail.director}
              yearRelease={this.state.movieDetail.yearRelease}
              description={this.state.movieDetail.description}
            ></MovieDetail>
        </div>;
    }
}
 
export default MovieDetailApp;
