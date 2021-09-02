import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
}));

const Checkin = (props) => {
  const classes = styles();
  return (
    <Container className={classes.container}>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" align="center">
              Does this apply to you?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
            <Box>

            </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Checkin;
