import { Meteor } from "meteor/meteor";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Button } from "@material-ui/core";

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
    width: "25%",
    border: 0,
    borderRadius: 3,
    // height: 48,
    // padding: "0 30px",
  },
  input: {
    width: "100%",
    height: "50px",
    margin: "0 0 25px 0",
  },
  label: {
    fontSize: "12px",
  },
  button: {
    width: "100px",
    height: "45px",
    background: "#4350AF",
    margin: "25px 0 25px 0",
    color: "#FFFFFF",
    "&:hover": {
      opacity: "90%",
    },
  },
  error: {
    color: "#FF0000",
  },
});

export default Login = ({ location, history }) => {
  const classes = useStyles();

  useEffect(() => {
    if (Meteor.userId()) {
      history.push("/profile");
    }
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        console.log(err.reason);
        setError(err.reason);
      } else {
        history.push("profile");
        console.log(Accounts.users);
      }
    });
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.loginText}>Login</h1>
      {error && <span className={classes.error}>{error}</span>}
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="email" className={classes.label}> Email address</label> */}
        <Input
          className={classes.input}
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        {/* <label htmlFor="password" className={classes.label}> Password</label> */}
        <Input
          className={classes.input}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button className={classes.button} type="submit">
          Login
        </Button>
      </form>
      <span>or</span>
      <Button
        className={classes.button}
        onClick={(e) => history.push("/register")}
      >
        Sign up
      </Button>
    </div>
  );
};
