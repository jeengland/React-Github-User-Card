import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios
            .get('https://api.github.com/users/jeengland')
            .then((response) => this.setState({ data: response.data }))
            .catch((error) => console.error(error))
    }
    render() {
       return (
          <UserCard user={this.state.data} />
       )
    }
}

export default App;