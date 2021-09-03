import React from "react";
import { Meteor } from "meteor/meteor";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/Login.jsx";
import Register from "../pages/Register";

import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Checkin from "../pages/Checkin";

const Root = (props) => {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/checkin" component={Checkin} />
          {/* <Route path="/about" component={About} />  */}
          <Route path="/register" component={Register} />
          {/* <Route component={NotFound} /> */}
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer/>
      </Router>
  );
};

export default Root;
