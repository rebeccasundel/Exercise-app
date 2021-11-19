import React, { Component } from "react";
import "./WorkoutSessionsList.css";

class WorkoutSessionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: props.profile?.firstname || "",
      lastname: props.profile?.lastname || "",
      height: props.profile?.height || "",
      weight: props.profile?.weight || "",
      profilepicture: props.profile?.profilepicture || "",
    };
  }

  handleEdit() {
    this.props.onCreateNew();
  }

  render() {
    return (
      <div>
        <button className="button__create" onClick={() => this.handleEdit()}> Create New Session </button>
      </div>
    );
  }
}
export default WorkoutSessionsList;
