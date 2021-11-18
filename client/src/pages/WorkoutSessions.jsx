import React, { Component } from "react";
import axios from "axios";
import ExerciseList from "../components/ExerciseList/ExerciseList";
import WorkoutSessionsList from "../components/WorkoutSessionsList/WorkoutSessionsList";
import WorkoutSessionsForm from "../components/WorkoutSessionsForm/WorkoutSessionsForm";

export default class WorkoutSessions extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      workoutSessions: null,
      exercises: null,
      editing: false,
      savedExercises: []
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
handleAdd(id) {
    const exercise = this.state.exercises.find(exercise => exercise._id === id)
   
    this.setState(prevState => ({
        savedExercises: [...prevState.savedExercises, exercise]
      }))
}

handleRemove(id) {
    const exercises = this.state.savedExercises.filter(exercise => exercise._id !== id)
    this.setState({savedExercises: exercises})

}

  handleCreateNew() {
    this.setState({editing: true});
  }

  handleAfterSave() {
    this.setState({editing: false});
    this.getWorkoutSessions()
  }


  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Create a new workout session</h1>
         <h2> Or</h2>
         <h1>Use an existing session</h1>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        <WorkoutSessionsList onCreateNew={() => this.handleCreateNew()} />

        {this.state.exercises?.length && this.state.editing ? (
         <>
         <WorkoutSessionsForm 
         savedExercises={this.state.savedExercises}
         userId={this.props.user._id}
         onRemove={(id)=>this.handleRemove(id)}
         onSave={()=>this.handleAfterSave()}
         
         />
         
         <ExerciseList
            adding={true}
            exercises={this.state.exercises}
            onDelete={id => this.handleDelete(id)}
            onAdd={id => this.handleAdd(id)}
          />
          </>
        ) : null}
         <br></br>
         <br></br> 
         <br></br>
      </div>
    );
  }
}
