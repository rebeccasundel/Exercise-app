import React, { Component } from "react";
import "./ProfileForm.css";
import axios from "axios";
class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      editing: props.editing,
      firstname: props.profile?.firstname || "",
      lastname: props.profile?.lastname || "",
      height: props.profile?.height || "",
      weight: props.profile?.weight || "",
      profilepicture: props.profile?.profilepicture || "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onCancel(event) {
    event.preventDefault();
    this.props.onCancel();
  }

  onSubmitForm(event) {
    const formData = this.createFormData();
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/profile/${this.state.editing ? 'update' : 'add'}`, formData)
      .then((response) => {
        this.props.onSave();
      })
      .catch(() => console.log('error'));
  }

  createFormData() {
    return {
      userId: this.state.userId,
      firstname: this.state.firstname || "",
      lastname: this.state.lastname || "",
      height: this.state.height || "",
      weight: this.state.weight || "",
      profilepicture: this.state.profilepicture || "",
    }
  }

  render() {
    return (
      <form>
        <label> Firstname</label>
        <input
          type="text"
          value={this.state.firstname}
          onChange={this.handleInputChange}
          name="firstname"
        />
        <br></br>
        <label> Lastname</label>
        <input
          type="text"
          value={this.state.lastname}
          onChange={this.handleInputChange}
          name="lastname"
        />
        <br></br>
        <label> Height</label>
        <input
          type="text"
          value={this.state.height}
          onChange={this.handleInputChange}
          name="height"
        />
        <br></br>
        <label> Weight</label>
        <input
          type="text"
          value={this.state.weight}
          onChange={this.handleInputChange}
          name="weight"
        />
        <br></br>
        <label> Profile Picture</label>
        <input
          type="text"
          value={this.state.profilepicture}
          onChange={this.handleInputChange}
          name="profilepicture"
        />
        <br></br>
        <button type="button" onClick={event => this.onCancel(event)}>Cancel</button>
        <button onClick={this.onSubmitForm}>Submit</button>
      </form>
    );
  }
}
export default ProfileForm;
