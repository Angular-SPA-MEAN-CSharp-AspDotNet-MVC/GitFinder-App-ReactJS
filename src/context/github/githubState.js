import React, { useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
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

    // Get Repos

    // Clear Users

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING});

    // It contains anything that are available for the entire app
    return <githubContext.Provider
        value = {{
            users: state.users ,
            user: state.user,
            repos: state.repost,
            loading: state.loading,
            searchUser
        }}    
    >

    {props.children}
    </githubContext.Provider>
}

export default GithubState;