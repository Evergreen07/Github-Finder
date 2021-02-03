import React from 'react'
import RepoItem from './RepoItem'

function Repos({repo_}) {
    return repo_.map((i) => <RepoItem i={i} key={i.id}/>)
}

export default Repos

