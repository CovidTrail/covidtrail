import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../pages/Profile.css';

const Profile = (prop) => {
    return (
        <div className="profileInfo">
          <Toolbar>
            <Typography variant="h2">
              Profile
            </Typography>
          </Toolbar>
          <Grid className="profileGrid">
            <Grid item md={3}>
              <Typography>First Name</Typography>
              <input id="firstName" name="firstName" type="text" placeholder="First Name"></input>
            </Grid>
            <Grid item md={3}>
              <Typography>Last Name</Typography>
              <input id="lastName" name="lastName" type="text" placeholder="Last Name"></input>
            </Grid>
            <Grid item md={3}>
              <Typography>Email</Typography>
              <input id="email" name="email" type="email" placeholder="Email"></input>
            </Grid>
            <Grid item md={3}>
              <Button>Back</Button>
              <Button variant="contained" color="primary">Update</Button>
            </Grid>
          </Grid>
        </div>
  );
};

export default Profile;