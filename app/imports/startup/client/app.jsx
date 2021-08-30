import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Root from "../../ui/containers/App";

Meteor.startup(() => {
  render(<Root />, document.getElementById("app"));
});
