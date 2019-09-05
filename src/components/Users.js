import React,{useContext} from 'react'
import UserItem from './UserItem';
import GithubContext from '../context/github/githubContext';

 function Users() {
     const githubContext = useContext(GithubContext); 
        return (
            <div className="row">
                {githubContext.users.map(user =>(
                    // passing props and using map with key
                    <div className="col-4" key={user.id}>
                        <UserItem user={user}/>
                    </div>
                    
                ))}
            </div>
        )
    
}

export default Users
