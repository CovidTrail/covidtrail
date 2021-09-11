import React from "react";
import { Button, Typography, Grid, List, ListItem, ListItemText, Container, Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const profileStyle = makeStyles({
  container: {
    maxWidth: 'lg',
    display: 'flex',
    flexDirection: 'column',
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
      verticalAlign: 'center',
      padding: '0 0 0 1em',
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

const Profile = (prop) => {
  const classes = profileStyle();
    return (
        <Container className={classes.container}>
          <Grid container className={classes.grid}>
            <Grid item xs={12} className={classes.grid}>
              <Typography className={classes.title} variant='h2' color='primary'>
                Profile
              </Typography>
            </Grid>
            <Grid>
              <Grid item xs={12} className={classes.grid}>
                <Typography className={classes.textContent}>First Name</Typography>
                <input className={classes.input} id="firstName" name="firstName" type="text" placeholder="First Name"></input>
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
                <Button className={classes.button}>Back</Button>
                <Button variant="contained" color="primary" className={classes.button}>Update</Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
  );
};

export default Profile;