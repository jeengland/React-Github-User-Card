import React from 'react';

const UserCard = (props) => {
    const user = props.user;
    return (
        <div className='card'>
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt={`${user.login} profile picture`} title={`${user.login} profile picture`} />
            <div className='description'>
                <p>{user.name}</p>
                <p>{user.bio}</p>
                <p>{user.location}</p>
            </div>
            <div className='stats'>
                <p>Repositories: {user.public_repos}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
            </div>
        </div>
    )
}

export default UserCard;