import React, { Component } from "react";
import "./ExerciseList.css";
import ExerciseListItem from "./ExerciseListItem/ExerciseListItem";

class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.exercises?._id || "",
      name: props.exercises?.name || "",
      description: props.exercises?.description || "",
      duration: props.exercises?.duration || "",
      date: props.exercises?.date || "",
    };
  }

  handleDelete(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <div className="exercise-main-list">
        <h2>Exercise List</h2>
        <div className="exercise-list-container">
          {this.props.exercises.map((e, index) => {
            return (
              <ExerciseListItem
                exercise={e}
                onDelete={(id) => this.handleDelete(id)}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default ExerciseList;
