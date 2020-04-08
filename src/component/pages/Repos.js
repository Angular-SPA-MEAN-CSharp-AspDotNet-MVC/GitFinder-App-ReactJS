import React, {useContext} from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';

export const Repos = () => {
    const githubContext = useContext(GithubContext);
    const { repos } = githubContext;
    return (
        <div>
            {repos.map( repo => {
                return (<RepoItem repo={repo} key={repo.id}/>);
            })}
        </div>
    )
}

export default Repos
