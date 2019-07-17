import React, {Component} from 'react';
import Users from './components/Users';
import './App.css';
import Navbar from './components/Navbar'
import Search from './components/Search'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users :[],
      loading:false
    }
  }
  // searches for firts 30 users
componentDidMount(){
  console.log(process.env.REACT_APP_GITHUB_ClientID);
  this.setState({loading:true})
  fetch(`https://api.github.com/users?client_id = ${process.env.REACT_APP_GITHUB_ClientID}&
  client_secret=${process.env.REACT_APP_GITHUB_Secret}`)
  .then(res => res.json())
  .then(users =>{
    this.setState({
      loading:false,
      users:users
    })
  })
}
//Search users or a user
searchUsers = (text)=>{
  fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ClientID}&
  client_secret=${process.env.REACT_APP_GITHUB_Secret}`)
  .then(res => {
    res.json()
    .then(users =>{
      this.setState({users:users.items});
    })
  })
  .catch(err =>{
    console.log(err)
  })
}
//Clears users
clearUsers = () => this.setState({users:[],loading:false})
  render(){
    const {loading,users} = this.state;
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
        <Search searchUsers={this.searchUsers} 
        clearUsers={this.clearUsers}
        showClear={users.length > 0 ? true:false}/>
        <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
