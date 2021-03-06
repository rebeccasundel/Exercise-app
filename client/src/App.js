import React from "react";
import { Switch } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/About";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import ProtectedPage from "./pages/ProtectedPage";
import Signup from "./pages/Signup";
import ContactPage from "./pages/Contact";
import WorkoutSessions from "./pages/WorkoutSessions";
import NormalRoute from "./routing-components/NormalRoute";
import ProtectedRoute from "./routing-components/ProtectedRoute";
import Exercises from './pages/Exercises';
import { getLoggedIn, logout } from "./services/auth";
import * as PATHS from "./utils/paths";
import * as USER_HELPERS from "./utils/userToken";
import WorkoutSessionsEdit from "./pages/WorkoutSessionEdit";

class App extends React.Component {
  state = {
    user: null,
    isLoading: true,
  };

  componentDidMount = () => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return this.setState({
        isLoading: false,
      });
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        console.log("RES IN CASE OF FAILURE", res);
        // deal with failed backend call
        return this.setState({
          isLoading: false,
        });
      }
      this.setState({
        user: res.data.user,
        isLoading: false,
      });
    });
  };

  handleLogout = () => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return this.setState({
        user: null,
        isLoading: false,
      });
    }
    this.setState(
      {
        isLoading: true,
      },
      () => {
        logout(accessToken).then((res) => {
          if (!res.status) {
            // deal with error here
            console.error("💡 SOMETHING HAPPENED THAT HAS TO DEALT WITH", res);
          }

          USER_HELPERS.removeUserToken();
          return this.setState({
            isLoading: false,
            user: null,
          });
        });
      }
    );
  };

  authenticate = (user) => {
    this.setState({
      user,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />;
    }

    return (
      <div className="App">
        <Navbar handleLogout={this.handleLogout} user={this.state.user} />
        <Switch>
          <NormalRoute exact path={PATHS.HOMEPAGE} component={HomePage} user={this.state.user}/>
          <NormalRoute
            exact
            path={PATHS.ABOUTPAGE}
            authenticate={this.authenticate}
            component={AboutPage}
          />
           {/* <NormalRoute
            exact
            path={PATHS.EXERCISESPAGE}
            authenticate={this.authenticate}
            component={PATHS.EXERCISESPAGE}
          /> */}
          <NormalRoute
            exact
            path={PATHS.SIGNUPPAGE}
            authenticate={this.authenticate}
            component={Signup}
          />
           <NormalRoute
            exact
            path={PATHS.CONTACTPAGE}
            authenticate={this.authenticate}
            component={ContactPage}
          />
           {/* <NormalRoute
            exact
            path={PATHS.PROFILEPAGE}
            authenticate={this.authenticate}
            component={PATHS.PROFILEPAGE}
          /> */}
          <NormalRoute
            exact
            path={PATHS.LOGINPAGE}
            authenticate={this.authenticate}
            component={LogIn}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDPAGE}
            component={ProtectedPage}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROFILEPAGE}
            component={Profile}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.EXERCISESPAGE}
            component={Exercises}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.WORKOUTSESSIONSPAGE}
            component={WorkoutSessions}
            user={this.state.user}
          />
           <ProtectedRoute
          
            path={PATHS.WORKOUTSESSIONSEDITPAGE}
            component={WorkoutSessionsEdit}
            user={this.state.user}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
