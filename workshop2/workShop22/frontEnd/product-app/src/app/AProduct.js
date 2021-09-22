import React from "react";
import Product from "../components/Product";
import axios from "axios";


class BookApp extends React.Component {
  state = {
    product: [],
    found: false,
  };
  async componentDidMount() {
    const response = await axios.get("/books/" + this.props.match.params.id);
    if (response.data) {
      console.log(response.data);
      const copyState = { ...this.state };
      copyState.product = response.data;
      copyState.found = true;
      this.setState(copyState);
    } else {
      alert("book not found");
    }
  }
  render() {
    return (
      <div className="List-products">
        {this.state.found ? (
          <div>
            <h3>List of books</h3>
            <table class="table table-striped table-border table-hover table-condensed table-responsive ">
              <thead>
                <tr class="table-info">
                  <th scope="col">Product name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <Product
                  name={this.state.product.name}
                  price={this.state.product.price}
                  deleteBook={() => this.deleteBook(this.state.product.bookId)}
                  updateButtonHandler={this.updateButtonHandler}
                ></Product>
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    );
  }
}

export default BookApp;
