import React, { Component } from "react";
import "./ExerciseListItem.css";

class ExerciseListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.exercise?._id || "",
      name: props.exercise?.name || "",
      description: props.exercise?.description || "",
      duration: props.exercise?.duration || "",
      date: props.exercise?.date || "",
      profilepicture: props.exercise?.profilepicture || "",
    };
  }

  handleDelete(id) {
    this.props.onDelete(this.state.id);
  }

  render() {
    return (
      <div className="exercise-item-container">
        <div className="exercise-item">
          <span className="item-label">Name: </span>
          <span className="item">{this.state.name}</span>
        </div>
        <div className="exercise-item">
          <span className="item-label">Description: </span>
          <span className="item">{this.state.description}</span>
        </div>
        <div className="exercise-item">
          <span className="item-label">Duration: </span>
          <span className="item">{this.state.duration}</span>
        </div>
        <div className="exercise-item">
          <span className="item-label">Date: </span>
          <span className="item">{this.state.date}</span>
        </div>
        <img src={this.state.profilepicture} alt="" />
        <button onClick={() => this.handleDelete()}>Delete</button>
      </div>
    );
  }
}
export default ExerciseListItem;
