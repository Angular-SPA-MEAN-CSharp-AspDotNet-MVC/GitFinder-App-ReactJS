import React, { userReducer} from 'react';
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


    const [state, dispatch] = userReducer(GithubReducer, initialState);

    // Search Users

    // Get User

    // Get Repos

    // Clear Users

    // Set Loading

    // It contains anything that are available for the entire app
    return <githubContext.Provider
        value = {{
            users: state.users ,
            user: state.user,
            repos: state.repost,
            loading: state.loading
        }}    
    >

    {props.children}
    </githubContext.Provider>
}

export default GithubState;