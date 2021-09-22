import React from "react";
class movieDetail extends React.Component {
  render() {
    return (
      <div>
        <div className="movies">
          <div>Title: {this.props.name}</div>
          <div>Rating: {this.props.rating}</div>
          <div>Genre: {this.props.genre}</div>
          <div>Director: {this.props.director}</div>
          <div>Year Release: {this.props.yearRelease}</div>
          <div>Description: {this.props.description}</div>
        </div>
      </div>
    );
  }
}
export default movieDetail;
