import React from "react";

export default function Movie(props) {
  return (
    <div>
      <div>
        <div>Title: {props.movieName}</div>
        <div>Rating: {props.movieRating}</div>
        <div>Genre: {props.movieGenre}</div>
        <button onClick={props.showMovieDetail}>Movie details</button>
        <button onClick={props.deleteMovie}>Delete</button>
        <button onClick={props.updateMovie}>update</button>
        <button onClick={props.addToFavorite}>Add To favorite</button>
      </div>
    </div>
  );
}

// React.createElement('div',{},'Hello')
