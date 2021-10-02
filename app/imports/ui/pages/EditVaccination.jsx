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
  FormControl,
    Input,
} from '@material-ui/core';
import { useState } from "react";
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SimpleSchema from 'simpl-schema';
import swal from "sweetalert";

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

const EditVaccination = (props) => {
  const classes = useStyles();
  const [vaccineName, setVaccineName] = React.useState("Pzifer");
  const [lotNum1, setLotNum1] = React.useState("");
  const [date1, setDate1] = React.useState("");
  const [location1, setLocation1] = React.useState("");
  const [lotNum2, setLotNum2] = React.useState("NA");
  const [date2, setDate2] = React.useState("NA");
  const [location2, setLocation2] = React.useState("NA");
  const { user, userId, dateOfSubmission } = props;
  const [value, setValue] = useState("Pzifer");
  const handleChange = e => setValue(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setVaccineName(value);
    Vaccines.insert({ userId, vaccineName, lotNum1, date1, location1, lotNum2, date2, location2, dateOfSubmission },
        (error) => {
          if(error) {
            swal('Error', error.message, 'error');
          } else {
            swal({
              text: 'Success!'
            });
          }
        });
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
                        <Input className={classes.input} id="lotNum1" name="lotNum1" type="lotNum1" placeholder="XX0123" onChange={(e)=>setLotNum1(e.target.value)}></Input>

                      </Grid>
                      <Grid item xs={4} className={classes.grid}>
                        <Typography className={classes.textContent}>Date</Typography>
                        <Input className={classes.input} id="date1" name="date1" type="date1" placeholder="MM/DD/YYYY" onChange={(e)=>setDate1(e.target.value)}></Input>

                      </Grid>

                      <Grid item xs={4} className={classes.grid}>
                        <Typography className={classes.textContent}>Location</Typography>
                        <Input className={classes.input} id="location1" name="location1" type="location1"
                               placeholder="777 Ward Aveune" onChange={(e)=> setLocation1(e.target.value)}></Input>
                      </Grid>
                    </Grid>

                ) :
                <Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Lot Numb</Typography>
                    <Input className={classes.input} id="lotNum1" name="lotNum1" type="lotNum1" placeholder="XX0123" onChange={(e)=> setLotNum1(e.target.value)}></Input>

                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Date</Typography>
                    <Input className={classes.input} id="date1" name="date1" type="date1" placeholder="MM/DD/YYYY" onChange={(e)=> setDate1(e.target.value)}></Input>

                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Location</Typography>
                    <Input className={classes.input} id="location1" name="location1" type="location1"
                           placeholder="777 Ward Aveune" onChange={(e)=> setLocation1(e.target.value)}></Input>
                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Lot Numb</Typography>
                    <Input className={classes.input} id="lotNum2" name="lotNum2" type="lotNum2" placeholder="XX0123" onChange={(e)=> setLotNum2(e.target.value)}></Input>

                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Date</Typography>
                    <Input className={classes.input} id="date2" name="date2" type="date2" placeholder="MM/DD/YYYY" onChange={(e)=> setDate2(e.target.value)}></Input>

                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Location</Typography>
                    <Input className={classes.input} id="location2" name="location2" type="location2"
                           placeholder="777 Ward Aveune" onChange={(e)=> setLocation2(e.target.value)}></Input>
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

EditVaccination.propTypes = {
  user: PropTypes.string,
  userId: PropTypes.string,
  dateOfSubmission: PropTypes.string,
}

const EditVaccinationContainer = withTracker(() => {
  return {
    user: Meteor.user() ? Meteor.user().username : '',
    userId: Meteor.userId(),
    dateOfSubmission: Date(),
  }
})(EditVaccination);

export default withRouter(EditVaccinationContainer);