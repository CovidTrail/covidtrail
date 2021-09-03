import React from "react";
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
    margin: "15px 0",
  },
  button: {
    width: "100px",
    height: "45px",
    background: "#4350AF",
    color: "#FFFFFF",
    "&:hover": {
      opacity: "90%",
    },
  },
});

export default Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.loginText}>Login</h1>
      <Input
        className={classes.input}
        id="email"
        name="email"
        placeholder="Email"
      ></Input>
      <Input
        className={classes.input}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      ></Input>
      <Button className={classes.button} type="submit">
        {" "}
        Login
      </Button>
    </div>
  );
};
