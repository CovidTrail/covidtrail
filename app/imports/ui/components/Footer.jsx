import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
const styles = makeStyles((theme) => ({
  root: {
    background: '#404143'
  },
}));

const Footer = (props) => {
  const classes = styles();
  return (
    <Box px={{xs: 3 , sm: 10}} py={{xs: 5}} color="white" bgcolor="#404143">
      <Container maxWidth="lg">       
      <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center'}}>
        <Link color="inherit" href="/Login">Login</Link>
        <Link color="inherit" href="/register">Register</Link>
        <Link color="inherit" href="/profile">Profile</Link>
       </Box>
       <Box sx={{textAlign:'center'}} py={{xs:3}}>
       <Link color="inherit" href="https://covidtrail.github.io/"><GitHubIcon></GitHubIcon></Link>
       </Box>
      </Container>
    </Box>
  );
};

export default Footer;