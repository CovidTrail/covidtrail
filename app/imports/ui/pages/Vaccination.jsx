import React from "react";
import { Vaccines } from '../../api/vaccine/Vaccine';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Grid,
  Container,
  Box,
  MenuItem,
  InputLabel,
  Select,
  FormControl
} from '@material-ui/core';
import { useState } from "react";
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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
    textAlign: 'center',
    justifyContent: 'center',
  }
});

const Vaccination = (props) => {
  const classes = useStyles();
  const [vaccineName, setVaccineName] = React.useState("");
  const [lotNum1, setLotNum1] = React.useState("");
  const [date1, setDate1] = React.useState("");
  const [location1, setLocation1] = React.useState("");
  const [lotNum2, setLotNum2] = React.useState("");
  const [date2, setDate2] = React.useState("");
  const [location2, setLocation2] = React.useState("");
  const { user, userId, dateOfSubmission } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const [value, setValue] = useState("Pzifer");
  const handleChange = e => setValue(e.target.value);

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

          <Grid item xs={12} className={classes.grid}>
            <Box className={classes.box}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputLabel}>Type</InputLabel>
                <Select onChange={handleChange} defaultValue={""}>
                  <MenuItem value={"Pzifer"}>Pfizer</MenuItem>
                  <MenuItem value={"Moderna"}>Moderna</MenuItem>
                  <MenuItem value={"Johnson & Johnson"}>Johnson & Johnson</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <form onSubmit={handleSubmit}>
            {value === 'Johnson & Johnson' ? (
                    <Grid>

                      <Grid item xs={4} className={classes.grid}>
                        <Typography className={classes.textContent}>Lot Numb</Typography>
                        <input className={classes.input} id="" name="lot number" type="text" placeholder="XX0123"></input>

                      </Grid>
                      <Grid item xs={4} className={classes.grid}>
                        <Typography className={classes.textContent}>Date</Typography>
                        <input className={classes.input} id="" name="date" type="date" placeholder=""></input>

                      </Grid>

                      <Grid item xs={4} className={classes.grid}>
                        <Typography className={classes.textContent}>Location</Typography>
                        <input className={classes.input} id="" name="location" type="location"
                               placeholder="777 Ward Aveune"></input>
                      </Grid>
                    </Grid>

                ) :
                <Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Lot Numb</Typography>
                    <input className={classes.input} id="" name="lot number" type="text" placeholder="XX0123"></input>

                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Date</Typography>
                    <input className={classes.input} id="" name="date" type="date" placeholder=""></input>

                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Location</Typography>
                    <input className={classes.input} id="" name="location" type="location"
                           placeholder="777 Ward Aveune"></input>
                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Lot Numb</Typography>
                    <input className={classes.input} id="" name="lotnumber" type="text" placeholder="XX0123"></input>

                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Date</Typography>
                    <input className={classes.input} id="" name="type" type="date" placeholder=""></input>

                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Location</Typography>
                    <input className={classes.input} id="" name="location" type="location"
                           placeholder="777 Ward Aveune"></input>
                  </Grid>
                </Grid>
            }

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" className={classes.button}>Submit</Button>
            </Grid>

          </form>
        </Grid>
      </Container>
  );

};

Vaccination.propTypes = {
  user: PropTypes.string,
  userId: PropTypes.string,
  dateOfSubmission: PropTypes.string,
}

const VaccinationContainer = withTracker(() => {
  return {
    user: Meteor.user() ? Meteor.user().username : '',
    userId: Meteor.userId(),
    dateOfSubmission: Date(),
  }
})(Vaccination);

export default withRouter(VaccinationContainer);
