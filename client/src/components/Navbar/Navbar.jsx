import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        {CONSTS.CAPITALIZED_APP} 
      </Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
          <Link to={PATHS.WORKOUTSESSIONSPAGE} className="authLink">
              Workout Sessions
            </Link>
            <Link to={PATHS.EXERCISESPAGE} className="authLink">
              Exercises
            </Link>
            <Link to={PATHS.PROFILEPAGE} className="authLink">
              Profile
            </Link>
        
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.ABOUTPAGE} className="authLink">
              About
            </Link>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.CONTACTPAGE} className="authLink">
              Contact
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
