import React, { Component } from "react";
import NewExercise from "../components/NewExercise/NewExercise";
import axios from "axios";
import ExerciseList from "../components/ExerciseList/ExerciseList";
export default class ExercisesList extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      exercises: null,
    };
    this.onHandleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getExercises();
  }

  getExercises() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/exercises`)
      .then((result) => {
        this.setState({ exercises: result.data });
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

  render() {
    return (
      <div>
        <NewExercise
          userId={this.props.user._id}
          onSave={(formData) => this.handleSave(formData)}
        />

        {this.state.exercises?.length ? (
          <ExerciseList
            exercises={this.state.exercises}
            onDelete={id => this.handleDelete(id)}
          />
        ) : null}
      </div>
    );
  }
}
