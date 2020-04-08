import React, { Component, useState, useContext } from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext'

const Search = ({setAlert, clearUser, showClearUser}) => {
    
    const githubContext = useContext(GithubContext);
    const [text, setText] = useState('');

    const onChange =(e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(text);
        if(text === ''){
            setAlert('Please enter the search text', 'light');
        } else{
            githubContext.searchUser(text);
            setText('');           
        }
    }  

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
            <input 
                type='text' 
                name='text'
                placeholder=""
                value = {text}
                onChange = {onChange}/>
            <input  
                type='submit' 
                name='submit' 
                className='btn btn-nogrey btn-block'/>
            </form>
            {showClearUser &&                 
                <button 
                    className='btn btn-grey btn-block'
                    onClick={clearUser}>Clear
                </button>
            }                
        </div>
    )
}

Search.propTypes = {
    clearUser:  PropTypes.func.isRequired,
}

export default Search 
