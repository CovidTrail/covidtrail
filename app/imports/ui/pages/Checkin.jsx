import React from "react";
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Checkins } from "../../api/checkin/Checkin";
import { SwipeableDrawer } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  container: {
    display: "flex",
    minHeight: "65vh",
    flexDirection: "column",
    maxWidth: "lg",
    //backgroundColor: "grey"
  },
  grid: {
    paddingTop: "3vh",
  },
  listItem: {
    paddingBottom: "15px",
  },
  list: {
    marginBottom: "0px",
  },
  formControl: {
    margin: theme.spacing(2),
  },
  submitButton: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  symptoms: {
    justifyItems: "center",
    display: "grid",
  },
}));

const Checkin = (props) => {
  const classes = styles();
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const { user, userId, dateTime, date, currentStatus, ready } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    if (user)
    {
      console.log(currentStatus);
      currentStatus.map(x => { Checkins.remove({ _id: x._id })});
      const status = value
      Checkins.insert({ user, userId, dateTime, date, status },
                (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success');
          }
        });
    } else {
      swal('Error, you must log in to submit an answer');
      setError(true);
    }
  };

  return (
    <Container className={classes.container}>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h4" align="center">
              Daily Covid-19 Check in
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.symptoms}>
          <ul className={classes.list}>
            <li>
              <Box className={classes.listItem}>
                <b>Have you experienced any of these symptoms?</b>
                <ul>
                  <li>Fever or chills</li>
                  <li>Cough</li>
                  <li>Shortness of breath or difficulty breathing</li>
                  <li>Fatigue</li>
                  <li>Muscle of body aches</li>
                  <li>Headaches</li>
                  <li>Loss of taste or smell</li>
                  <li>sore throat</li>
                  <li>Congestion or runny nose</li>
                  <li>Nausea or vomiting</li>
                  <li>Diarrhea</li>
                </ul>
              </Box>
            </li>
            <li>
              <Box className={classes.listItem}>
                <b>Have you tested positive for Covid-19?</b>
              </Box>
            </li>
            <li>
              <Box className={classes.listItem}>
                <b>Have you recently been exposed to Covid-19?</b>
              </Box>
            </li>
          </ul>
        </Grid>
        <Grid container item xs={12} className={classes.symptoms}>
          <Box>
            <form onSubmit={handleSubmit}>
              <FormControl
                component="fieldset"
                error={error}
                className={classes.formControl}
              >
                <RadioGroup
                  aria-label="answer"
                  name="answer"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  className={classes.submitButton}
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

Checkin.propTypes = {
  user: PropTypes.string,
  userId: PropTypes.string,
  dateTime: PropTypes.string,
  date: PropTypes.string,
  currentStatus: PropTypes.array,
  ready: PropTypes.bool.isRequired,
}

const CheckinContainer = withTracker(() => {
  const subscription = Meteor.subscribe('Checkin');
  const currentDateTime = new Date();
  const currentDate = currentDateTime.getFullYear()+'/'+(currentDateTime.getMonth()+1)+'/'+currentDateTime.getDate();
   return {
    user: Meteor.user() ? Meteor.user().username : '',
    userId: Meteor.userId(),
    dateTime: Date(),
    date: currentDate,
    currentStatus: Meteor.user() ? Checkins.find({user: Meteor.user().username, date: currentDate}, {fields: { _id: 1 }}).fetch() : [],
    ready: subscription.ready(),
  }
})(Checkin);

export default withRouter(CheckinContainer)
