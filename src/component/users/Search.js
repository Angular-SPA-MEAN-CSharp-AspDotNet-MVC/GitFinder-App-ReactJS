import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({setAlert, searchUser, clearUser, showClearUser}) => {
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
            searchUser(text);
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
    searchUser: PropTypes.func.isRequired,
    clearUser:  PropTypes.func.isRequired,
}

export default Search 
