import axios from "axios";
import React, { Component } from "react";
import "./WorkoutSessionDisplay.css";
import { withRouter } from "react-router-dom";

class WorkoutSessionsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutSessions: [],
    };
  }

  componentDidMount() {
    this.getWorkoutSessions();
  }

  getWorkoutSessions() {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/workout-sessions/${this.props.userId}`
      )
      .then((result) => {
        this.setState({ workoutSessions: result.data });
      });
  }

  handleClick(index) {
    this.props.history.push(
      "/pages/WorkoutSessions/" + this.state.workoutSessions[index]._id
    );
  }

  render() {
    return (
      <div className="card-container">
        {this.state.workoutSessions.map((workout, index) => {
          return (
            <div
              className="card"
              key={workout._id}
              onClick={() => this.handleClick(index)}
            >
              <span className="label">Workout Session Name</span>
              <span className="item">{workout.name}</span>
              <br></br>
              <br></br>
              <span className="label">Date:</span>
              <span className="item">{workout.date}</span>
              <br></br>
              <br></br>
              <span className="label">Duration</span>
              <span className="item">{workout.duration}</span>
              <br></br>
              <br></br>
              {workout.exercises.map((exercise, i) => {
                return <div key={exercise._id}>{exercise.name}</div>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(WorkoutSessionsDisplay);
