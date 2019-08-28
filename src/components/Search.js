import React, { useState } from 'react'

const Search = ({clearUsers,searchUsers,showClear,showAlert})=> {
 const [text,setText] = useState(' ');
    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === '' || text === ' ' ){
           showAlert('Please input something...','danger');
        }
        else{
            searchUsers(text);
            setText(' ');
        }
    }
    const onChange = (e) => setText(e.target.value);
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                    <input type="text" name="text" className="form-control" placeholder="Search User..." 
                    value={text} onChange={onChange}/>
                    <input type="submit" className="btn btn-sm btn-dark d-inline-block" value="Search" />
                    </div>
                </form>
                {showClear && (
                    <button style={full}className="btn btn-light d-block mx-auto" onClick={clearUsers}>Clear</button>
                )}
            </div>
        )
    
}
const full ={
width:'100%'
};
export default Search
