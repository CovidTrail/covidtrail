import React from "react";
import ReactDOM from 'react-dom';
import { Meteor } from "meteor/meteor";
import { Link } from 'react-router-dom';
import { Button, Typography, Grid, makeStyles, List, ListItem, Divider, ListItemText } from '@material-ui/core';
import lime from '@material-ui/core/colors/lime';

/* Create a upper level class to stylize the elements*/
const useStyles = makeStyles({
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  typography_primary : {
    align: 'center',
    color: 'primary',
  },

  typography_secondary : {
    align: 'center',
    color: 'secondary',
  },

  top_grid :{
    /*Top Grid element*/
    borderSpacing: 4,
  },

})


/* Colors */
const primary = lime[300];
const textPrimary = lime['A400'];
const accent = lime['A200'];

const Home = (props) => {

  /* Building the Main Page */
  /* Column width max is 12. */

  /*Import the styling above. */
  const classes = useStyles();
  return(
          <div>
            <Grid container direction= 'row' justifyContent='center' alignItems= 'center' className={classes.top_grid}>

              <Grid  item xs={12}>
                <Typography align = 'center' variant= 'h2' color= 'primary'>
                  Stop the Trail with You!
                </Typography>
              </Grid>

              <Grid item xs={12}>

                <Typography align = 'center' variant= 'h4' color='secondary'>
                  Do you your part to prevent community spread. Track your symptoms with our application.
                </Typography>

              </Grid>

              <Grid item xs = {12}>
                <Typography align= 'center' variant= 'h6' color= 'primary'>

                  Already a member?<br/>
                </Typography>
                <Typography align = 'center'>
                  <Button variant='outlined' color= 'primary'>
                  Sign In
                  </Button>
                </Typography>

              </Grid>
              <Grid item xs = {6} >
                <Typography align= 'center' variant= 'h6' color= 'secondary'>

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

                <Typography align = 'center'>
                  <Button variant='outlined' color= 'primary'>
                    Register Here
                  </Button>
                </Typography>

              </Grid>

              <Grid item xs = {6} >
                <Typography align= 'center' variant= 'h6' color= 'primary'>
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
          </div>
      );
  };

export default Home;
