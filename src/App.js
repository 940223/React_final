import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import User from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Login from "./components/login";
import Movie from "./components/Movie.js"
//import Login from "./index1";
import Favorite from './components/favorites'
import ReactGA from 'react-ga';
ReactGA.initialize('G-MHWCPJES7K', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
});
ReactGA.pageview(window.location.pathname + window.location.search);
class App extends Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/movie" className="navbar-brand">
            電影牆
          </a>  
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to={"/movie"} className="nav-link">
                movie
            </Link>  
            </li>

            <li className="nav-item">
            <Link to={"/favorite"} className="nav-link">
              favorite
            </Link>  
            </li>

            <li className="nav-item">
              <Link to={"/User"} className="nav-link">
                all_users
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Sign Up
              </Link>
            </li>

            
            <li className="nav-item">
            <Link to={"/login"} className="nav-link">
                Login
            </Link>  
            </li>

          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/User"]} component={TutorialsList} />
            <Route exact path="/movie" component={Movie} />
            <Route exact path="/Favorite" component={Favorite} />
            <Route exact path="/add" component={AddTutorial} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;