import React, { Component } from "react";
import "./ProfileView.css";

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: props.profile?.firstname || "",
      lastname: props.profile?.lastname || "",
      height: props.profile?.height || "",
      weight: props.profile?.weight || "",
      profilepicture: props.profile?.profilepicture || "",
    };
  }

  onEdit() {
    this.setState({editing: true});
  }

  render() {
    return (
      <div>
        <span className="label">First name:</span>
        <span className="item">{this.state.firstname}</span>
        <br></br>
        <br></br>
        <span className="label">Last name:</span>
        <span className="item">{this.state.lastname}</span>
        <br></br>
        <br></br>
        <span className="label">Height:</span>
        <span className="item">{this.state.height}</span>
        <br></br>
        <br></br>
        <span className="label">Weight:</span>
        <span className="item">{this.state.weight}</span>
        <br></br>
        <br></br>
        <img src={this.state.profilepicture} alt="" />
        <br></br>
        <br></br>
        <button onClick={this.props.onClick}>Edit</button>
      </div>
    );
  }
}
export default ProfileView;
