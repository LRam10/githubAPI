import React , {useReducer,useEffect} from 'react';
import GithubContext from './githubContext';
import GithubReducer from './GithubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    GET_LOADING
} from '../types';
let githubClientID;
let githubSecret;

if(process.env.NODE_ENV !== 'production'){
  githubClientID = process.env.REACT_APP_GITHUB_ClientID;
  githubSecret = process.env.REACT_APP_GITHUB_Secret;
}else{
  githubClientID = process.env.REACT_APP_GITHUB_ClientID;
  githubSecret = process.env.REACT_APP_GITHUB_Secret;
}

const GithubState = props => {
const initalState = {
users:[],
repos:[],
user:{},
loading:false
}
useEffect(()=>{
  setLoading();
fetch(`https://api.github.com/users?client_id = ${process.env.REACT_APP_GITHUB_ClientID}&
client_secret=${process.env.REACT_APP_GITHUB_Secret}`)
.then(res => res.json())
.then(users =>{
  dispatcher({type:SEARCH_USERS,payload:users})
})
},[]) /* [] prevent from making unwanted loop request*/
const [state,dispatcher] = useReducer(GithubReducer,initalState);
//Search user
const searchUsers = (text)=>{
    setLoading();
    fetch(`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&
    client_secret=${githubSecret}`)
    .then(res => {
      res.json()
      .then(users =>{
          dispatcher({
              type:SEARCH_USERS,payload:users.items
          })
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }

//Get user
const getSingleUser = (username) =>{
  setLoading();
  fetch(`https://api.github.com/users/${username}?client_id=${githubClientID}&
  client_secret=${githubSecret}`)
  .then(res => {
    res.json()
    .then(user =>{
      dispatcher({type:GET_USER,payload:user});
    })
  })
  .catch(err =>{
    console.log(err)
  })
}

//Get repos
const getUserRepos = (username) =>{
  setLoading();
  fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}&
  client_secret=${githubSecret}`)
  .then(res => {
    res.json()
    .then(repos =>{
      dispatcher({type:GET_REPOS,payload:repos});
    })
  })
  .catch(err =>{
    console.log(err)
  })
}

//clear users
const clearUsers = () => dispatcher({type:CLEAR_USERS});


//set loading

const setLoading = ()=> dispatcher({type:GET_LOADING});
return <GithubContext.Provider
value = {
    {
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        searchUsers,
        clearUsers,
        getSingleUser,
        getUserRepos
    }
}>
{props.children}

</GithubContext.Provider>
}
export default GithubState;