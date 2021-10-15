import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Button } from "@material-ui/core";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Roles } from "meteor/alanning:roles";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  loginText: {
    fontSize: "50px",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    margin: "150px auto",
    textAlign: "center",
    alignItems: "center",
    width: "35%",
    // height: 48,
    // padding: "0 30px",
  },
  input: {
    width: "100%",
    height: "50px",
    margin: "15px 0",
  },
  button: {
    width: "100px",
    height: "45px",
    background: "#4350AF",
    margin: "15px 0 15px 0",
    color: "#FFFFFF",
    "&:hover": {
      opacity: "90%",
    },
  },
});

export default Register = ({ history }) => {
  const classes = useStyles();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Meteor.call("createAccount", firstname, lastname, email, password, "user");
    history.push("/Login");
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.loginText}>Register</h1>
      {error && <span className={classes.error}>{error}</span>}
      <form onSubmit={handleSubmit}>
        <Input
          fullWidth
          className={classes.input}
          id="firstname"
          name="firstname"
          placeholder="First Name"
          onChange={(e) => setFirstname(e.target.value)}
        ></Input>
        <Input
          fullWidth
          className={classes.input}
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          onChange={(e) => setLastname(e.target.value)}
        ></Input>
        <Input
          fullWidth
          className={classes.input}
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          fullWidth
          className={classes.input}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button className={classes.button} type="submit">
          {" "}
          Sign up
        </Button>
      </form>
      <span>or</span>
      <Button
        className={classes.button}
        onClick={(e) => history.push("/login")}
      >
        Log in
      </Button>
    </div>
  );
};
