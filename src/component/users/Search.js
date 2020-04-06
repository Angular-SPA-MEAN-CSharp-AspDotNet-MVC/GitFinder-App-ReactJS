import React, { Component, Profiler } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    
    state = {
        text: ''
    }

    static propTypes = {
        searchUser: PropTypes.func.isRequired,
        clearUser:  PropTypes.func.isRequired,
    }
    onChange =(e) => {
        this.setState({ [e.target.name] : e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state.text);
        if(this.state.text === ''){
            this.props.setAlert('Please enter the search text', 'light');
        } else{
            this.props.searchUser(this.state.text);
            this.setState({text: ''});           
        }

    }

    render() {
        const { clearUser, showClearUser } = this.props;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    name='text'
                    placeholder=""
                    value = {this.state.text}
                    onChange = {this.onChange}/>
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
}

export default Search 
