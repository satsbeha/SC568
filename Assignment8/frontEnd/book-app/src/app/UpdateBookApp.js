import React from 'react';
import axios from 'axios';
import NewBook from '../components/NewBook';
class UpdateBookApp extends React.Component {
    state={
        updateBook:{}
    }
 async componentDidMount(){
    const response = await axios.get("/books/" + this.props.match.params.id);
    const copy={...this.state}
    copy.updateBook=response.data
    this.setState(copy)
 }
 updateBookChange=(event)=>{
    const copy={...this.state}
    copy.updateBook[event.target.name]=event.target.value 
    this.setState(copy)
 }
 updateBook=async()=>{
     await axios.put("/books/"+this.props.match.params.id,this.state.updateBook);
     this.props.history.push('/view-books')
 }
    render() { 
        return <div>
            <NewBook
            ISBN={this.state.updateBook.ISBN}
            bookTitle={this.state.updateBook.bookTitle}
            overDueFee={this.state.updateBook.overDueFee}
            publisher={this.state.updateBook.publisher}
            publishedDate={this.state.updateBook.publishedDate}
            newBookChange={(event)=>this.updateBookChange(event)}
            saveBook={this.updateBook}
            ></NewBook>
        </div>;
    }
}
 
export default UpdateBookApp;