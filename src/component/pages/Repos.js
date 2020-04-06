import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types'

export const Repos = ({repos}) => {
    return (
        <div>
            {repos.map( repo => {
                return (<RepoItem repo={repo} key={repo.id}/>);
            })}
        </div>
    )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}
export default Repos
