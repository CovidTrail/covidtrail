import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link, withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  title: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { currentUser, currentId } = props;

  const handleIconMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Meteor.logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="/" className={classes.title}>
            <Typography variant="h6">CovidTrail</Typography>
          </Button>
          <Box className={classes.spacer}>
            <Button color="inherit" href="/Checkin">
              <Typography variant="h6">Checkin</Typography>
            </Button>
          </Box>
          <IconButton
            aria-label="account"
            aria-controls="menu"
            are-haspopup="true"
            onClick={handleIconMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            {currentUser === "" ? (
              <div>
                <MenuItem component={Link} to="/Login" onClick={handleClose}>
                  Login
                </MenuItem>
                <MenuItem component={Link} to="/Register" onClick={handleClose}>
                  Register
                </MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem component={Link} to="/Profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/" onClick={handleLogout}>
                  Logout
                </MenuItem>
              </div>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.string,
  currentId: PropTypes.string,
};

const HeaderContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : "",
  currentId: Meteor.userId(),
}))(Header);

// export default Header;
export default withRouter(HeaderContainer);
