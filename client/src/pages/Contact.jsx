import React from "react";

export default function Contact() {
    return (
        <div class="row">

  <div>
    <h1>Contact </h1>
    <br></br>
    <p>Contact me for more information on this app or for questions and comments.</p>
    <br></br>
  </div>
  <div class="column">
      <img src="https://gisgeography.com/wp-content/uploads/2020/06/Miami-Map-Feature.jpg" alt="miami"></img>
    </div>
    <div class="column">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit"></input>
</div>
</div>

    );
}

// Needs to be able to submit to backend and submit button work