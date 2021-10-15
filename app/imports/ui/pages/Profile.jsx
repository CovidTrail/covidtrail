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
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { UserProfiles } from '../../api/user/UserProfile';
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
  profInfo: {
    boxShadow: '0px 0px 10px 0px',
    borderRadius: '16px',
    padding: '2em 8em 3em 8em',
  },
  textContent: {
    margin: 2,
    fontSize: 25,
    textAlign: "center",
  },
  button: {
    "&:hover": {
      backgroundColor: '#3f51b6',
    },
    margin: '1em 1em 1em 1em ',
    textAlign: 'center',
    display: 'flex',
    borderRadius: '10px',
    backgroundColor: '#3f51b5',
    color: 'White',
  },
});

const Profile = (props) => {
  const { userTest } = props;
  console.log(userTest);
  const userLength = userTest.length;
  var boolean = "";
  if (userLength > 0 ) {
    boolean = "Yes";
  } else {
    boolean = "No";
  }
  userTest.map( result => {
    firstName = result.firstName;
    lastName = result.lastName;
    email = result.email;
  })
  const classes = profileStyle();
    return (
        <Container className={classes.container}>
          { boolean === "Yes" ? (
              <Grid container className={classes.grid}>
                <Grid item xs={12} className={classes.grid}>
                  <Typography className={classes.title} variant='h2' color='primary'>
                    Profile
                  </Typography>
                </Grid>
                <Grid className={classes.profInfo} container>
                  <Grid item xs={12} className={classes.grid}>
                    <Typography className={classes.textContent}>First Name: {firstName}</Typography>
                    <Typography className={classes.textContent}>Last Name: {lastName} </Typography>
                    <Typography className={classes.textContent}>Email: {email} </Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.grid}>
                      <Button className={classes.button} href="/">Back</Button>
                  </Grid>
                  <Grid item xs={6} className={classes.grid}>
                    <Button className={classes.button} href="/newprofile">Resubmit Profile</Button>
                  </Grid>
                </Grid>
              </Grid>
          ) : (
              <Button className={classes.submitButton} href="/newProfile">Create Profile</Button>
          )}
        </Container>
  );
};

Profile.propTypes = {
  userTest: PropTypes.array,
  ready: PropTypes.bool.isRequired,
}

const ProfileContainer = withTracker(() => {
  const subscription = Meteor.subscribe('UserProfile');
  return {
    userTest: UserProfiles.find().fetch(),
    ready: subscription.ready(),
  }
})(Profile);

export default withRouter(ProfileContainer);
