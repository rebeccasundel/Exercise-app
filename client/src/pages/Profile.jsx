import React, { Component } from "react";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import axios from 'axios';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      

    };

  }
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/profile/${this.props.user._id}`)
    .then(response => {
        console.log (response)
       

    })
}
  render() { 
    return <div>
      <h1> Profile </h1>
      <ProfileForm userId={this.props.user._id}/>
    </div>;
  }
}
 