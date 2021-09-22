export default function FavoriteMovie(props){
    return (
        <div className="favorite" style={{textAlign:"center"}}>
          <div>Name : {props.name}</div>  
          <div>Rating :{props.rating}</div>  
          <div>Genre: {props.genre}</div> 
          <button onClick={props.deleteFromFavorite}>remove</button> 
        </div>
    )
   } 