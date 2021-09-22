const { Component } = require("react");

class CreateUser extends Component {
  render() {
    return (
      <div className="newMovie">
        <div className="form" style={{ marginTop: "2px", marginLeft: "0px" }}>
          <div className="bs-example">
            <div>
              <div className="form-group row">
                <label htmlFor="first_name" className="col-sm-1 col-form-label">
                  Name
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="movie name"
                    value={this.props.name}
                    name="name"
                    onChange={this.props.newMovieChange}
                    required
                  />
                  <br />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="last_name" className="col-sm-1 col-form-label">
                  Rating
                </label>
                <div className="col-sm-6">
                  <input
                    type="Number"
                    className="form-control"
                    placeholder="rating"
                    value={this.props.rating}
                    name="rating"
                    onChange={this.props.newMovieChange}
                    required
                  />
                  <br />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="user name" className="col-sm-1 col-form-label">
                  Genre
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="genre"
                    value={this.props.genre}
                    name="genre"
                    onChange={this.props.newMovieChange}
                    required
                  />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-1 col-form-label"
                >
                  director
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Director name"
                    value={this.props.director}
                    name="director"
                    onChange={this.props.newMovieChange}
                    required
                  />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-1 col-form-label"
                >
                  Year Of Release
                </label>
                <div className="col-sm-6">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Year Of Release"
                    value={this.props.yearRelease}
                    name="yearRelease"
                    onChange={this.props.newMovieChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-1 col-form-label"
                >
                  Description
                </label>
                <div className="col-sm-6">
                  <textarea
                    type="date"
                    className="form-control"
                    placeholder="movie description"
                    name="description"
                    value={this.props.description}
                    onChange={this.props.newMovieChange}
                    required
                  />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <div className="col-sm-2 offset-sm-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.props.saveMovie}
                  >
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;
