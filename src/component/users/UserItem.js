import React, { Component } from 'react'

export class UserItem extends Component {
    constructor() {
        super();
    }

    render() {
        const {login, avatar_url, html_url} = this.props.user;

        return (
            <div className='card text-center'>
                <img src={avatar_url}
                    className='round-img'
                    alt=''
                    style={{width: '60px'}}
                />
                <h1>{login}</h1>
                <a href={html_url} className='btn btn-dark btn-sm my-1'>Details</a>

            </div>
        )
    }
}

export default UserItem
