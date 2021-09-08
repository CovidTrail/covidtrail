import React from "react";
import ReactDOM from 'react-dom';
import { Meteor } from "meteor/meteor";
import { Link } from 'react-router-dom';
import { Button, Typography, Grid, List, ListItem, ListItemText, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

/* Create a upper level class to stylize the elements*/
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 'lg',
    display: 'flex',
    flexDirection: 'column',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  typography_primary: {
    /* Only prop needed to center text*/
    textAlign: 'center',
    /* Does not pass Material UI's color. */
    color: 'primary',
  },

  typography_secondary: {
    /* Only prop needed to center text*/
    textAlign: 'center',
    /* Does not pass Material UI's color. */
    color: 'secondary',
  },

  grid: {
    /*Top Grid element*/
    /*flexDirection: 'row',*/
    justifyContent: 'center',
  },

}));

const Home = (props) => {

  /* Building the Main Page */
  /* Column width max is 12. */

  /*Import the styling above. */
  const classes = useStyles();

  return (
      <Container className={classes.container}>
        <Grid className={classes.grid}>
          <Grid item xs={12} className={classes.grid}>
            <Typography className={classes.typography_primary} variant='h2' color='primary'>
              Stop the Trail with You!
            </Typography>
          </Grid>

          <Grid item className={classes.grid} xs={12}>

            <Typography className={classes.typography_secondary} variant='h4' color='secondary'>
              Do you your part to prevent community spread. Track your symptoms with our application.
            </Typography>

          </Grid>

          <Grid item className={classes.grid} xs={12}>
            <Typography className={classes.typography_primary} variant='h6' color='primary'>

              Already a member?<br/>
            </Typography>
              <Button className={classes.button} variant='outlined' color='primary'>
                Sign In
              </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography align='center' variant='h6' color='secondary'>

              Not yet a member? Become one in 3 easy steps.
            </Typography>

            <List>
              <ListItem>
                <ListItemText>
                  1.) Click Register Here
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  2.) Enter your Personal Information
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  3.) Click Register
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  Done!
                </ListItemText>
              </ListItem>
            </List>

            <Typography align='center'>
              <Button variant='outlined' color='primary'>
                Register Here
              </Button>
            </Typography>

          </Grid>

          <Grid item xs={6}>
            <Typography align='center' variant='h6' color='primary'>
              How to do your Part to Stop the Trail
              <br/>
              <br/>
            </Typography>

            <List>
              <ListItem>
                <ListItemText>
                  1.) Login Everyday
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  2.) Track your Symptoms
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  3.) Stay home when you are feeling Sick
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  4.) Get Vaccinated if you are able
                </ListItemText>
              </ListItem>
            </List>

          </Grid>

        </Grid>
      </Container>
  );
};

export default Home;
