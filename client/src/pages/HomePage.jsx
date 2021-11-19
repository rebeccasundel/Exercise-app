import "../App.css";
import Weather from "../components/Weather/Weather";
import WorkoutSessionsDisplay from "../components/WorkoutSessionDisplay/WorkoutSessionDisplay";
import { useHistory } from "react-router-dom";

function HomePage(props) {
  const history = useHistory();
  return (
    <div className="App">
      <div className="homepage__container">
        <div className="homepage__box">
          <h1>Choose your own unique weather based exercise workout plan</h1>
          <br></br>
          <br></br>
          <Weather />
          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <button
            onClick={() => history.push("/pages/WorkoutSessions")}
            className="button__create"
            type="Create a new workout today!"
          >
            Create a new workout today!
          </button>
        </div>
      </div>
      <br></br>

      {props?.user?._id ? (
        <>
          <h2>Previous Workout Sessions</h2>
          <br></br>
          <br></br>
          <WorkoutSessionsDisplay userId={props.user._id} />
        </>
      ) : null}

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
