import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../Spinner';
import {Link} from 'react-router-dom';
import Repos from './Repos';
import GithubContext from '../../context/github/githubContext';


const User = ({match}) => {
    const githubContext = useContext(GithubContext);
    const {user, getUser, loading, getRepos} = githubContext;    
    useEffect( () => {
        getUser(match.params.login);
        getRepos(match.params.login);
        //tslint-ignore-next-line
    }, []);    
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
    } = user;

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
                        />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        <h1>Bio:</h1>
                        <p>{bio}</p>
                        <a className='btn btn-dark' href={html_url}>Visit Github Profile</a>
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
                <Repos></Repos>
            </Fragment>

        )     
    }
}

export default User
