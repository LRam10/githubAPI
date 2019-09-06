import React, {Fragment,useState} from 'react';
import Users from './components/Users';
import GithubState from './context/github/GithubState';
import './App.css';
import Navbar from './components/Navbar'
import Search from './components/Search'
import Alert from './components/helpers/Alerts'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import About from './components/routes/About'
import User from './components/routes/User'

const App = ()=> {
  const [alert,setAlert] = useState(null);


//show alerts
const showAlert = (msg,type) =>{
  setAlert({msg,type});
  setTimeout(()=> setAlert(null),5000);
}
    return (
      <GithubState>
      <Router basename="/">
      <div className="App">
        <Navbar/>
        <div className="container">
        <Alert alert={alert}/>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} render ={prop =>(
            <Fragment>
              <Search
              showAlert={showAlert}/>
              <Users/>
            </Fragment>
          )}/>
          <Route exact path='/about' component={About}/>
          <Route  exact path='/user/:login' component={User}
          /> 
        </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
}
export default App;
