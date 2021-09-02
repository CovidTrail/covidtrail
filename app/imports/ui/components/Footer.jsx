import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const styles = makeStyles((theme) => ({
  root: {
    background: '#404143'
  },
}));

const Footer = (props) => {
  const classes = styles();
  return (
    <Box px={{xs: 3, sm: 10}} py={{xs: 5, sm: 7}} color="white" bgcolor="#404143">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Team Members</Box>
            <Box>
              <Typography>Clyde Felix</Typography>
              <Typography>Jake Imanaka</Typography>
              <Typography>Patrick McCrindle</Typography>
              <Typography>Justin Wong</Typography>
              <Typography>Tsz Wong</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Temp</Box>
            <Box>
              <Typography>
                temp text
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Account</Box>
            <Box>
              <Link color="inherit" href="/">Login</Link>
            </Box>
            <Box>
              <Link color="inherit" href="/">Sign up</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;