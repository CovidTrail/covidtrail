import React from "react";
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  TextField,
  Menu,
  MenuItem,
  InputLabel,
  Select
} from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import SimpleSchema from 'simpl-schema';

const useStyles = makeStyles({
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

const Vaccination = (prop) => {
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const schema = new SimpleSchema({
    // const
  })
  // const firstName = Meteor.users.findOne(this.userId).firstname;
  return (
      <Container className={classes.container}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} className={classes.grid}>
            <Typography className={classes.title} variant='h2' color='primary'>
              Vaccination Information
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid>
              <Grid item xs={12} className={classes.grid}>
                <Typography className={classes.textContent}>Type</Typography>
                <input className={classes.input} id="" name="type" type="text" placeholder="Pfizer"></input>
                <Typography className={classes.textContent}>Lot Number</Typography>
                <input className={classes.input} id="" name="lot number" type="text" placeholder="XX0123"></input>
                <Typography className={classes.textContent}>Date</Typography>
                <input className={classes.input} id="" name="type" type="date" placeholder=""></input>
                <Typography className={classes.textContent}>Location</Typography>
                <input className={classes.input} id="" name="location" type="location" placeholder="777 Ward Aveune"></input>
              </Grid>
              <Grid item xs={12} className={classes.grid}>
                <Typography className={classes.textContent}>Last Name</Typography>
                <input className={classes.input} id="lastName" name="lastName" type="text"
                       placeholder="Last Name"></input>
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
          </form>
        </Grid>
      </Container>
  )
      ;
};

export default Vaccination;