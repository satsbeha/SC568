import logo from './logo.svg';
import './App.css';
import BookApp from './app/BookApp'
import React from 'react';
import MenuApp from './app/menuApp';
import ABook from './app/ABook';
import NewBookApp from './app/NewBookApp';
import UpdateBookApp from './app/UpdateBookApp';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class App extends React.Component {
  render() { 
    return (
      <BrowserRouter>
             <Route  path="/" component={MenuApp}></Route>
             <Route exact path="/view-books" component={BookApp}></Route>
             <Route exact path="/create-book" component={NewBookApp}></Route>
             <Route exact path="/create-book/:id" component={UpdateBookApp}></Route>
             <Route exact path="/books/:id" component={ABook}></Route>
      </BrowserRouter>
    )
  }
}
 
export default App;
