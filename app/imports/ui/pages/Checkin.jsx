import React from "react";
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
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
  }
}));

const Checkin = (props) => {
  const classes = styles();
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <Grid item xs={12}>
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
        <Grid item xs={12} sm={3}>
          <Box>
            <form>
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


export default Checkin;
