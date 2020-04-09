import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');
    const {setAlert, alert} = alertContext; 

    const onChange =(e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('text value is:  '+ text);
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
                placeholder="Please enter some text for searching."
                value = {text}
                onChange = {onChange}/>
            <input  
                type='submit' 
                name='submit' 
                className='btn btn-nogrey btn-block'/>
            </form>
            {githubContext.users.length>0 &&                 
                <button 
                    className='btn btn-grey btn-block'
                    onClick={githubContext.clearUser}>Clear
                </button>
            }                
        </div>
    )
}

export default Search 
