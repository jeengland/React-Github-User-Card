import React from 'react';
import axios from 'axios';

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
          <h1>Hello World</h1>
       )
    }
}

export default App;