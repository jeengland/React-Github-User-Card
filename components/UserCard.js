import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const UserCard = (props) => {
    const user = props.user;
    return (
        <Card raised>
            <CardHeader title={user.name} avatar={<Avatar src={user.avatar_url} alt={user.name} title={user.name}/>} />
            <CardContent>
                <Typography>{user.login}</Typography>
                <Typography>{user.bio}</Typography>
                <Typography>{user.location}</Typography>
                <Typography>Repositories: {user.public_repos}</Typography>
                <Typography>Followers: {user.followers}</Typography>
                <Typography>Following: {user.following}</Typography>
            </CardContent>
        </Card>
    )
}

export default UserCard;