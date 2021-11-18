import "../App.css";
import Weather from "../components/Weather/Weather";
import WorkoutSessionsDisplay from "../components/WorkoutSessionDisplay/WorkoutSessionDisplay";

function HomePage(props) {
  return (
    <div className="App">
      <Weather />
      <br></br>
      <br></br>
      <br></br>
      <h1>Choose your own uinque weather based exercise workout plan</h1>
      <br></br>
      <br></br>
      <button className="button__create" type="Create a new workout today!">
            Create a new workout today!
          </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>Previous Workout Sessions</h2>
      <br></br>
      <br></br>
      <WorkoutSessionsDisplay
      userId={props.user._id}
      />

      {/* add carousel feature with previous workout sessions */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer>Powered by Ironhack Student </footer>
      
    </div>
  );
}

export default HomePage;
