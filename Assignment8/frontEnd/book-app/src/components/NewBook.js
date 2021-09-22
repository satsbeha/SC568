const { Component } = require("react");

class NewBook extends Component {
  render() {
    return (
      <div className="newBook">
        <div className="form" style={{ marginTop: "2px", marginLeft: "0px" }}>
          <div className="bs-example">
            <div>
              <div className="form-group row">
                <label htmlFor="first_name" className="col-sm-1 col-form-label">
                  ISBN
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ISBN"
                    value={this.props.ISBN}
                    name="ISBN"
                    onChange={this.props.newBookChange}
                    required
                  />
                  <br />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="last_name" className="col-sm-1 col-form-label">
                  Book Title
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="bookTitle"
                    value={this.props.bookTitle}
                    name="bookTitle"
                    onChange={this.props.newBookChange}
                    required
                  />
                  <br />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="user name" className="col-sm-1 col-form-label">
                Over DueFee
                </label>
                <div className="col-sm-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="overDueFee"
                    value={this.props.overDueFee}
                    name="overDueFee"
                    onChange={this.props.newBookChange}
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
                  Author Name
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Author Name"
                    value={this.props.publisher}
                    name="publisher"
                    onChange={this.props.newBookChange}
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
                  Publish Date
                </label>
                <div className="col-sm-6">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Year Of Release"
                    value={this.props.publishedDate}
                    name="publishedDate"
                    onChange={this.props.newBookChange}
                    required
                  />
                </div>
              </div>
             <br/>
              <div className="form-group row">
                <div className="col-sm-2 offset-sm-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.props.saveBook}
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

export default NewBook;
