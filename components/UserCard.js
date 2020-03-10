import React from 'react';

// Material UI Styles
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

// Material UI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationCityIcon from '@material-ui/icons/LocationCity';

const useStyles = makeStyles({
    card: {
        width: '30%',
        margin: '1%',
        height: '30%',
    },
    username: {
        fontWeight: 'bold',
        marginBottom: '2%',
    },
    stats: {
        display: 'flex',
        flexDirection: 'column',
    }
})

const UserCard = (props) => {
    const user = props.user;
    const classes = useStyles();
    return (
        <Card raised className={classes.card}>
            <CardHeader title={user.name} avatar={<Avatar src={user.avatar_url} alt={user.name} title={user.name}/>} />
            <CardContent>
                <Typography className={classes.username}>{user.login}</Typography>
                {user.location ? <Typography><LocationCityIcon fontSize='inherit'/>{user.location}</Typography> : undefined}
                <Typography>{user.bio}</Typography>
            </CardContent>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Stats</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.stats }>
                    <Typography>Repositories: {user.public_repos}</Typography>
                    <Typography>Followers: {user.followers}</Typography>
                    <Typography>Following: {user.following}</Typography>
                    <img
                        id="chart"
                        src={`https://ghchart.rshah.org/${user.login}`}
                        alt="Github chart"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Card>
    )
}

export default UserCard;