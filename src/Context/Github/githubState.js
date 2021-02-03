import React, {useReducer,useEffect} from 'react';
import githubReducer from './githubReducer'
import githubContext from './githubContext';
import {
    SEARCH_USERS, 
    GET_REPOS, 
    GET_USER,
    CLEAR_USERS, 
    SET_LOADING,
    DEFAULT_DISPLAY
} from '../types';

let g_id, g_secret;

if(process.env.NODE_ENV !== 'production'){
    g_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
    g_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} 
else{
    g_id = process.env.GITHUB_CLIENT_ID;
    g_secret = process.env.GITHUB_CLIENT_SECRET;
}


const GithubState = props => {
    const initialstate = {
        users_ : [],
        a_user : {},
        repo_ : [],
        loading_ : false,
        default_ : false
    }

    const[state,dispatch] = useReducer(githubReducer, initialstate);

    //METHODS :

    //Default Users
    useEffect(() => {
        async function firstDisplay() {
          setLoading();
    
          const res = await fetch(`https://api.github.com/users?client_id=${g_id}&client_secret=${g_secret}`);
          const data = await res.json();
    
          dispatch({
            type: DEFAULT_DISPLAY,
            payload: data
           })
        }
        firstDisplay();
      },[]);


    //Search users
    const userSearch = async e => { 
        setLoading();
    
        const res = await fetch(`https://api.github.com/search/users?q=${e}&client_id=${g_id}&client_secret=${g_secret}`);
        const data = await res.json();
    
        dispatch({
            type:SEARCH_USERS,
            payload: data.items
        })

      }

    //Get users
    const geteachuser = async username => {
        setLoading();
    
        const res = await fetch(`https://api.github.com/users/${username}?client_id=${g_id}&client_secret=${g_secret}`);
        const data = await res.json();
        
        dispatch({
            type: GET_USER,
            payload: data
        })
      }


    //Get repos
    const getrepos = async username => {
        setLoading();
    
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc&client_id=${g_id}&client_secret=${g_secret}`);
        const data = await res.json();

        dispatch({
            type:GET_REPOS,
            payload:data
        })
    }


    //Clear users
    const clearUsers = () => { dispatch({type: CLEAR_USERS}) }


    //Set loading
    const setLoading = () => dispatch({type : SET_LOADING})


    return <githubContext.Provider
        value = {{
            users_ : state.users_,
            a_user : state.a_user,
            repo_ : state.repo_,
            loading_ : state.loading_,
            default_ : state.default_,
            userSearch,
            clearUsers,
            geteachuser,
            getrepos
        }}>
        {props.children}
    </githubContext.Provider>
}

export default GithubState;