import React from "react";
import axios  from "axios";
import Menu from "../Component/Menu";
class MenuApp extends React.Component {
    state = {
        favorites: [],
        favCounter: 0,
      };
    async  componentDidMount(){
        const favResponse = await axios.get("/favorites");
        const copy={...this.state}
        copy.favorites = favResponse.data;
        copy.favCounter = favResponse.data.length;
        this.setState(copy);
      }
     async componentDidUpdate(){
      const favResponse = await axios.get("/favorites");
      const copy={...this.state}
      copy.favorites = favResponse.data;
      copy.favCounter = favResponse.data.length;
      this.setState(copy);
      } 
      myFavoriteButtonHandler=()=>{
        this.props.history.push('/list-favorite')
      }  
  render() {
    return <div>
        <Menu
          favCounter={this.state.favCounter}
          onChangeSearch={this.onChangeSearch}
          myFavoriteButtonHandler={this.myFavoriteButtonHandler}
        ></Menu>
    </div>;
  }
}

export default MenuApp;
