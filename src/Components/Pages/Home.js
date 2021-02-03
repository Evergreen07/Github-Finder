import React, { Fragment } from 'react'
import Alert from '../Layout/Alert'
import Search from '../Users/Search'
import Users from '../Users/Users'

function Home() {
    return (
        <Fragment>
            <Alert/>
            <Search/>
            <Users/>
        </Fragment>
    )
}

export default Home