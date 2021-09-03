import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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
  button: {
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-start'
  },
  buttonClicked: {
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: 'grey'
  },
}));

const Checkin = (props) => {
  const classes = styles();
  const [value, setValue] = React.useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
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
          <ul>
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
          <box>
          <Button fullWidth variant="contained" className={classes.buttonClicked} startIcon={<CheckBoxOutlineBlankIcon/>}>No</Button>
          <Button fullWidth variant="contained" className={classes.buttonClicked} startIcon={<CheckBoxOutlineBlankIcon/>}>Yes</Button>
          <Button fullWidth variant="contained" className={classes.button} color="primary">Submit</Button>
          </box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Checkin;
