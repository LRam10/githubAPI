import React from 'react'
import UserItem from './UserItem';

 function Users(props) {
        return (
            <div className="row">
                {props.users.map(user =>(
                    // passing props and using map with key
                    <div className="col-4" key={user.id}>
                        <UserItem user={user}/>
                    </div>
                    
                ))}
            </div>
        )
    
}

export default Users
