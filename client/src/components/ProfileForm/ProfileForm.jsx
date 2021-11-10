
import React, { Component } from "react";
import axios from 'axios';
class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: props.userId,
          firstname: 'Rebecca',
          lastname: '',
          height: '',
          weight: '',
          profilepicture: '',

        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmitForm=this.onSubmitForm.bind(this);
      }
      
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }
onSubmitForm(event){
    event.preventDefault()
    console.log (this.state)
    axios.post(`${process.env.REACT_APP_SERVER_URL}/profile/update`,this.state)
    .then(response => {
        console.log (response)
      
    })
}

  render() { 
    return <form>
    <label> Firstname</label>
    <input type="text" value={this.state.firstname} onChange={this.handleInputChange} name="firstname"/>
    <br></br>
    <label> Lastname</label>
    <input type="text" value={this.state.lastname} onChange={this.handleInputChange} name="lastname"/>
    <br></br>
    <label> Height</label>
    <input type="text" value={this.state.height} onChange={this.handleInputChange} name="height"/>
    <br></br>
    <label> Weight</label>
    <input type="text" value={this.state.weight} onChange={this.handleInputChange} name="weight"/>
    <br></br>
    <label> Profile Picture</label>
    <input type="text"  value={this.state.profilepicture} onChange={this.handleInputChange} name="profilepicture"/>
   <br></br>
    <button onClick={this.onSubmitForm}>Submit </button>
</form>
  }
}
export default ProfileForm