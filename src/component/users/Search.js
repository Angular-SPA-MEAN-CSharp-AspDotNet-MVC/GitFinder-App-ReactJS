import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'

const Search = ({setAlert, showClearUser}) => {
    
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
