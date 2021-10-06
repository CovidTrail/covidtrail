import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
const styles = makeStyles((theme) => ({
  root: {
    background: "#404143",
  },

  footerText: {
    fontSize: "12px",
    marginTop: '1em',
  }
}));

const Footer = (props) => {
  const classes = styles();
  return (
    <Box
      sx={{position:"relative", marginTop:"calc(5% + 60px)",bottom: "0px", height:"100%" }}
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5 }}
      color="white"
      bgcolor="#404143"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            textAlign: "center",
          }}
        >
          {/* <Link color="inherit" href="/Login">Login</Link> */}
          {/* <Link color="inherit" href="/register">Register</Link> */}
          {/* <Link color="inherit" href="/profile">Profile</Link> */}
        </Box>
        <Box sx={{ textAlign: "center", display:'flex',flexDirection:'column' }} py={{ xs: 1 }}>
          
          <Link color="inherit" href="https://covidtrail.github.io/">
          
            <GitHubIcon></GitHubIcon>
            
          </Link>
          <span className={classes.footerText}> 2021 COVID Trail, Inc.</span>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
