import axios from 'axios';
import React from 'react';
import LoginUser from './Component/LoginUser'
class UserApp extends React.Component {
  state={
      users:[]
  }
  async componentDidMount(){
 let response=await axios.post('/login',{
    userName:"ezra@gmail.com",
    password:"e123"
})
   console.log(response.data.jwtToken)
  }
    render() { 
        return <div>
            <LoginUser></LoginUser>
        </div>;
    }
}
 
export default UserApp;