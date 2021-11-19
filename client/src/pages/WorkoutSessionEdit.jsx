import React, { Component } from "react";
import axios from "axios";

import ExerciseList from "../components/ExerciseList/ExerciseList";
import WorkoutSessionsForm from "../components/WorkoutSessionsForm/WorkoutSessionsForm";
import { withRouter } from "react-router";

class WorkoutSessionsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutSession: null,
      exercises: null,
      savedExercises: [],
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
      .get(
        `${process.env.REACT_APP_SERVER_URL}/workout-sessions/${this.props.user._id}`
      )
      .then((result) => {
        const workoutSession = result.data.find(
          (w) => w._id === this.props.match.params.id
        );
        this.setState({
          workoutSession,
          savedExercises: workoutSession.exercises,
        });
      });
  }

  handleSave(formData) {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/workout-sessions/${this.state.workoutSession._id}`, formData)
      .then((response) => {
        this.props.history.goBack();
      })
      .catch(() => console.log("error"));
  }

  handleDelete() {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/workout-sessions/${this.state.workoutSession._id}`)
      .then((result) => {
        this.props.history.goBack();
      })
      .catch((err) => console.log("error", err));
  }

  handleAdd(id) {
    const exercise = this.state.exercises.find(
      (exercise) => exercise._id === id
    );

    this.setState((prevState) => ({
      savedExercises: [...prevState.savedExercises, exercise],
    }));
  }

  handleRemove(id) {
    const exercises = this.state.savedExercises.filter(
      (exercise) => exercise._id !== id
    );
    this.setState({ savedExercises: exercises });
  }

  handleCreateNew() {
    this.setState({ editing: true });
  }

  handleAfterSave() {
    this.setState({ editing: false });
    this.getWorkoutSessions();
  }

  handleCancel() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <h1>Edit Current Workout </h1>

        <>
          {this.state.workoutSession ? (
            <WorkoutSessionsForm
              savedExercises={this.state.savedExercises}
              workoutSession={this.state.workoutSession}
              userId={this.props.user._id}
              onRemove={(id) => this.handleRemove(id)}
              onSave={(formData) => this.handleSave(formData)}
              onCancel={() => this.handleCancel()}
              onDelete={() => this.handleDelete()}
              editing={true}
            />
          ) : null}

          {this.state.exercises ? (
            <ExerciseList
              adding={true}
              exercises={this.state.exercises}
              onAdd={(id) => this.handleAdd(id)}
            />
          ) : null}
        </>

        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default withRouter(WorkoutSessionsEdit);
