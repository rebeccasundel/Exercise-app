import React, { Component } from "react";
import "./WorkoutSessionsForm.css";

class WorkoutSessionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId || "",
      workoutSessionName: props.workoutSession?.name || "",
      duration: props.workoutSession?.duration || "",
      date: props.workoutSession?.date || "",
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

  onSubmitForm(event) {
    event.preventDefault();
    const savedExercises = [...this.props.savedExercises];
    const formData = { ...this.state, savedExercises };
    this.props.onSave(formData);
  }

  handleRemove(event, id) {
    event.preventDefault();
    this.props.onRemove(id);
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.onCancel();
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.onDelete();
  }

  render() {
    return (
      <form>
        <label> Workout Session Name</label>
        <input
          type="text"
          value={this.state.workoutSessionName}
          onChange={this.handleInputChange}
          name="workoutSessionName"
        />
        <br></br>
        <label> Duration</label>
        <input
          type="text"
          value={this.state.duration}
          onChange={this.handleInputChange}
          name="duration"
        />
        <br></br>
        <label> Date </label>
        <input
          type="date"
          value={this.state.date}
          onChange={this.handleInputChange}
          name="date"
        />
        <br></br>
        <div className="exercise-form-item-container">
          {this.props.savedExercises.map((exercise, index) => {
            return (
              <div key={index} className="exercise-form-item">
                <span>{exercise.name}</span>
                <button
                  className="button__remove"
                  onClick={(event) => this.handleRemove(event, exercise._id)}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
        <br></br>
        <button className="button__cancel" type="button" onClick={(event) => this.handleCancel(event)}>
          Cancel
        </button>
        <button className="button__save" onClick={this.onSubmitForm}>Save</button>
        {this.props.editing ? (
          <button className="button__delete" onClick={(event) => this.handleDelete(event)}>Delete</button>
        ) : null}
      </form>
    );
  }
}
export default WorkoutSessionsForm;
