import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    state = {
        weatherType: '',
        link: '',
        temperature: null,
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/weather`)
        .then(response => {
            console.log (response)
            console.log (response.data[0].Temperature.Imperial.Value)
            this.setState({weatherType: response.data[0].WeatherText,
            link: response.data[0].Link,
            temperature: response.data[0].Temperature.Imperial.Value,
            })
        })
    }

    render() {
        return (
            <div>
                <h1> Current Weather - Miami</h1>
                <h2> {this.state.weatherType} </h2>
                <h2> {this.state.temperature}&deg;</h2>
                <a target="_blank" rel="noreferrer" href={this.state.link}> Click here to see more weather information</a>
            </div>
        );
    }
}

export default Weather;

