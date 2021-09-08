import React from "react";
import ReactDOM from 'react-dom';
import { Meteor } from "meteor/meteor";
import { Link } from 'react-router-dom';
import { Button, Typography, Grid, List, ListItem, ListItemText, Container, Box } from '@material-ui/core';
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
    marginTop: 10,
  },

  typography_secondary: {
    /* Only prop needed to center text*/
    textAlign: 'center',
    /* Does not pass Material UI's color. */
    color: 'secondary',
    marginTop: 10,
  },

  grid: {
    /*Top Grid element*/
    /*flexDirection: 'row',*/
    justifyContent: 'center',
  },

  box: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',

  }

}));

const Home = (props) => {

  /* Building the Main Page */
  /* Column width max is 12. */

  /*Import the styling above. */
  const classes = useStyles();

  return (
      <Container className={classes.container}>
        <Grid container className={classes.grid}>
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
            <Box className={classes.box}>
              <Button component={Link} to={"/Login"} className={classes.button} variant='outlined' color='primary'>
                Sign In
              </Button>
            </Box>
          </Grid>


          <Grid container>
            <Grid item xs={6}>
              <Typography className={classes.typography_secondary} variant='h6' color='secondary'>
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

              <Box className={classes.box}>
                <Button component={Link} to={"/Register"} className={classes.button} variant='outlined' color='primary'>
                  Register Here
                </Button>
              </Box>

            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.typography_primary} variant='h6' color='primary'>
                How to do your Part to Stop the Trail
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


        </Grid>
      </Container>
  );
};

export default Home;
