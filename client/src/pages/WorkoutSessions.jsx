import React, { Component } from "react";
import axios from "axios";
import ExerciseList from "../components/ExerciseList/ExerciseList";
import WorkoutSessionsList from "../components/WorkoutSessionsList/WorkoutSessionsList";

export default class WorkoutSessions extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      workoutSessions: null,
      exercises: null,
      editing: false
    };
    this.onHandleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getExercises();
    this.getWorkoutSessions();
  }

  getExercises() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/exercises`)
      .then((result) => {
        this.setState({ exercises: result.data });
      });
  }

  getWorkoutSessions() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/workout-sessions/${this.props.user._id}`)
      .then((result) => {
        this.setState({ workoutSessions: result.data });
      });
  }

  handleSave(formData) {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/exercises/add`, formData)
      .then((response) => {
        this.getExercises();
      })
      .catch(() => console.log("error"));
  }

  handleDelete(id) {
    console.log("delete", id);
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/exercises/${id}`)
      .then((result) => {
        this.getExercises();
      })
      .catch(err => console.log("error", err));
  }

  handleCreateNew() {
    console.log('create new')
    this.setState({editing: true});
  }

  render() {
    return (
      <div>
        <WorkoutSessionsList onCreateNew={() => this.handleCreateNew()} />

        {this.state.exercises?.length && this.state.editing ? (
          <ExerciseList
            exercises={this.state.exercises}
            onDelete={id => this.handleDelete(id)}
          />
        ) : null}
      </div>
    );
  }
}
