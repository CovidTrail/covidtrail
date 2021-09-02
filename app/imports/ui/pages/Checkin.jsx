import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles((theme) => ({
    container: {
        display: "flex",
        minHeight: "65vh",
        flexDirection: "column",
        maxWidth: 'lg',
        backgroundColor: "grey"
    }
}));

const Checkin = (props) => {
    const classes = styles();
    return(
        <Container className={classes.container}>
            <Typography variant="h1">Hello</Typography>
        </Container>
    );
}
export default Checkin;
