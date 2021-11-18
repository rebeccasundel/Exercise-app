import axios from "axios";
import React, { Component } from "react";
import "./WorkoutSessionDisplay.css"

export default class WorkoutSessionsDisplay extends Component {
  constructor(props) {
    console.log(props);
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
      .get(`${process.env.REACT_APP_SERVER_URL}/workout-sessions/${this.props.userId}`)
      .then((result) => {
          console.log(result)
        this.setState({ workoutSessions: result.data });
      });
  }


  render() {
    return (
      <div>
        {this.state.workoutSessions.map((workout, index)=>{
            return <div className="card" key="index">
            <span className="label">Workout Session Name</span>
            <span className="item">{workout.name}</span>
             <br></br>
             <br></br>
             <span className="label">Description:</span>
            <span className="item">{workout.description}</span>
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
             {workout.exercises.map((exercise, i)=>{
                 return <div key="exercise._id">
                     {exercise.name}
                 </div>
             })}

            </div>
        })}
      </div>
    );
  }
}