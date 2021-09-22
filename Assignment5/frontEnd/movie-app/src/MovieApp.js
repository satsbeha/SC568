// import logo from "./logo.svg";
// import "./App.css";
// import React, { Component } from "react";
// import axios from "axios";
// import Menu from "./Component/Menu";
// import Movie from "./Component/Movie";
// import CreateMovie from "./Component/CreateMovie";
// import FavoriteMovie from "./Component/FavoriteMovie";
// class MovieApp extends Component {
//   state = {
//     movies: [],
//     favorites: [],
//     newMovie: {
//       name: "",
//       rating: 0,
//       genre: "",
//       director: "",
//       yearRelease: "",
//       description: "",
//     },
//     favCounter: 0,
//     updateMovieData: {},
//     addNewButtonClicked: false,
//     updateButtonClicked: false,
//     addFavoriteButtonClicked: false,
//     myFavoriteButtonClicked: false,
//   };

//   async componentDidMount() {
//     const response = await axios.get("/movies");
//     let copyState = { ...this.state };
//     copyState.movies = response.data;
//     let favResponse = await axios.get("/favorites");
//     copyState.favorites = favResponse.data;
//     copyState.favCounter = favResponse.data.length;
//     this.setState(copyState);
//   }
//   async componentDidUpdate() {
//     const response = await axios.get("/movies");
//     let copyState = { ...this.state };
//     copyState.movies = response.data;
//     // let favResponse = await axios.get("/favorites");
//     // copyState.favorites = favResponse.data;
//     // copyState.favCounter = favResponse.data.length;
//     this.setState(copyState);
//   }
//   newMovieChange = (event) => {
//     let copy = { ...this.state.newMovie };
//     copy[event.target.name] = event.target.value;
//     this.setState({ newMovie: copy });
//   };
//   saveMovie = async () => {
//     let response = await axios.post("/movies", this.state.newMovie);
//     if (response.data.acknowledged) {
//       let copy = {
//         name: "",
//         rating: 0,
//         genre: "",
//         director: "",
//         yearRelease: "",
//         description: "",
//       };
//       this.setState({ newMovie: copy });
//       this.setState({ addNewButtonClicked: false });
//     }
//   };
//   deleteMovie = async (id) => {
//     let response = await axios.delete("/movies/" + id);
//     console.log(response);
//   };
//   addButtonHandler = () => {
//     this.setState({ addNewButtonClicked: !this.state.addNewButtonClicked });
//   };
//   updateButtonHandler = async (id) => {
//     let response = await axios.get("/movies/" + id);
//     this.setState({ updateButtonClicked: !this.state.updateButtonClicked });
//     this.setState({ updateMovieData: response.data });
//   };
//   changeUpdateDate = (event) => {
//     let copy = { ...this.state.updateMovieData };
//     copy[event.target.name] = event.target.value;
//     this.setState({ updateMovieData: copy });
//   };
//   updateMovie = async (id) => {
//     await axios.put("/movies/" + id, this.state.updateMovieData);
//     this.setState({ updateButtonClicked: false });
//   };
//   addToFavorite = async (id) => {
//     let favMovie = this.state.movies.find((elem) => elem._id === id);
//      await axios.post("/favorites", favMovie);
//     let favResponse = await axios.get("/favorites");
//     let copyState={...this.state}
//       copyState.favorites = favResponse.data;
//       copyState.favCounter = favResponse.data.length;
//       this.setState(copyState)
//   };
//   myFavoriteButtonHandler = () => {
//     this.setState({
//       myFavoriteButtonClicked: !this.state.myFavoriteButtonClicked,
//     });
//   };
//   deleteFromFavorite=async(id)=>{
//     await axios.delete("/favorites/" + id);
//     // if(response.deletedCount>0){
//       let favResponse = await axios.get("/favorites");
//       let copyState={...this.state}
//       copyState.favorites = favResponse.data;
//       copyState.favCounter = favResponse.data.length;
//       this.setState(copyState)
//     //}

//   }
//   render() {
//     return (
//       <React.Fragment>
//         <Menu
//           favCounter={this.state.favCounter}
//           addButtonHandler={this.addButtonHandler}
//           myFavoriteButtonHandler={this.myFavoriteButtonHandler}
//         ></Menu>
//         <br />
//         <br />
//         {this.state.myFavoriteButtonClicked ? (
//           <div>
//           <h3>List of my favorite movies</h3>
//             {this.state.favorites.map((elem) => {
//               return (
//                 <FavoriteMovie
//                   name={elem.name}
//                   rating={elem.rating}
//                   genre={elem.genre}
//                   deleteFromFavorite={()=>this.deleteFromFavorite(elem._id)}
//                 ></FavoriteMovie>
//               );
//             })}
//           </div>
//         ) : null}
//         <br />
//         {this.state.addNewButtonClicked ? (
//           <CreateMovie
//             //   key={1234}
//             name={this.state.newMovie.name}
//             rating={this.state.newMovie.rating}
//             genre={this.state.newMovie.genre}
//             director={this.state.newMovie.director}
//             yearRelease={this.state.newMovie.yearRelease}
//             description={this.state.newMovie.description}
//             newMovieChange={(event) => this.newMovieChange(event)}
//             saveMovie={this.saveMovie}
//           ></CreateMovie>
//         ) : null}
//         {this.state.updateButtonClicked ? (
//           <CreateMovie
//             //   key={1234}
//             name={this.state.updateMovieData.name}
//             rating={this.state.updateMovieData.rating}
//             genre={this.state.updateMovieData.genre}
//             director={this.state.updateMovieData.director}
//             yearRelease={this.state.updateMovieData.yearRelease}
//             description={this.state.updateMovieData.description}
//             newMovieChange={(event) => this.changeUpdateDate(event)}
//             saveMovie={() => this.updateMovie(this.state.updateMovieData._id)}
//           ></CreateMovie>
//         ) : null}

//         {this.state.movies.map((elem) => {
//           return (
//             <div>
//               <Movie
//                 key={elem._id}
//                 name={elem.name}
//                 rating={elem.rating}
//                 genre={elem.genre}
//                 deleteMovie={() => this.deleteMovie(elem._id)}
//                 updateButtonHandler={() => this.updateButtonHandler(elem._id)}
//                 saveMovie={this.updateMovie}
//                 addToFavorite={() => this.addToFavorite(elem._id)}
//               ></Movie>
//             </div>
//           );
//         })}
//       </React.Fragment>
//     );
//   }
// }
// export default MovieApp;
