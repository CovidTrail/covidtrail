import React from "react";
import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Grid,
  Input,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  TextField,
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import SimpleSchema from "simpl-schema";

const profileStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "lg",
    margin: "2.7em auto",
    alignItems: "center",
    border: 0,
  },
  grid: {
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "primary",
    margin: "35px 0",
    fontWeight: "bold",
  },
  textContent: {
    margin: 4,
    fontSize: "20px",
  },
  input: {
    "&::placeholder": {
      fontSize: "18px",
      // marginLeft: '3em',
    },
    height: "45px",
    width: "25em",
    border: "solid #FGFGFG",
    borderRadius: "4px",
    margin: "0 0 1em 0",
  },
  button: {
    margin: "1em",
    width: "100px",
    height: "45px",
  },
});

const Profile = (prop) => {
  const classes = profileStyle();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const schema = new SimpleSchema({
    // const
  });
  // const firstName = Meteor.users.findOne(this.userId).firstname;
  return (
    <Container className={classes.container}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} className={classes.grid}>
          <Typography className={classes.title} variant="h2" color="primary">
            Profile
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid>
            <Grid item xs={12} className={classes.grid}>
              <Typography className={classes.textContent}>
                First Name
              </Typography>
              <Input
                className={classes.input}
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
              ></Input>
            </Grid>
            <Grid item xs={12} className={classes.grid}>
              <Typography className={classes.textContent}>Last Name</Typography>
              <Input
                className={classes.input}
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
              ></Input>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textContent}>Email</Typography>
              <Input
                className={classes.input}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
              ></Input>
            </Grid>
            <Grid item xs={12}>
              <div style={{ textAlign: "right" }}>
                <Button className={classes.button} href="/">
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Update
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default Profile;
