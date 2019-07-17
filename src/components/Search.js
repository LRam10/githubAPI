import React, { Component } from 'react'

class Search extends Component {
    state = {
        text:''
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text:' '});
    }
    onChange = (e) => this.setState({[e.target.name]:e.target.value});
    
    render() {
        //destructuring
        const {showClear,clearUsers} = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <input type="text" name="text" className="form-control" placeholder="Search User..." 
                    value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" className="btn btn-sm btn-dark d-inline-block" value="Search" />
                    </div>
                </form>
                {showClear && (
                    <button style={full}className="btn btn-light d-block mx-auto" onClick={clearUsers}>Clear</button>
                )}
            </div>
        )
    }
}
const full ={
width:'100%'
};
export default Search
