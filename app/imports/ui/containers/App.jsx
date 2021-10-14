import React from "react";
import { Meteor } from "meteor/meteor";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/Login.jsx";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Profile from "../pages/Profile";
import newProfile from "../pages/newProfile";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Checkin from "../pages/Checkin";
import Vaccination from '../pages/Vaccination';
import SubmitVaccination from '../pages/SubmitVaccination';
import Form from "../pages/newProfile";

const Root = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/checkin" component={Checkin} />
        {/* <Route path="/about" component={About} />  */}
        <Route path="/register" component={Register} />
        {/* <Route component={NotFound} /> */}
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/newprofile" component={newProfile} />
        <PrivateRoute path="/vaccination" component={Vaccination} />
        <PrivateRoute path="/submitvaccination" component={SubmitVaccination}/>
        <Route path="/Form" component={Form} />
      </Switch>
      <Footer />
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      );
    }}
  />
);

export default Root;
