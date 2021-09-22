import React from "react";
import Product from "../components/Product";
import axios from "axios";
/**
 * style={{"height": "25%", "fontSize": "20px"}}
 */
class BookApp extends React.Component {
  state = {
    products: [],
    comment: {},
    update: {},
  };
  async componentDidMount() {
    const response = await axios.get("/products");
    const copyState = { ...this.state };
    copyState.products = response.data;
    console.log(response.data);
    this.setState(copyState);
  }
  async componentDidUpdate() {
    const response = await axios.get("/products");
    const copyState = { ...this.state };
    copyState.products = response.data;
    this.setState(copyState);
  }
  deleteBook = async (id) => {
    await axios.delete("/products/" + id);
  };

  updateButtonHandler = (id) => {
    this.props.history.push("/create-product/" + id);
  };
  detailButtonHandler = (id) => {
    this.props.history.push("/product-detail/" + id);
  };
  onChangeComment = (event) => {
    let copy = { ...this.state.comment };
    copy = event.target.value;
    this.setState({ comment: copy });
  };
  commentButtonHandler = async (id) => {
    const response = await axios.get("/products/" + id);
    let copy = { ...this.state.update };
    if (this.state.comment === "Excellent") {
      copy = response.data;
      copy.rating += 2;
      this.setState({ update: copy });
    } else if (this.state.comment === "Good") {
      copy = response.data;
      this.setState({ update: copy });
    } else if (this.state.comment === "Bad") {
      copy = response.data;
      copy.rating -= 1;
      console.log(copy);
      this.setState({ update: copy });
    } else {
      copy = response.data;
      this.setState({ update: copy });
    }
    await axios.put("/products/" + id, this.state.update, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  };
  render() {
    return (
      <div className=" col-md-12 container List-products">
        <h3>List of books</h3>
        <table
          className="table table-striped table-border table-hover  table-responsive justifyContent "
          style={{
            position: "relative",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "100%",
          }}
        >
          <thead className="tableMenu">
            <tr class="table-info">
              <th scope="col">Product name</th>
              <th scope="col">Price</th>
              <th scope="col" style={{ textAlign: "center" }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody >
            {this.state.products.map((elem) => {
              return (
                <Product
                  name={elem.name}
                  price={elem.price}
                  deleteBook={() => this.deleteBook(elem._id)}
                  updateButtonHandler={() => this.updateButtonHandler(elem._id)}
                  detailButtonHandler={() => this.detailButtonHandler(elem._id)}
                  commentButtonHandler={() =>
                    this.commentButtonHandler(elem._id)
                  }
                  onChangeComment={this.onChangeComment}
                ></Product>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BookApp;
