import React from "react";
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, List, ListItem, ListItemText, Container, Box, TextField} from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { UserProfiles } from '../../api/user/UserProfile';

const profileStyle = makeStyles({
  container: {
    maxWidth: 'lg',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '3em',
    marginBottom: '3em',
  },
  grid: {
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'primary',
    marginTop: 10,
    fontWeight: 'bold',
  },
  textContent: {
    margin: 2,
    fontSize: 25,
  },
  input: {
    "&::placeholder": {
      fontSize: 20,
      paddingLeft: '1em',
    },
    height: '3em',
    width: '30em',
    border: 'solid black',
    borderRadius: '1em',
    margin: '0 0 1em 0',
  },
  button: {
    margin: '1em 0 1em 0',
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
              <Grid>
                  <Grid item xs={12} className={classes.grid}>
                    <Typography className={classes.textContent}>First Name</Typography>
                    <input className={classes.input} id="firstName" name="firstName" type="text" value={firstName}></input>
                  </Grid>
                  <Grid item xs={12} className={classes.grid}>
                    <Typography className={classes.textContent}>Last Name</Typography>
                    <input className={classes.input} id="lastName" name="lastName" type="text" placeholder="Last Name"></input>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.textContent}>Email</Typography>
                    <input className={classes.input} id="email" name="email" type="email" placeholder="Email"></input>
                  </Grid>
                  <Grid item xs={12}>
                    <Button className={classes.button} href="/">Back</Button>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>Update</Button>
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
