import axios from "axios";
import React from "react";
import ProductDetail from "../components/ProductDetail";
import Review from "../components/Review";
import CreateReview from "../components/CreateReview";
class ProductDetailApp extends React.Component {
  state = {
    productDetail: {
        reviews:[]
    },
    review: {
        title:"None",
        comment:""
    },
    
  };
  async componentDidMount() {
    const response = await axios.get(
      "/products/" + this.props.match.params.id );
    const copy = { ...this.state };
    copy.productDetail = response.data;
    this.setState(copy);
  }
  async componentDidUpdate() {
    const response = await axios.get(
      "/products/" + this.props.match.params.id);
    const copy = { ...this.state };
    copy.productDetail = response.data;
    this.setState(copy);
  }
  onChangeInput = (event) => {
    const copy = { ...this.state.review };
    copy[event.target.name] = event.target.value;
    this.setState({ review: copy });
  };
  submitButtonHandler = async (event) => {
    event.preventDefault()
    const response = await axios.get("/products/" + this.props.match.params.id);
    response.data.reviews.push(this.state.review);
    if (this.state.review.title === "Excellent") {
      let copy = response.data;
      copy.rating += 2;
      this.setState({ productDetail: copy });
    } else if (this.state.review.title === "Good") {
      let copy = response.data;
      this.setState({ productDetail: copy });
    } else if (this.state.review.title === "Bad") {
      let copy = response.data;
      copy.rating -= 1;
      this.setState({ productDetail: copy });
    } else {
      let copy = response.data;
      this.setState({ productDetail: copy });
    }
    await axios.put(
      "/products/" + this.props.match.params.id + "/review",
      this.state.productDetail
    );
    let copyReview={...this.state.review}
    copyReview.title="None"
    copyReview.comment=""
    this.setState({review:copyReview})
  };
  render() {
    return (
      <div>
        <ProductDetail
          name={this.state.productDetail.name}
          price={this.state.productDetail.price}
          rating={this.state.productDetail.rating}
          model={this.state.productDetail.model}
          manufacturer={this.state.productDetail.manufacturer}
          description={this.state.productDetail.description}
        ></ProductDetail>
        <h1 className="detail">Reviews</h1>
        {this.state.productDetail.reviews.map((elem) => {
            console.log(elem)
          return (
            <Review
              title={elem.title}
              comment={elem.comment}
            ></Review>
          );
        })}
        <CreateReview
         onChangeInput={(event) => this.onChangeInput(event)}
         submitButtonHandler={(event)=>this.submitButtonHandler(event)}></CreateReview>
      </div>
    );
  }
}

export default ProductDetailApp;
