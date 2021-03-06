import React from "react";
import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { makeStyles } from "@material-ui/core/styles";
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
  Paper,
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Vaccines } from "../../api/vaccine/Vaccine";
import { withTracker } from "meteor/react-meteor-data";

const vaccStyle = makeStyles({
  container: {
    maxWidth: "lg",
    display: "flex",
    flexDirection: "column",
    marginTop: "3em",
    marginBottom: "3em",
    height: "60vh",
  },
  grid: {
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "primary",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  textContent: {
    margin: 2,
    fontSize: 20,
  },
  input: {
    "&::placeholder": {
      fontSize: 20,
      paddingLeft: "1em",
    },
    height: "3em",
    width: "30em",
    border: "solid black",
    borderRadius: "1em",
    margin: "0 0 1em 0",
  },
  button: {
    "&:hover": {
      backgroundColor: "#3f51b6",
    },
    height: "40px",
    margin: "1em 1em 1em 0em",
    borderRadius: "10px",
    backgroundColor: "#3f51b5",
    color: "White",
  },
  submitButton: {
    "&:hover": {
      backgroundColor: "#3f51b6",
    },
    margin: "1em 0 1em 0",
    fontSize: "2em",
    backgroundColor: "#3f51b5",
    borderRadius: "10px",
    color: "White",
  },
  vaccStatus: {
    // boxShadow: "0px 0px 10px 0px",
    backgroundColor: "#f1edee",
    borderRadius: "1em",
    padding: "2em 4em 3em 4em",
  },
});

const Vaccination = (props) => {
  const { vaccine } = props;
  const vaccineLength = vaccine.length;
  var boolean = "";
  if (vaccineLength > 0) {
    boolean = "Yes";
  } else {
    boolean = "No";
  }
  const classes = vaccStyle();
  var vaccineName = "";
  var lotOne = "";
  var siteOne = "";
  var dateOne = "";
  var lotTwo = "";
  var siteTwo = "";
  var dateTwo = "";
  var image = "";
  vaccine.map((result) => {
    vaccineName = result.vaccineName;
    lotOne = result.lotNum1;
    siteOne = result.location1;
    dateOne = result.date1;
    lotTwo = result.lotNum2;
    siteTwo = result.location2;
    dateTwo = result.date2;
    image = result.image;
  });
  return (
    <Container className={classes.container}>
      {boolean === "Yes" ? (
        <Grid container className={classes.grid}>
          <Grid item xs={12} className={classes.grid}>
            <Typography className={classes.title} variant="h2" color="primary">
              Vaccination Card
            </Typography>
          </Grid>
          <Paper className={classes.vaccStatus}>
          <Grid container spacing={1}>
            
            <Grid item xs={6} className={classes.grid}>
              <Typography className={classes.textContent}>1st Dose </Typography>
              <Typography className={classes.textContent}>
                Manufacturer: {vaccineName}{" "}
              </Typography>
              <Typography className={classes.textContent}>
                Lot Number: {lotOne}{" "}
              </Typography>
              <Typography className={classes.textContent}>
                Healthcare Professional/Clinic Site: {siteOne}{" "}
              </Typography>
              <Typography className={classes.textContent}>
                Date: {dateOne}{" "}
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.grid}>
              <Typography className={classes.textContent}>2nd Dose </Typography>
              <Typography className={classes.textContent}>
                Manufacturer: {vaccineName}{" "}
              </Typography>
              <Typography className={classes.textContent}>
                Lot Number: {lotTwo}{" "}
              </Typography>
              <Typography className={classes.textContent}>
                Healthcare Professional/Clinic Site: {siteTwo}
              </Typography>
              <Typography className={classes.textContent}>
                Date: {dateTwo}{" "}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.grid}></Grid>
            <Grid item xs={12}>
            <img src={image}/>
            </Grid>
            <Grid item xs={6}>
              <Button className={classes.button} href="/">
                Back
              </Button>
              <Button className={classes.button} href="/SubmitVaccination">
                Resubmit Vaccination
              </Button>
            </Grid>
            
          </Grid>
          </Paper>
        </Grid>
      ) : (
        <Button className={classes.submitButton} href="/SubmitVaccination">
          Submit Vaccination
        </Button>
      )}
    </Container>
  );
};

Vaccination.propTypes = {
  vaccine: PropTypes.array,
  ready: PropTypes.bool.isRequired,
};

const VaccinationContainer = withTracker(() => {
  const subscription = Meteor.subscribe("Vaccine");
  return {
    vaccine: Vaccines.find().fetch(),
    ready: subscription.ready(),
  };
})(Vaccination);

export default withRouter(VaccinationContainer);
