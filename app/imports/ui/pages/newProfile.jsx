import React from "react";
import { UserProfiles } from "../../api/user/UserProfile";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button, Typography, Grid, Container, Box, MenuItem, InputLabel, Select, FormControl, Input,
} from "@material-ui/core";
import { useState } from "react";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import SimpleSchema from "simpl-schema";
import swal from "sweetalert";

const useStyles = makeStyles({
  container: {
    maxWidth: "lg",
    display: "flex",
    flexDirection: "column",
    marginTop: "3em",
    marginBottom: "3em",
  },
  grid: {
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "primary",
    marginTop: 10,
    fontWeight: "bold",
  },
  textContent: {
    margin: 2,
    fontSize: 25,
  },
  input: {
    "&::placeholder": {
      fontSize: 20,
      paddingLeft: "1em",
    },
    height: "3em",
    width: "30em",
    border: "solid black",
    borderRadius: "1em",
    margin: "0 0 1em 0",
  },
  button: {
    margin: "1em 0 1em 0",
  },
  formControl: {
    minWidth: 200,
    paddingTop: 5,
    paddingBottom: 5,
  },
  inputLabel: {
    //textAlign: 'center',
    //textAlign: 'center',
    //justifyContent: 'center',
    //paddingLeft: 150,
  },
  box: {
    textAlign: "center",
    justifyContent: "center",
  },
});

const newProfile = (props) => {
  const classes = useStyles();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { user, userId, dateOfSubmission, currentProfile, ready } = props;
  // const handleChange = (e) => {
  //   setVaccineName(e.target.value);
  //   console.log(vaccineName);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    currentProfile.map((x) => {
      UserProfiles.remove({ _id: x._id });
    });
    UserProfiles.insert(
        {
          userId,
          firstName,
          lastName,
          email,
          dateOfSubmission,
        },
        (error) => {
          if (error) {
            swal("Error", "Missing required fields", "error").then(function () {
              window.location = "/newprofile";
            });
          } else {
            swal({
              text: "Success!",
            }).then(function () {
              window.location = "/profile";
            });
          }
        }
    );
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
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>First Name</Typography>
                    <Input
                        className={classes.input}
                        id="firstName"
                        name="firstName"
                        type="firstName"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    ></Input>
                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Last Name</Typography>
                    <Input
                        className={classes.input}
                        id="lastName"
                        name="lastName"
                        type="lastName"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    ></Input>
                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Email</Typography>
                    <Input
                        className={classes.input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                  </Grid>
                </Grid>
            <Grid item xs={12}>
              <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Container>
  );
};

newProfile.propTypes = {
  user: PropTypes.string,
  userId: PropTypes.string,
  dateOfSubmission: PropTypes.string,
  currentProfile: PropTypes.array,
  ready: PropTypes.bool.isRequired,
};

const newProfileContainer = withTracker(() => {
  const subscription = Meteor.subscribe("UserProfile");
  return {
    user: Meteor.user() ? Meteor.user().username : "",
    userId: Meteor.userId(),
    dateOfSubmission: Date(),
    currentProfile: Meteor.user() ? UserProfiles.find({ userId: Meteor.userId() }, {fields: {_id: 1}}).fetch() : [],
    ready: subscription.ready(),
  };
})(newProfile);

export default withRouter(newProfileContainer);
