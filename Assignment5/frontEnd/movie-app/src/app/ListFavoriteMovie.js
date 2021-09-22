import axios from 'axios';
import  { Component } from 'react';
import FavoriteMovie from '../Component/FavoriteMovie';
class ListFavorite extends Component {

    state={
        favoriteMovie:[]
    }
   async componentDidMount(){
   const response=await axios.get('/favorites')
   const copyState={...this.state}
   copyState.favoriteMovie=response.data
   console.log(copyState.favoriteMovie)
   this.setState(copyState)
    }
    deleteFromFavorite= async(id)=>{
        await axios.delete("/favorites/" + id);
    }
   async componentDidUpdate(){
    const response=await axios.get('/favorites')
   const copyState={...this.state}
   copyState.favoriteMovie=response.data
   console.log(copyState.favoriteMovie)
   this.setState(copyState) 
    }
    render() { 
        return <div>
        <h3 style={{textAlign:"center"}}><b>List of my favorite movies</b></h3>
        {
            this.state.favoriteMovie.map((elem)=>{
                return(
                    <FavoriteMovie
                    name={elem.name}
                    rating={elem.rating}
                    genre={elem.genre}
                    deleteFromFavorite={()=>this.deleteFromFavorite(elem._id)}
                    ></FavoriteMovie>
                ) 
            })
        }
        </div>;
    }
}
 
export default ListFavorite;