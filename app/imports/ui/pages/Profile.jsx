import React from "react";
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, List, ListItem, ListItemText, Container, Box, TextField} from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { UsersCollection } from '../../api/user/User';

const profileStyle = makeStyles({
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

const Profile = (props) => {
  const classes = profileStyle();
  //
  // const [value, setValue] = React.useState(null);
  // const [error, setError] = React.useState(false);
  // const [helperText, setHelperText] = React.useState("");
  // const { userId, email, firstName, lastName } = props;
  //
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  //   setHelperText(" ");
  //   setError(false);
  // };
  //
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(user);
  //   if (user)
  //   {
  //     console.log(currentStatus);
  //     currentStatus.map(x => { UsersCollection.remove({ _id: x._id })});
  //     const status = value
  //     UsersCollection.insert({ userId, email, firstName, lastName },
  //         (error) => {
  //           if (error) {
  //             swal('Error', error.message, 'error');
  //           } else {
  //             swal('Success');
  //           }
  //         });
  //   } else {
  //     swal('Error, you must log in to submit an answer');
  //     setError(true);
  //   }
  // const firstName = Meteor.users.findOne(this.userId).firstname;
    return (
        <Container className={classes.container}>
          <Grid container className={classes.grid}>
            <Grid item xs={12} className={classes.grid}>
              <Typography className={classes.title} variant='h2' color='primary'>
                Profile
              </Typography>
            </Grid>
            {/*<form onSubmit={handleSubmit}>*/}
              <Grid>
                  <Grid item xs={12} className={classes.grid}>
                    <Typography className={classes.textContent}>First Name</Typography>
                    <input className={classes.input} id="firstName" name="firstName" type="text" value={this.props.userId.profile}></input>
                    {/*<input className={classes.input} id="firstName" name="firstName" type="text" placeholder={this.props.user.firstName}></input>*/}
                  </Grid>
                  <Grid item xs={12} className={classes.grid}>
                    <Typography className={classes.textContent}>Last Name</Typography>
                    <input className={classes.input} id="lastName" name="lastName" type="text" placeholder="Last Name"></input>
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
              {/*</form>*/}
            </Grid>
        </Container>
  );
};
// }

Profile.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
};

export default withRouter(Profile);


// const ProfileinContainer = withTracker(() => {
//   return {
//     userId: Meteor.userId(),
//     currentStatus: Meteor.user() ? UsersCollection.find({user: Meteor.user().username, date: currentDate}, {fields: { _id: 1 }}).fetch() : [],
//   }
// })(Profile);
// export default Profile;