import React from "react";
import { Meteor } from "meteor/meteor";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../pages/Login.jsx";
import Register from "../pages/Register";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Root = (props) => {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          {/* <Route path="/about" component={About} />  */}
          <Route path="/register" component={Register} />
          {/* <Route component={NotFound} /> */}
        </Switch>
        <Footer/>
    </Router>
  );
};
export default Root;
