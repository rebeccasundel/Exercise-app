import React, { Component } from "react";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import axios from "axios";
import ProfileView from "../components/ProfileView/ProfileView";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      editing: false,
    };
  }

  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/profile/${this.props.user._id}`)
      .then((result) => {
        this.setState({ profile: result.data }, () => {
          this.setState({ editing: false });
        });
      });
  }

  onEdit() {
    this.setState({ editing: true });
  }

  onCancel() {
    this.setState({ editing: false });
  }

  onSave() {
    this.getUserProfile();
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.editing ? "Edit " : !this.state.profile ? "New " : "My "}
          Profile
        </h1>

        {this.state.profile && !this.state.editing ? (
          <ProfileView
            profile={this.state.profile}
            onClick={() => this.onEdit()}
          />
        ) : null}
        {!this.state.profile || this.state.editing ? (
          <ProfileForm
            userId={this.props.user._id}
            editing={this.state.editing}
            profile={this.state.profile}
            onCancel={() => this.onCancel()}
            onSave={() => this.onSave()}
          />
        ) : null}
        <h4>Click EDIT to update your profile</h4>
        <h4>Click SUBMIT to save your profile</h4>
        <h4>Click CANCEL to go back to your profile</h4>
      </div>
    );
  }
}
