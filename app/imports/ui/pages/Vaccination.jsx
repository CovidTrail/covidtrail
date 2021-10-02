import React from "react";
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, List, ListItem, ListItemText, Container, Box, TextField} from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';
import { Vaccines } from '../../api/vaccine/Vaccine';

const vaccStyle = makeStyles({
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
    marginBottom: 10,
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
    borderRadius: '10px',
    backgroundColor: 'primary',
  },
  vaccStatus: {
    boxShadow: '0px 0px 10px 0px',
    borderRadius: '16px',
    padding: '2em 8em 3em 8em',
  },
});

const Vaccination = (prop) => {
  const classes = vaccStyle();
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
              Vaccination Card
            </Typography>
          </Grid>
          <Grid className={classes.vaccStatus} container>
            <Grid item xs={6} className={classes.grid}>
              <Typography className={classes.textContent}>1st Dose</Typography>
              <Typography className={classes.textContent}>Manufacturer: </Typography>
              <Typography className={classes.textContent}>Lot Number: </Typography>
              <Typography className={classes.textContent}>Healthcare Professional/Clinic Site:</Typography>
            </Grid>
            <Grid item xs={6} className={classes.grid}>
              <Typography className={classes.textContent}>2nd Dose</Typography>
              <Typography className={classes.textContent}>Manufacturer: </Typography>
              <Typography className={classes.textContent}>Lot Number: </Typography>
              <Typography className={classes.textContent}>Healthcare Professional/Clinic Site: </Typography>
            </Grid>
            <Grid item xs={12} className={classes.grid}>
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.button} href="/">Back</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Vaccination;
// export default withTracker(() => {
//   const users = Vac.collection.find({}).fetch();
//   return {
//     users,
//   };
// })(Vaccination);