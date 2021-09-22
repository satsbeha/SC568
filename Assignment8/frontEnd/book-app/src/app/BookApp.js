import React from "react";
import Books from '../components/Books'
import axios from 'axios';
class BookApp extends React.Component {
  state={
    books:[]
  }
  async componentDidMount(){
     const response=await axios.get('/books')
     const copyState={...this.state}
     copyState.books=response.data;
     this.setState(copyState)
  }
  async componentDidUpdate(){
    const response=await axios.get('/books')
     const copyState={...this.state}
     copyState.books=response.data;
     this.setState(copyState)
  }
  deleteBook=async(id)=>{
    await axios.delete('/books/'+id)
  }
  updateButtonHandler=(id)=>{
    console.log(id)
    this.props.history.push('/create-book/'+id)
  }
  render() {
    return (
      <div class="view_cart_class">
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
          {
            this.state.books.map((elem)=>{
               return (
                <Books 
                ISBN={elem.ISBN}
                bookTitle={elem.bookTitle}
                publisher={elem.publisher}
                publishedDate={elem.publishedDate}
                deleteBook={()=>this.deleteBook(elem.bookId)}
                updateButtonHandler={()=>this.updateButtonHandler(elem.bookId)}
                ></Books>
               )
            })
          }
          
          </tbody>
          
        </table>
      </div>
    );
  }
}

export default BookApp;
