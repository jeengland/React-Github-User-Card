import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';

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
            <React.Fragment>
                <UserCard user={this.state.data} />
                {this.state.followers.map((follower) => <UserCard user={follower}/>)}
            </React.Fragment>
       )
    }
}

export default App;