const { Component } = require("react");

class NewBook extends Component {
  render() {
    return (
      <div className="newProduct">
        <div className="form" style={{ marginTop: "2px", marginLeft: "0px" }}>
          <div className="bs-example">
            <form onSubmit={(event)=>this.props.saveProduct(event)}>
              <div className="form-group row">
                <label htmlFor="last_name" className="col-sm-1 col-form-label">
                  Product name
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product name"
                    value={this.props.name}
                    name="name"
                    onChange={this.props.newProductChange}
                    required
                  />
                  <br />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="user name" className="col-sm-1 col-form-label">
                price
                </label>
                <div className="col-sm-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="price"
                    value={this.props.price}
                    name="price"
                    onChange={this.props.newProductChange}
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
                  Model
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Model"
                    value={this.props.model}
                    name="model"
                    onChange={this.props.newProductChange}
                    required
                  />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label
                  htmlFor="Rating"
                  className="col-sm-1 col-form-label"
                >
                  Manufacturer
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="manufacturer"
                    value={this.props.manufacturer}
                    name="manufacturer"
                    onChange={this.props.newProductChange}
                    required
                  />
                </div>
              </div>
              <br/>
              <div className="form-group row">
                <label
                  htmlFor="Rating"
                  className="col-sm-1 col-form-label"
                >
                  Description
                </label>
                <div className="col-sm-6">
                  <input
                    type="textarea"
                    className="form-control"
                    placeholder="Description"
                    value={this.props.description}
                    name="description"
                    onChange={this.props.newProductChange}
                    required
                  />
                </div>
              </div>
             <br/>
              <div className="form-group row">
                <div className="col-sm-2 offset-sm-2">
                  <button
                    className="btn btn-primary"
                    
                  >
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewBook;
