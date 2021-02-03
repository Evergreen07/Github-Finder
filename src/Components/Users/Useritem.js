import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Useritem = ({user : {login,avatar_url,html_url}}) => {

        return (
            <div className="card ca text-center">
                <img src={avatar_url} alt="" className = "round-img"
                style={{width:'60px'}}/>
                <h3>{login}</h3>
                <Link to={`user/${login}`} className="btn btn-sm btn-dark my-1" style={{borderRadius : '3px'}}> Read More </Link>
            </div>
        )
};

Useritem.propTypes = {
    user : PropTypes.object.isRequired
};

export default Useritem
