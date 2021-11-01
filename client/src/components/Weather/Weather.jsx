import React, { Component } from 'react';
import axios from 'axios';
import { defaultUrl } from '../../utils/consts';

class Weather extends Component {
    state = {
        weather: []
    }

    componentDidMount() {
        axios.get(`${defaultUrl}/weather`)
        .then(response => {
            console.log (response)
            this.setState({weather: response.data})
        })
    }

    render() {
        return (
            <div>
                Weather
            </div>
        );
    }
}

export default Weather;

