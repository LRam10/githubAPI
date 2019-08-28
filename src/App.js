import React, {Fragment,Component} from 'react';
import Users from './components/Users';
import './App.css';
import Navbar from './components/Navbar'
import Search from './components/Search'
import Alert from './components/helpers/Alerts'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import About from './components/routes/About'
import User from './components/routes/User'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users :[],
      repos: [],
      user:{},
      loading:false,
      alert:null
    }
  }
  // searches for firts 30 users
componentDidMount(){
  this.setState({loading:true})
  fetch(`https://api.github.com/users?client_id = ${process.env.REACT_APP_GITHUB_ClientID}&
  client_secret=${process.env.REACT_APP_GITHUB_Secret}`)
  .then(res => res.json())
  .then(users =>{
    this.setState({
      loading:false,
      users:users,
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
//Single user informatio
getSingleUser = (username) =>{
  fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ClientID}&
  client_secret=${process.env.REACT_APP_GITHUB_Secret}`)
  .then(res => {
    res.json()
    .then(user =>{
      this.setState({user:user,loading:false});
    })
  })
  .catch(err =>{
    console.log(err)
  })
}
//Get user repos
getUserRepos = (username) =>{
  fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ClientID}&
  client_secret=${process.env.REACT_APP_GITHUB_Secret}`)
  .then(res => {
    res.json()
    .then(repos =>{
      this.setState({repos:repos,loading:false});
    })
  })
  .catch(err =>{
    console.log(err)
  })
}
//Clears users
clearUsers = () => this.setState({users:[],loading:false});
//show alerts
showAlert = (msg,type) =>{
  this.setState({alert:{msg,type}});
  setTimeout(()=>this.setState({alert:null}),5000);
}
  render(){
    const {loading,users,user,repos} = this.state;
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
        <Alert alert={this.state.alert}/>
        <Switch>
          <Route exact path='/' render ={prop =>(
            <Fragment>
              <Search searchUsers={this.searchUsers} 
              clearUsers={this.clearUsers}
              showClear={users.length ? true:false}
              showAlert={this.showAlert}/>
              <Users loading={loading} users={users}/>
            </Fragment>
          )}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login' render = {props =>(
              <User {...props} 
              getSingleUser ={this.getSingleUser}
              getUserRepos = {this.getUserRepos} 
              user={user} 
              repos ={repos}
              loading={loading} />
          )}
          /> 
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
export default App;
