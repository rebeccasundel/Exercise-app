import React, { Component } from "react";
import "./NewExercise.css";

class NewExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      name: "",
      description: "",
      duration: "",
      date: "",
      profilepicture: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSave(event) {
    const formData = this.createFormData();
    event.preventDefault();
    this.props.onSave(formData);
    this.setState({ name: "", description: "", duration: "", date: "" });
  }

  createFormData() {
    return {
      userId: this.state.userId,
      name: this.state.name || "",
      description: this.state.description || "",
      duration: this.state.duration || "",
      date: this.state.date || "",
      profilepicture: this.state.profilepicture || "",
    };
  }

  render() {
    return (
      <div>
        <h2>Create New Exercise</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
          />
          <br></br>
          <label>Description</label>
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange}
            name="description"
          />
          <br></br>
          <label>Duration</label>
          <input
            type="text"
            value={this.state.duration}
            onChange={this.handleInputChange}
            name="duration"
          />
          <br></br>
          <label>Date</label>
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleInputChange}
            name="date"
          />
          <br></br>
          <br></br>
          <label>Picture</label>
          <input
            type="text"
            value={this.state.profilepicture}
            onChange={this.handleInputChange}
            name="profilepicture"
          />
          <br></br>
          <br></br>
          <button className="button__save" onClick={(event) => this.handleSave(event)}>Save</button>
        </form>
      </div>
    );
  }
}
export default NewExercise;
