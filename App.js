import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            followers: []
        }
    }
    componentDidMount() {
        axios
            .get('https://api.github.com/users/jeengland')
            .then((response) => this.setState({ data: response.data }))
            .catch((error) => console.error(error))
        axios
            .get('https://api.github.com/users/jeengland/followers')
            .then((response) => response.data.map((follower) => {
                axios
                    .get(`https://api.github.com/users/${follower.login}`)
                    .then((response) => this.setState({ followers: [ ...this.state.followers, response.data ]}))
            }))
            .catch((error) => console.error(error))
    }
    render() {
        return (
            <Container className='container' maxWidth='md'>
                <Typography variant='h4' component='h1'>Usercard for {this.state.data.name}</Typography>
                <UserCard className='user' user={this.state.data} />
                
                <Typography variant='h5' component='h2'>Followers</Typography>
                <div className='followers'>
                {this.state.followers.map((follower) => <UserCard user={follower}/>)}
                </div>
            </Container>
       )
    }
}

export default App;