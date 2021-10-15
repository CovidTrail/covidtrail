import React from "react";
import { Vaccines } from "../../api/vaccine/Vaccine";
import { makeStyles } from "@material-ui/core/styles";
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
  TextField,
  Input,
} from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Cloudinary } from 'meteor/socialize:cloudinary';
import SimpleSchema from "simpl-schema";
import swal from "sweetalert";

const useStyles = makeStyles({
  container: {
    maxWidth: "lg",
    display: "flex",
    flexDirection: "column",
    padding:"3em",
    // margin: "3em 0",
  },
  doseContainer: {
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    // justifyContent: "center",
  },
  inputImage: {
    height: "3em",
    width: "10em",
    border: "solid black",
    borderRadius: "1em",
    margin: "0 0 1em 0",

  },
  title: {
    textAlign: "center",
    color: "primary",
    marginTop: 10,
    fontWeight: "bold",
  },
  textContent: {
    margin: 2,
    fontSize: 25,
    width: "7em",
    textAlign: "center",
    width: "9em",
    background: "#ADD8E6",
    borderRadius: "0.2em",
  },
  input: {
    "&::placeholder": {
      fontSize: 20,
      // paddingLeft: "1em",
    },
    height: "3em",
    width: "12em",
    // border: "solid black",
    borderRadius: "1em",
    margin: "1em",
  },
  button: {
    margin: "0 0",
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
    textAlign: "center",
    justifyContent: "center",
  },
});

const SubmitVaccination = (props) => {
  const classes = useStyles();
  const [vaccineName, setVaccineName] = React.useState("");
  const [lotNum1, setLotNum1] = React.useState("");
  const [date1, setDate1] = React.useState("");
  const [location1, setLocation1] = React.useState("");
  const [lotNum2, setLotNum2] = React.useState("NA");
  const [date2, setDate2] = React.useState("NA");
  const [location2, setLocation2] = React.useState("NA");
  const [image, setImage] = React.useState("");
  const [imageUrl, setImageUrl]= React.useState("");
  const [imageAlt, setImageAlt]= React.useState("");
  const { user, userId, dateOfSubmission, currentVaccine, ready } = props;
  const handleChange = (e) => {
    setVaccineName(e.target.value);
    console.log(vaccineName);
  };

    const openImage = () => {
    // create the widget

    window.cloudinary.createUploadWidget(
        {
          cloudName: 'covid-trail',
          uploadPreset: 'covid-trail',
        },
        (error, { event, info }) => {
          if (event === 'success') {

            const owner = Meteor.user().username;
            const imageUrl = info.secure_url

            setImage(info.secure_url)
            setImageAlt("An image of ${info.original_filename}")

          }
        },
    ).open(); // open up the widget after creation
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    currentVaccine.map((x) => {
      Vaccines.remove({ _id: x._id });
    });

    
    Vaccines.insert(
      {
        userId,
        vaccineName,
        lotNum1,
        date1,
        location1,
        lotNum2,
        date2,
        location2,
        dateOfSubmission,
        image,
      },
      (error) => {
        if (error) {
          swal("Error", "Missing required fields", "error").then(function () {
 
            window.location = "/submitvaccination";
          });
        } else {
          swal({
            text: "Success!",
            icon: "success",
          }).then(function () {
            window.location = "/vaccination";
          });
        }
      }
    );
  };

  const schema = new SimpleSchema({
    // const
  });
  // const firstName = Meteor.users.findOne(this.userId).firstname;
  return (
    <Container className={classes.container}>
      <Grid
        container
        className={classes.grid}
        spacing={2}
        justifyContent="center"
      >
        <Grid item xs={12} className={classes.grid}>
          <Typography className={classes.title} variant="h2" color="primary">
            Vaccination Information
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.grid}>
          <Box className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Type</InputLabel>
              <Select value={vaccineName} onChange={handleChange}>
                <MenuItem value={"Pzifer"}>Pfizer</MenuItem>
                <MenuItem value={"Moderna"}>Moderna</MenuItem>
                <MenuItem value={"Johnson & Johnson"}>
                  {`Johnson & Johnson`}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <form onSubmit={handleSubmit}>
          {vaccineName === "Johnson & Johnson" ? (
            <Container className={classes.doseContainer}>
              <TextField
                className={classes.input}
                id="lotNum1"
                label="Lot Number"
                name="lotNum1"
                type="lotNum1"
                placeholder="XX0123"
                onChange={(e) => setLotNum1(e.target.value)}
                variant="outlined"
                margin="normal"
              ></TextField>

              <TextField
                className={classes.input}
                id="date1"
                label="Date"
                name="date1"
                type="date"
                onChange={(e) => setDate1(e.target.value)}
                variant="outlined"
                margin="normal"
              ></TextField>

              <TextField
                className={classes.input}
                id="location1"
                label="Location"
                name="location1"
                type="location1"
                placeholder="777 Ward Aveune"
                onChange={(e) => setLocation1(e.target.value)}
                variant="outlined"
                margin="normal"
              ></TextField>

                  <Button
                        className={classes.inputImage}
                        id="image"
                        name="image"
                        type="button"
                        placeholder="upload image"
                        onClick={(e) => openImage(e)}
                    >Upload image</Button>
            </Container>
          ) : (
            <Container className={classes.container}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Container className={classes.doseContainer}>
                  <Typography className={classes.textContent}>
                    1st Dose
                  </Typography>
                  <TextField
                    className={classes.input}
                    id="lotNum1"
                    label="Lot Number"
                    name="lotNum1"
                    type="lotNum1"
                    placeholder="XX0123"
                    onChange={(e) => setLotNum1(e.target.value)}
                    variant="outlined"
                    margin="normal"
                  ></TextField>
                  <TextField
                    className={classes.input}
                    id="date1"
                    label="Date"
                    name="date1"
                    type="date"
                    onChange={(e) => setDate1(e.target.value)}
                    variant="outlined"
                    margin="normal"
                  ></TextField>
                  <TextField
                    className={classes.input}
                    id="location1"
                    label="Location"
                    name="location1"
                    type="location1"
                    placeholder="777 Ward Aveune"
                    onChange={(e) => setLocation1(e.target.value)}
                    variant="outlined"
                    margin="normal"
                  ></TextField>
                </Container>

                <Container className={classes.doseContainer}>
                  <Typography className={classes.textContent}>
                    2nd Dose
                  </Typography>
                  <TextField
                    className={classes.input}
                    id="lotNum2"
                    label="Lot Number"
                    name="lotNum2"
                    type="lotNum2"
                    placeholder="XX0123"
                    onChange={(e) => setLotNum2(e.target.value)}
                    variant="outlined"
                    margin="normal"
                  ></TextField>
                  <TextField
                    className={classes.input}
                    id="date2"
                    label="Date"
                    name="date2"
                    type="date"
                    // placeholder="MM/DD/YYYY"
                    onChange={(e) => setDate2(e.target.value)}
                    variant="outlined"
                    margin="normal"
                  ></TextField>

                  <TextField
                    className={classes.input}
                    id="location2"
                    label="Location"
                    name="location2"
                    type="location2"
                    placeholder="777 Ward Aveune"
                    onChange={(e) => setLocation2(e.target.value)}
                    variant="outlined"
                    margin="normal"
                  ></TextField>

                  <Button
                        className={classes.inputImage}
                        id="image"
                        name="image"
                        type="button"
                        placeholder="upload image"
                        onClick={(e) => openImage(e)}
                    >Upload image</Button>
                </Container>
              </div>
            </Container>
          )}

          <Container style={{textAlign:"right"}}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </Container>
        </form>
      </Grid>
    </Container>
  );
};

SubmitVaccination.propTypes = {
  user: PropTypes.string,
  userId: PropTypes.string,
  dateOfSubmission: PropTypes.string,
  currentVaccine: PropTypes.array,
  ready: PropTypes.bool.isRequired,
};

const SubmitVaccinationContainer = withTracker(() => {
  const subscription = Meteor.subscribe("Vaccine");
  return {
    user: Meteor.user() ? Meteor.user().username : "",
    userId: Meteor.userId(),
    dateOfSubmission: Date(),
    currentVaccine: Meteor.user()
      ? Vaccines.find(
          { userId: Meteor.userId() },
          { fields: { _id: 1 } }
        ).fetch()
      : [],
      ready: subscription.ready(),
  };
})(SubmitVaccination);

export default withRouter(SubmitVaccinationContainer);
