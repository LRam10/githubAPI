import React from 'react'
import {Link} from 'react-router-dom';
function UserItem(props) {
    
        const {login,avatar_url} = props.user;
        return (
            <div className="card my-3 " style={{width:'18rem'}}>
                <img src={avatar_url} style={forIMG}alt="user"className="card-img-top mx-auto img"/>
                <div className="card-body bg-light">
                    <p className="card-text">{login}</p>
                    {/* Link instead of regular a tag to keep state */}
                    <Link to={`/user/${login}`} className="btn btn-primary">Profile</Link>
                </div>
            </div>
        )
}
const forIMG = {
    borderRadius:'60px',
    height:'100px',
    width:'100px',
    margin:'1em'
}

export default UserItem
// rce