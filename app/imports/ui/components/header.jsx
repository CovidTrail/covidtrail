import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends React.Component {

  render() {
    const { classes } = this.props
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                CovidTrail
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}



/** proptypes for current user (to be used later)*/
Header.propTypes = {
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.string,
  currentId: PropTypes.string,
}

/** Linking Meteor user data to component */
const HeaderContainer = withTracker(() => ({
  //currentUser: Meteor.user() ? Meteor.user().username : '',
  //currentId: Meteor.userId(),
}))(Header);

// export default Header;
export default withStyles(styles)(withRouter(HeaderContainer));