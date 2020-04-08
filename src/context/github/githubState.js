import React, { useReducer} from 'react';
import axios from 'axios';
//import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING
} from '../types';
import githubContext from './githubContext';

const GithubState = props => {
    const initialState = {
      users: [],
      user: {},
      repos: [],
      loading: false  
    }


    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    const searchUser = async (text) => {
        setLoading();
        console.log('search Text is ' + text)
        const res = await axios.get(`https://api.github.com/search/users?q=`+
          `${text}&Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
          `&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
        console.log(res); 
        dispatch(
                {
                    type:SEARCH_USERS, 
                    payload:res.data.items
                }                
            );
      }

    // Get User
    const getUser = async (login) => {  // 'login' is the username
    
    setLoading();
    const res = await axios.get(`https://api.github.com/users/`+
    `${login}?Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    dispatch({type:GET_USER, payload: res.data});
  }


    // Get Repos
    const getRepos = async (login) => {
    
        setLoading();
        const res = await axios.get(`https://api.github.com/users/`+
        `${login}/repos?per_page=5&sort=created:asc&Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
        `&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  

        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
        // setRepos(res.data);
        console.log('res of repo get');
        //console.log(res.data);
        // setLoading(false);
        //console.log(this.state.repos);
    
      }



    // Clear Users
    const clearUser = () => dispatch({type: CLEAR_USERS});
 
    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING});

    // It contains anything that are available for the entire app
    return <githubContext.Provider
        value = {{
            users: state.users ,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUser,
            clearUser,
            getUser,
            getRepos
        }}    
    >

    {props.children}
    </githubContext.Provider>
}

export default GithubState;