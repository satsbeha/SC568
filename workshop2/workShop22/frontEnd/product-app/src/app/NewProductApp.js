import React from "react";
import NewProduct from "../components/NewProduct";
import axios from "axios";
class NewBookApp extends React.Component {
  state = {
    newProduct: {
      rating: 0,
    },
  };
  newProductChange = (event) => {
    const copy = { ...this.state };
    copy.newProduct[event.target.name] = event.target.value;
    this.setState(copy);
  };

  saveProduct =  (event) => {
      event.preventDefault()
    axios.post("/products", this.state.newProduct);
    this.props.history.push("/view-products");
  };

  render() {
    return (
      <div>
        <NewProduct
          newProductChange={(event) => this.newProductChange(event)}
          saveProduct={this.saveProduct}
        ></NewProduct>
      </div>
    );
  }
}

export default NewBookApp;
