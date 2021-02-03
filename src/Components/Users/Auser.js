import React, {Fragment, useEffect, useContext} from 'react'
import Spinner from '../Layout/Spinner'
import Repos from '../Repos/Repos'
import {Link} from 'react-router-dom'
import githubContext from '../../Context/Github/githubContext';


const Auser = ({match}) => {
    const context = useContext(githubContext);

    const {getrepos,geteachuser,loading_,a_user,repo_} = context;

    useEffect(() => {
        geteachuser(match.params.login);
        getrepos(match.params.login);
        //eslint-disable-next-line
    },[]);

    const {
            name,company,avatar_url,location,bio,blog,login,html_url,
            following,followers,public_repos,public_gists,
            hireable 
        } = a_user;

    if(loading_)
        {
            return <Spinner/>
        }

    return (
            <Fragment>
                <Link to='/' className='btn btn-light' style = {{borderRadius:'20px'}}><i className="fas fa-arrow-circle-left"></i><strong>&ensp;Back </strong></Link>
                <br/>
                <br/>
                <div className="card ca grid-2">

                    <div className="all-center">
                        <img src={avatar_url} alt="" className='round-img' style={{width:'200px'}}/>
                        <h1>{name}</h1>
                        {location && (
                        <Fragment>
                            <h4>Location : {location}</h4>
                        </Fragment>
                        )}
                    </div>

                    <div>
                        {bio && (
                        <Fragment>
                            <h2>Bio : </h2>
                            <p>{bio}</p>   
                        </Fragment>
                        )}

                        <a href={html_url} className='btn btn-dark my-1' target='blank'> Visit Github Profile</a>

                        <ul>
                        <li>
                            {login && (
                            <Fragment>
                                <strong>UserName :</strong> {login}
                            </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                            <Fragment>
                                <strong>Company :</strong> {company}
                            </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                            <Fragment>
                                <strong>Website :</strong> <a href={blog} target='blank'>{blog}</a>
                            </Fragment>
                            )}
                        </li>
                        </ul>
                        <br/>
                        <strong>Available for Work </strong>: {hireable ? (<i className='fas fa-check text-success'/>) :
                        (<i className='fas fa-times-circle text-danger'/>)}
                    </div>
                </div>
                
                <br/>

                <div className="text-center">
                    <div className="badge badge-primary" style={{fontSize:'16px'}}><strong>Followers : </strong>{followers}</div>
                    <div className="badge badge-success" style={{fontSize:'16px'}}><strong>Following : </strong>{following}</div>
                    <div className="badge badge-light" style={{fontSize:'16px'}}
                    ><strong>Public Gists : </strong> {public_gists}</div>
                    <div className="badge badge-dark" style={{fontSize:'16px'}}
                    ><strong>Public Repos : </strong>{public_repos}</div>
                </div>
                
                <br/>

                <div>
                    <div className='grid-3'>
                        <Repos repo_={repo_} />
                    </div>
                </div>
                <br/>
            </Fragment>
        )
}

export default Auser