export default function UpdateMovie(props){
return(
      <div>
      <div>Name :<input type="text" value={props.movieName} onChange={props.updateMovieName}></input> </div>
      <br/>
      <div>Rating :<input type="text" value={props.movieRating} onChange={props.updateMovieRating}></input> </div>
      <br/>
      <div>Genre :<input type="text" value={props.movieGenre} onChange={props.updateMovieGenre}></input> </div>
      <br/>
      <div>Director name :<input type="text" value={props.directorName} onChange={props.updateMovieDirectorName}></input> </div>
      <br/>
      <div>Year release :<input type="text" value={props.yearRelease} onChange={props.updateMovieYearRelease}></input> </div>
      <br/>
      <div>Description :<input type="text" value={props.description} onChange={props.updateMovieDescription}></input> </div>
      <br/>
      <button onClick={props.replaceOldValues}>apply</button>
      </div>
)
}