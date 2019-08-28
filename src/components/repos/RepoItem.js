import React,{Fragment} from 'react'

export default function RepoItem({repo}) {
    let name = repo.name.charAt(0).toUpperCase() + repo.name.slice(1);
    return (
        <Fragment>
          
                <li className='list-group-item'><a href={repo.html_url}>
                {repo.description || name}</a></li>
        </Fragment>
    )
}
