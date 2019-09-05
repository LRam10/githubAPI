import React, { useState,useContext} from 'react'
import GithubContext from '../context/github/githubContext';
//deconstrucing from properties
const Search = ({showAlert})=> {
 const githubContext = useContext(GithubContext);   
 const [text,setText] = useState(' ');
    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === '' || text === ' ' ){
           showAlert('Please input something...','danger');
        }
        else{
            githubContext.searchUsers(text);
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
                {githubContext.users.length > 0 && (
                    <button style={full}className="btn btn-light d-block mx-auto" onClick={githubContext.clearUsers}>Clear</button>
                )}
            </div>
        )
    
}
const full ={
width:'100%'
};
export default Search
