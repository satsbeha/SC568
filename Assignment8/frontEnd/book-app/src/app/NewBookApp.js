import React from 'react';
import NewBook from '../components/NewBook';
import axios from "axios";
class NewBookApp extends React.Component {
    state={
        newBook:{}
    }
    newBookChange=(event)=>{
     const copy ={...this.state}
     copy.newBook[event.target.name]=event.target.value
     this.setState(copy)
    }
    saveBook=async()=>{
      const response=  axios.post('/books',this.state.newBook)
      console.log(response)
        this.props.history.push('/view-books')
    }
    render() { 
        return <div>
            <NewBook
            newBookChange={(event)=>this.newBookChange(event)}
            saveBook={this.saveBook}
            ></NewBook>
        </div>;
    }
}
 
export default NewBookApp;