import React from "react";
import Books from "../components/Books";
import axios from "axios";
class BookApp extends React.Component {
  state = {
    book: [],
    found: false,
  };
  async componentDidMount() {
    const response = await axios.get("/books/" + this.props.match.params.id);
    if (response.data) {
      console.log(response.data)
      const copyState = { ...this.state };
      copyState.book = response.data;
      copyState.found = true;
      this.setState(copyState);
    } else {
      alert("book not found");
    }
  }
  render() {
    return (
      <div class="view_cart_class">
        {this.state.found ? (
          <div>
            <h3>List of books</h3>
            <table class="table table-striped table-border table-hover table-condensed table-responsive ">
              <thead>
                <tr class="table-info">
                  <th scope="col">ISBN</th>
                  <th scope="col">Book Title</th>
                  <th scope="col">Publisher</th>
                  <th scope="col">Date Published</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <Books
                  ISBN={this.state.book.ISBN}
                  bookTitle={this.state.book.bookTitle}
                  publisher={this.state.book.publisher}
                  publishedDate={this.state.book.publishedDate}
                ></Books>
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    );
  }
}

export default BookApp;
