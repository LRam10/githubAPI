import React from 'react';
import RepoItem from './RepoItem.js';
// Destructure props
const Repos = ({repos})=> {
        return (
            <ul className="list-group">
            {repos.map(repo => (
            <RepoItem repo={repo} key={repo.id}/>
        ))}
            </ul>
        )
}
export default Repos;