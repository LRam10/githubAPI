import React, {Fragment,useEffect,useContext } from 'react'
import Repos from '../repos/Repos.js'
import GithubContext from '../../context/github/githubContext';
const User = ({match}) => {
    const githubContext = useContext(GithubContext);
    const {user,getSingleUser,getUserRepos,repos} = githubContext;
    useEffect(()=>{
        getSingleUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    },[])
        //destructuring
        const {bio,html_url,avatar_url,followers,following,name,hireable,company,location,login} =user
        return (
            <Fragment>
                <div className="row bg-light">
                    <div className="col-6 mt-3">
                        <img src={avatar_url} alt="user" className="rounded mx-auto d-block" height="200" width="200"></img>
                        <h3 className="text-center">{name}</h3>
                        <p className="text-center"><strong>Location:</strong>{location}</p>
                        <div className="text-center mb-3">
                            <a href={html_url} className="btn btn-md btn-dark text-white">Visit Profile</a>
                        </div>
                    </div>
                    <div className="col-6 mt-3">
                        <ul style={{listStyle:'none',padding:'0px'}}>
                            <li><strong>Username: </strong>{login}</li>
                            <li><strong>Company/School: </strong>{company}</li>
                            <li><strong>Hireable: </strong>{hireable ? <i className="fas fa-check text-success" /> :<i className="fas fa-times-circle text-danger" />}</li>
                        </ul>
                        <div>
                            {bio &&(
                            <Fragment>
                                <h4>Bio:</h4>
                                <p>{bio}</p>
                            </Fragment>)
                            }
                        </div>
                        <span className="badge badge-pill badge-primary m-1">Followers:{followers}</span>
                        <span className="badge badge-pill badge-secondary m-1">Following:{following}</span>
                    </div>
                </div>
                <div className="row bg-light py-2">
                    <h2 style={{paddingLeft:'15px'}}>Repositories</h2>
                    <div className="col-12">
                    <Repos repos={repos}/>
                    </div>
                </div>
                
            </Fragment>  
        )
    
}
export default User;
