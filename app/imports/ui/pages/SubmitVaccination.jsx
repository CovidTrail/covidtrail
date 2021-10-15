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
import Image from "../../api/urlCollection/Image";

import SimpleSchema from "simpl-schema";
import swal from "sweetalert";
import { Cloudinary } from 'meteor/socialize:cloudinary';

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
  title: {
    textAlign: "center",
    color: "primary",
    marginTop: 10,
    fontWeight: "bold",
  },
  textContent: {
    margin: 2,
    fontSize: 25,
    textAlign: "center",
    width: "9em",
    background: "#ADD8E6",
    borderRadius: "0.2em",
  },
  input: {
    "&::placeholder": {
      paddingLeft: "1em",
      fontSize: 20,
      // paddingLeft: "1em",
    },
    height: "3em",
    width: "12em",
    // border: "solid black",
    borderRadius: "1em",
    margin: "1em",
  },
  inputImage: {
    height: "3em",
    width: "30em",
    border: "solid black",
    borderRadius: "1em",
    margin: "0 0 1em 0",

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
  const [lotNum2, setLotNum2] = React.useState("N/A");
  const [date2, setDate2] = React.useState("N/A");
  const [location2, setLocation2] = React.useState("N/A");
  const [image, setImage] = React.useState("N/A");


  const [imageUrl, setImageUrl]= React.useState("")
  const [imageAlt, setImageAlt]= React.useState("")
  const { user, userId, dateOfSubmission, currentVaccine, ready } = props;

//Handles change from Drop Down Menu
  const handleChange = (e) => {
    setVaccineName(e.target.value);
    console.log(vaccineName);

  };

  //handle on change of the image we are putting into the
  //database
  const onChange = (e) => {
    //Good
    console.log("Image to upload:", e.target.files[0])
    setImage(e.target.files[0]);
    //image now has all information from target
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
            Meteor.call('updateImageUrl', owner, { owner, imageUrl })


            setImage(info.secure_url)
            console.log("Image after insert? :", image)
            setImageAlt("An image of ${info.original_filename}")

          }
        },
    ).open(); // open up the widget after creation
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
          image
        },
        (error) => {
          if (error) {
            swal("Error", "Missing required fields", "error").then(function () {
              window.location = "/submitvaccination";
            });
          } else {
            swal({
              text: "Success!",
            }).then(function () {
              window.location = "/vaccination";
            });
          }
        }
    );
  };

  // const schema = new SimpleSchema({
  //   // const
  // });
  // const firstName = Meteor.users.findOne(this.userId).firstname;
  return (

      <Container className={classes.container}>
        <Grid container className={classes.grid}>
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
                    Johnson & Johnson
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <form onSubmit={handleSubmit}>
            {vaccineName === "Johnson & Johnson" ? (
                <Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>
                      Number
                    </Typography>
                    <Input
                        className={classes.input}
                        id="lotNum1"
                        name="lotNum1"
                        type="lotNum1"
                        placeholder="XX0123"
                        onChange={(e) => setLotNum1(e.target.value)}
                    > </Input>
                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Date</Typography>
                    <Input
                        className={classes.input}
                        id="date1"
                        name="date1"
                        type="date"
                        placeholder="MM/DD/YYYY"
                        onChange={(e) => setDate1(e.target.value)}
                    > </Input>
                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>
                      Location
                    </Typography>
                    <Input
                        className={classes.input}
                        id="location1"
                        name="location1"
                        type="location1"
                        placeholder="777 Ward Aveune"
                        onChange={(e) => setLocation1(e.target.value)}
                    > </Input>
                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>
                      Image
                    </Typography>
                    <Input
                        className={classes.inputImage}
                        id="image"
                        name="image"
                        type="button"
                        placeholder="C:\myCard.jpg"
                        onClick={(e) => openImage(e)}
                    > </Input>
                  </Grid>
                </Grid>
            ) : (
                <Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>
                      Number
                    </Typography>
                    <Input
                        className={classes.input}
                        id="lotNum1"
                        name="lotNum1"
                        type="lotNum1"
                        placeholder="XX0123"
                        onChange={(e) => setLotNum1(e.target.value)}
                    > </Input>
                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Date</Typography>
                    <Input
                        className={classes.input}
                        id="date1"
                        name="date1"
                        type="date"
                        placeholder="MM/DD/YYYY"
                        onChange={(e) => setDate1(e.target.value)}
                    > </Input>
                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>
                      Location
                    </Typography>
                    <Input
                        className={classes.input}
                        id="location1"
                        name="location1"
                        type="location1"
                        placeholder="777 Ward Aveune"
                        onChange={(e) => setLocation1(e.target.value)}
                    > </Input>
                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>
                      Number
                    </Typography>
                    <Input
                        className={classes.input}
                        id="lotNum2"
                        name="lotNum2"
                        type="lotNum2"
                        placeholder="XX0123"
                        onChange={(e) => setLotNum2(e.target.value)}
                    > </Input>
                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>Date</Typography>
                    <Input
                        className={classes.input}
                        id="date2"
                        name="date2"
                        type="date"
                        placeholder="MM/DD/YYYY"
                        onChange={(e) => setDate2(e.target.value)}
                    > </Input>
                  </Grid>

                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>
                      Location
                    </Typography>
                    <Input
                        className={classes.input}
                        id="location2"
                        name="location2"
                        type="location2"
                        placeholder="777 Ward Aveune"
                        onChange={(e) => setLocation2(e.target.value)}
                    > </Input>
                  </Grid>
                  <Grid item xs={4} className={classes.grid}>
                    <Typography className={classes.textContent}>
                      Image
                    </Typography>
                    <Input
                        className={classes.inputImage}
                        id="image"
                        name="image"
                        type="button"
                        placeholder="C:\myCard.jpg"
                        accept=".jpeg, .png, .jpg"
                        onClick={(e) => openImage(e)}
                    > </Input>
                  </Grid>
                </Grid>
            )}

            <Grid item xs={12}>
              <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
              >
                Submit
              </Button>
            </Grid>
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
  const urlsubscription = Meteor.subscribe("urls");
  return {
    user: Meteor.user() ? Meteor.user().username : "",
    userId: Meteor.userId(),
    dateOfSubmission: Date(),
    currentVaccine: Meteor.user() ? Vaccines.find({ userId: Meteor.userId() }, { fields: { _id: 1 } }).fetch() : [],
    ready: subscription.ready() && urlsubscription.ready(),

  };
})(SubmitVaccination);

export default withRouter(SubmitVaccinationContainer);
