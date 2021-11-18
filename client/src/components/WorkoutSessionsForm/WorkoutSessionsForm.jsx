import React, { Component } from "react";
import "./WorkoutSessionsForm.css"
import axios from "axios";

class WorkoutSessionsForm extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      userId: props.userId || "",
      workoutSessionName: props.workoutSession?.name || "",
      description: props.workoutSession?.description || "",
      duration: props.workoutSession?.duration || "",
      date: props.workoutSession?.date || "",
    };
    

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);

  }

  // componentDidUpdate(prevProps) {
  //   if(prevProps.workoutSessionName!==this.props.workoutSessionName
  //   &&prevProps.description!==this.props.description
  //   &&prevProps.duration!==this.props.duration
  //   &&prevProps.date!==this.props.date
  //   )
  //   console.log(this.props)
  //   this.setState({
  //     workoutSessionName: this.props.workoutSession?.name || "",
  //     description: this.props.workoutSession?.description || "",
  //     duration: this.props.workoutSession?.duration || "",
  //     date: this.props.workoutSession?.date || "",
  //   })
    
  // }

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
    const savedExercises=[...this.props.savedExercises]
    const formData={...this.state, savedExercises}
    axios
    .post(`${process.env.REACT_APP_SERVER_URL}/workout-sessions/add`, formData)
    .then((response) => {
      this.props.onSave();
    })
    .catch(() => console.log('error'));
  }

  handleRemove(event,id){
    event.preventDefault()
    this.props.onRemove(id)
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
        <label> Description</label>
        <input
          type="text"
          value={this.state.description}
          onChange={this.handleInputChange}
          name="description"
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
            return <div key={index} className="exercise-form-item">
                <span>{exercise.name}</span>
                <button onClick={event=>this.handleRemove(event, exercise._id)}>Remove</button>
            </div>
        })}
        </div>
        <br></br>
        <button type="button" onClick={event => this.onCancel(event)}>Cancel</button>
        <button onClick={this.onSubmitForm}>Save</button>
      </form>
    );
  }
}
export default WorkoutSessionsForm;
