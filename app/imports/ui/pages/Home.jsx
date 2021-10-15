import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Container,
  Box,
  Avatar,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AssignmentTurnedInOutlined from "@material-ui/icons/AssignmentTurnedInOutlined";
import { Checkins } from "../../api/checkin/Checkin";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
/* Create a upper level class to stylize the elements*/
const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#f1edee",
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
    padding: "3em",
    borderRadius: "4px",
  },
  container: {
    maxWidth: "lg",
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
  },

  button: {
    
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 5px",
  },

  typography_primary: {
    /* Only prop needed to center text*/
    textAlign: "center",
    /* Does not pass Material UI's color. */
    color: "primary",
    marginTop: 10,
  },

  typography_steps_primary: {
    /* Only prop needed to center text*/
    textAlign: "center",
    /* Does not pass Material UI's color. */
    color: "primary",
    backgroundColor: "#DEDEDE",
    marginTop: 10,
  },

  typography_secondary: {
    /* Only prop needed to center text*/
    textAlign: "center",
    /* Does not pass Material UI's color. */
    color: "secondary",
    marginTop: 10,
  },

  typography_steps_secondary: {
    /* Only prop needed to center text*/
    textAlign: "center",
    /* Does not pass Material UI's color. */
    color: "secondary",
    backgroundColor: "#DEDEDE",
    margin: 10,
  },

  grid: {
    /*Top Grid element*/
    /*flexDirection: 'row',*/
    justifyContent: "center",
  },

  box: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
  },
}));

Meteor.subscribe("Status");

const Home = (props) => {
  /* Building the Main Page */
  /* Column width max is 12. */
  /*Import the styling above. */
  const classes = useStyles();
  const { currentUser, currentStatus } = props;

  if (currentUser) {
    //print array of object
    var status = currentStatus.map((item) => item.status);
    console.log(status[0]);

    if (status[0] == "No") {
      var status_text = "Approved";
    } else if (status[0] == "Yes") {
      var status_text = "Declined";
    }
  }

  return (
    <Container className={classes.container}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} className={classes.grid}>
          <Typography
            className={classes.typography_primary}
            variant="h2"
            color="primary"
          >
            Stop the Trail with You!
          </Typography>
        </Grid>

        <Grid item className={classes.grid} xs={12}>
          <Typography className={classes.typography_secondary} variant="h5" color="secondary">
            Do you your part to prevent community spread. Track your symptoms
            with our application.
          </Typography>
        </Grid>

        {currentUser === "" ? (
          <Grid item className={classes.grid} xs={12}>
            <Box className={classes.box}>
              <Button
                component={Link}
                to={"/Register"}
                className={classes.button}
                variant="outlined"
                color="primary"
              >
                Register Here
              </Button>
            </Box>
            <Typography
              className={classes.typography_primary}
              variant="h6"
              color="primary"
            >
              Already a member?
              <br />
            </Typography>

            <Box className={classes.box}>
              <Button
                component={Link}
                to={"/Login"}
                className={classes.button}
                variant="outlined"
                color="primary"
              >
                Sign In
              </Button>
            </Box>
          </Grid>
        ) : (
          <Paper className={classes.list}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* No - healthy, free to visit , yes - sick, don't come */}
                  {status[0] === "No" ? (
                    <AssignmentTurnedInOutlined style={{ color: "green" }} />
                  ) : (
                    <AssignmentTurnedInOutlined style={{ color: "red" }} />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={"COVID Status: " + status_text}
                secondary={currentDate}
              />
              <Button
                component={Link}
                to={"/Checkin"}
                className={classes.button}
                variant="outlined"
                color="primary"
              >
                Update
              </Button>
            </ListItem>
            {status[0] === "No" ? (
              <p> You're welcome to visit.</p>
            ) : (
              <p>
                {" "}
                It is recommended that you stay home until the next check in.
              </p>
            )}
          </Paper>
        )}

        {currentUser === "" ? (
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Typography className={classes.typography_steps_secondary} variant='h6' color='secondary'>
                Not yet a member? Become one in 3 easy steps.
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    1.) Click Register Here
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    2.) Enter your Personal Information
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    3.) Click Register
                  </ListItemText>
                </ListItem>
                <ListItem>
                  {/* <ListItemText>
                    Done!
                  </ListItemText> */}
                </ListItem>
              </List>
              <Box className={classes.box}>

              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.typography_steps_primary}
                variant="h6"
                color="primary"
              >
                How to do your Part to Stop the Trail
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>1.) Login Everyday</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>2.) Track your Symptoms</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    3.) Stay home when you are feeling Sick
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    4.) Get Vaccinated if you are able
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        ) : (
          <Grid container className={classes.grid}>
            <Grid item xs={6}>
              <Typography
                className={classes.typography_steps_primary}
                variant="h6"
                color="primary"
              >
                How to do your Part to Stop the Trail
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>1.) Login Everyday</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>2.) Track your Symptoms</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    3.) Stay home when you are feeling Sick
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    4.) Get Vaccinated if you are able
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

Home.propTypes = {
  currentUser: PropTypes.string,
  currentStatus: PropTypes.array,
};

const currentDateTime = new Date();
const currentDate =
  currentDateTime.getFullYear() +
  "/" +
  (currentDateTime.getMonth() + 1) +
  "/" +
  currentDateTime.getDate();
const HeaderContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : "",
  currentStatus: Meteor.user()
    ? Checkins.find(
        { user: Meteor.user().username, date: currentDate },
        { fields: { status: 1 } }
      ).fetch()
    : [],
}))(Home);

export default withRouter(HeaderContainer);
