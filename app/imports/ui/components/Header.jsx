import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  title: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1
  },
}));

const Header = (props) => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleIconMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button  color="inherit" href="/" className={classes.title}>
              <Typography variant="h6">CovidTrail</Typography>
            </Button>
            <Box className={classes.spacer} color="inherit"/>
            <IconButton
                aria-label="account"
                aria-controls="menu"
                are-haspopup="true"
                onClick={handleIconMenu}
                color="inherit"
            >
              <AccountCircle/>
            </IconButton>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Login</MenuItem>
              <MenuItem onClick={handleClose}>Sign up</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
  );
}

// export default Header;
export default Header;