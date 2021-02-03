import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({icon,title}) => {
      
    return (
            <nav className="navbar bg-new">
                <h1> <i className={icon} /> &nbsp; {title}</h1>
                <ul>
                    <li>
                        <Link to='/'><i className="fas fa-home"/>&ensp;Home</Link>
                    </li>
                    <li>
                        <Link to='/About'><i className="fas fa-info-circle"/>&ensp;About </Link>
                    </li>
                </ul>
            </nav>
    )
}

Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
};

export default Navbar
