import React, { useContext } from 'react'
import Useritem from './Useritem';
import Spinner from '../Layout/Spinner';
import githubContext from '../../Context/Github/githubContext';

const Users = () => {
    const context = useContext(githubContext);
    const {users_,loading_} = context;

    if(loading_){
        return <Spinner/>
    }
    else{
        return (
        <div style={style_var}>
                {users_.map((i) => (
                   <Useritem key={i.id} user = {i}/> //user: propname
                ))}
        </div>
        );
    }
}

const style_var = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '40px'
}

export default Users
