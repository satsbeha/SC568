import React from "react";
import  { Component } from 'react';
 class  Movie extends Component  {
  render(){
    return (
      <div>
        <div className="movies">
          <div>Title: {this.props.name}</div>
          <div>Rating: {this.props.rating}</div>
          <div>Genre: {this.props.genre}</div>
          <button onClick={this.props.showMovieDetailed}>Movie details</button>
          <button onClick={this.props.deleteMovie}>Delete</button>
          <button onClick={this.props.updateButtonHandler}>update</button>
          <button onClick={this.props.addToFavorite}>Add To favorite</button>
        </div>
      </div>
    );
  }
  
}
export default Movie

