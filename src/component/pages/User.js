import React, { Fragment, Component } from 'react';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        user: PropTypes.object,
        getUser: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            company,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const {loading} = this.props;
        if(loading){
            return (<Fragment><Spinner/></Fragment>);
        }
        else {
            return (            
                <Fragment>
                    <Link className='btn btn-info' to='/'>Back to home</Link>
                    Hireable: {' '}
                    {hireable? (<i className='fas fa-check text-success'></i>) : (<i className='fas fa-times-circle text-danger'></i>)}
                    <div className='card grid-2'>
                        <div className="all-center">
                            <img
                                src={avatar_url}
                                className='round-img'
                                alt=''
                                style={{width: '150px'}}
                            />>
                            <h1>{name}</h1>
                            <p>Location: {location}</p>
                        </div>
                        <div>
                            <h1>Bio:</h1>
                            <p>{bio}</p>
                            <a className='btn btn-dark' src={public_repos}>Visit Github Profile</a>
                            <br/>
                            <ul>
                                <li>
                                    <strong>UserName: {login}</strong>
                                </li>
                                <li>
                                    <strong>Company: {company}</strong>
                                </li>
                                <li>
                                    <strong>WebSite: {blog}</strong>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                    <div className='card text-center'>
                        <div className='badge badge-danger'>Followers : {followers}</div>
                        <div className='badge badge-success'>Following : {following}</div>
                        <div className='badge badge-grey'>Public Repos : {public_repos}</div>
                        <div className='badge badge-Dark'>Public Gists : {public_gists}</div>
                    </div>
                </Fragment>

            )     
        }

    }
}

export default User
