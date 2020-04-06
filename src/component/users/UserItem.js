import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const UserItem = ({user:{login, avatar_url, html_url}}) => {
        //const  = props.user;
        return (
            <div className='card text-center'>
                <img src={avatar_url}
                    className='round-img'
                    alt=''
                    style={{width: '60px'}}
                />
                <h1>{login}</h1>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>Details</Link>
            </div>
        )    
}

UserItem.prototype = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
}

export default UserItem
