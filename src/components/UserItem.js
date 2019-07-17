import React from 'react'

function UserItem(props) {
    
        const {login,avatar_url,html_url} = props.user;
        return (
            <div className="card my-3 " style={{width:'18rem'}}>
                <img src={avatar_url} style={forIMG}alt="user"className="card-img-top mx-auto img"/>
                <div className="card-body bg-light">
                    <p className="card-text">{login}</p>
                    <a href={html_url} className="btn btn-primary">Profile</a>
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