import React from 'react'

function RepoItem({i}) {
    return (
            <div className='card cb text-center'>
                <h3><a href={i.html_url} target="blank">{i.name}</a></h3>
            </div>
    )
}

export default RepoItem
