export default function FavoriteMovie(props){
 return (
     <div>
       <div>Title : {props.movieName}</div>  
       <div>Rating :{props.movieRating}</div>  
       <div>Genre: {props.movieGenre}</div> 
       <button onClick={props.deleteFromFavoriteList}>remove</button> 
     </div>
 )
} 